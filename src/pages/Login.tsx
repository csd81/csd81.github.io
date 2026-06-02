import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLang, type Bi } from '../shared/providers/LanguageProvider';
import { useAuth } from '../shared/providers/AuthProvider';
import { firebaseConfigured } from '../shared/auth/firebase';
import './login.css';

const UI = {
  kicker: { hu: 'Belépés', en: 'Sign in' },
  title: { hu: 'Jelentkezz be a teljes tananyagért', en: 'Sign in to unlock the full coursework' },
  lead: {
    hu: 'A numerikus módszerek anyaga bejelentkezés nélkül is elérhető. A diszkrét matematika, kalkulus és lineáris algebra fejezetekhez lépj be.',
    en: 'The Numerical Methods material is open to everyone. Sign in to access the Discrete Math, Calculus and Linear Algebra chapters.',
  },
  google: { hu: 'Belépés Google-fiókkal', en: 'Continue with Google' },
  or: { hu: 'vagy', en: 'or' },
  email: { hu: 'E-mail cím', en: 'Email address' },
  password: { hu: 'Jelszó', en: 'Password' },
  signIn: { hu: 'Belépés', en: 'Sign in' },
  signUp: { hu: 'Regisztráció', en: 'Create account' },
  toggleToSignUp: { hu: 'Nincs még fiókod? Regisztrálj', en: "Don't have an account? Sign up" },
  toggleToSignIn: { hu: 'Van már fiókod? Lépj be', en: 'Already have an account? Sign in' },
  magic: { hu: 'Belépési link küldése e-mailben', en: 'Email me a sign-in link' },
  magicSent: {
    hu: 'Elküldtük a belépési linket — nézd meg a postaládád!',
    en: 'Sign-in link sent — check your inbox!',
  },
  back: { hu: '← Vissza a főoldalra', en: '← Back to home' },
  notConfigured: {
    hu: 'A bejelentkezés még nincs beállítva (hiányzó Firebase-konfiguráció).',
    en: 'Sign-in is not configured yet (missing Firebase config).',
  },
} satisfies Record<string, Bi>;

export default function Login() {
  const { t } = useLang();
  const { user, loginGoogle, signInEmail, signUpEmail, sendMagicLink } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const from = (loc.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/';

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [magicSent, setMagicSent] = useState(false);

  // Already signed in (incl. completing a magic-link) → leave the login page.
  useEffect(() => {
    if (user) nav(from, { replace: true });
  }, [user, from, nav]);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError('');
    try {
      await fn();
    } catch (e) {
      setError(e instanceof Error ? e.message.replace(/^Firebase:\s*/, '') : String(e));
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    run(() => (mode === 'signin' ? signInEmail(email, password) : signUpEmail(email, password)));
  };

  const onMagic = () => {
    if (!email) {
      setError(t({ hu: 'Adj meg egy e-mail címet előbb.', en: 'Enter an email address first.' }));
      return;
    }
    run(async () => {
      await sendMagicLink(email);
      setMagicSent(true);
    });
  };

  return (
    <div className="login">
      <Link to="/" className="login__back">{t(UI.back)}</Link>
      <div className="login__card">
        <p className="login__kicker">{t(UI.kicker)}</p>
        <h1 className="login__title">{t(UI.title)}</h1>
        <p className="login__lead">{t(UI.lead)}</p>

        {!firebaseConfigured && <p className="login__warn">{t(UI.notConfigured)}</p>}

        <button className="login__google" onClick={() => run(loginGoogle)} disabled={busy}>
          <span aria-hidden="true" className="login__g">G</span>
          {t(UI.google)}
        </button>

        <div className="login__divider"><span>{t(UI.or)}</span></div>

        <form className="login__form" onSubmit={onSubmit}>
          <label className="login__label">
            {t(UI.email)}
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="login__label">
            {t(UI.password)}
            <input
              type="password"
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="login__primary" disabled={busy}>
            {mode === 'signin' ? t(UI.signIn) : t(UI.signUp)}
          </button>
        </form>

        <div className="login__alt">
          <button
            type="button"
            className="login__link"
            onClick={() => setMode((m) => (m === 'signin' ? 'signup' : 'signin'))}
          >
            {mode === 'signin' ? t(UI.toggleToSignUp) : t(UI.toggleToSignIn)}
          </button>
          <button type="button" className="login__link" onClick={onMagic} disabled={busy}>
            {t(UI.magic)}
          </button>
        </div>

        {magicSent && <p className="login__ok">{t(UI.magicSent)}</p>}
        {error && <p className="login__error">{error}</p>}
      </div>
    </div>
  );
}
