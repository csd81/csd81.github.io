import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  type User,
} from 'firebase/auth';
import { auth, googleProvider } from '../auth/firebase';

interface AuthCtx {
  /** The signed-in Firebase user, or null when signed out. */
  user: User | null;
  /** True until the initial auth state (and any pending magic-link) resolves. */
  loading: boolean;
  loginGoogle: () => Promise<void>;
  signInEmail: (email: string, password: string) => Promise<void>;
  signUpEmail: (email: string, password: string) => Promise<void>;
  /** Send a passwordless sign-in link to `email` (completed on return to the site). */
  sendMagicLink: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | null>(null);
const EMAIL_KEY = 'numerics-magiclink-email';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Complete a passwordless (magic-link) sign-in if we returned via one.
    async function completeMagicLink() {
      try {
        if (!isSignInWithEmailLink(auth, window.location.href)) return;
        let email = '';
        try {
          email = localStorage.getItem(EMAIL_KEY) ?? '';
        } catch {
          /* ignore */
        }
        if (!email) {
          email = window.prompt('Please confirm your email to finish signing in:') ?? '';
        }
        if (!email) return;
        await signInWithEmailLink(auth, email, window.location.href);
        try {
          localStorage.removeItem(EMAIL_KEY);
        } catch {
          /* ignore */
        }
        // Strip the sign-in params from the URL without a reload.
        window.history.replaceState({}, '', window.location.pathname);
      } catch {
        /* leave the user signed out; the login page will be shown */
      }
    }

    completeMagicLink();

    const unsub = onAuthStateChanged(auth, (u) => {
      if (cancelled) return;
      setUser(u);
      setLoading(false);
    });
    return () => {
      cancelled = true;
      unsub();
    };
  }, []);

  const value = useMemo<AuthCtx>(
    () => ({
      user,
      loading,
      loginGoogle: async () => {
        await signInWithPopup(auth, googleProvider);
      },
      signInEmail: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
      },
      signUpEmail: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
      },
      sendMagicLink: async (email) => {
        await sendSignInLinkToEmail(auth, email, {
          // Return to the site root (a real path → no GitHub Pages 404); the
          // provider completes the sign-in on load regardless of route.
          url: window.location.origin + '/',
          handleCodeInApp: true,
        });
        try {
          localStorage.setItem(EMAIL_KEY, email);
        } catch {
          /* ignore */
        }
      },
      logout: async () => {
        await signOut(auth);
      },
    }),
    [user, loading],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useAuth must be used within AuthProvider');
  return c;
}
