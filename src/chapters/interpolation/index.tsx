import { STR } from './i18n/strings';
import { useLang } from '../../shared/providers/LanguageProvider';
import Lesson from './lessons/Lesson';
import ChallengePlay from './components/ChallengePlay';
import { ScrollyTopBar, type SectionMeta } from '../../shared/scrolly';
import './styles.css';

const SECTIONS: SectionMeta[] = [
  { id: 'play', no: '6·play', title: { en: STR.en.nav.playground, hu: STR.hu.nav.playground }, blurb: { en: '', hu: '' } },
  { id: 'lagrange', no: '6.1', title: { en: STR.en.nav.lagrange, hu: STR.hu.nav.lagrange }, blurb: { en: '', hu: '' } },
  { id: 'newton', no: '6.2', title: { en: STR.en.nav.newton, hu: STR.hu.nav.newton }, blurb: { en: '', hu: '' } },
  { id: 'hermite', no: '6.4', title: { en: STR.en.nav.hermite, hu: STR.hu.nav.hermite }, blurb: { en: '', hu: '' } },
  { id: 'spline', no: '6.5', title: { en: STR.en.nav.spline, hu: STR.hu.nav.spline }, blurb: { en: '', hu: '' } },
];

/**
 * Chapter 6 — Interpolation (InterPlay), as a single scrollytelling page: the
 * playground and the four method lessons stacked, with the shared top-bar
 * (progress + § jump). The internal tab bar is dropped.
 */
export default function Chapter() {
  const { lang } = useLang();
  const str = STR[lang];
  const ss = { scrollMarginTop: 'calc(var(--nav-h) + var(--scrolly-topbar-h, 44px) + 8px)' };

  return (
    <div className="app ch-interpolation">
      <ScrollyTopBar sections={SECTIONS} />
      <header className="topbar">
        <div className="brand">
          <span className="logo">📈</span>
          <div>
            <div className="brand-title">{str.appTitle}</div>
            <div className="brand-sub">{str.tagline}</div>
          </div>
        </div>
      </header>

      <main className="content">
        <section id="play" style={ss}>
          <ChallengePlay str={str} />
        </section>
        <section id="lagrange" style={ss}>
          <Lesson
            str={str}
            method="lagrange"
            points={[
              { x: -1, y: -3 },
              { x: 1, y: 1 },
              { x: 2, y: 3 },
              { x: 3, y: 29 },
            ]}
            allowCompare
          />
        </section>
        <section id="newton" style={ss}>
          <Lesson
            str={str}
            method="newton"
            points={[
              { x: -1, y: -2 },
              { x: 1, y: 0 },
              { x: 2, y: -2 },
              { x: 3, y: 2 },
            ]}
            showTable
            allowCompare
          />
        </section>
        <section id="hermite" style={ss}>
          <Lesson
            str={str}
            method="hermite"
            points={[
              { x: -1, y: 2 },
              { x: 1, y: 4 },
              { x: 2, y: 11 },
            ]}
            derivatives={[3, -5, 30]}
            enableDerivatives
          />
        </section>
        <section id="spline" style={ss}>
          <Lesson
            str={str}
            method="spline"
            points={[
              { x: 0, y: 0.5 },
              { x: 1, y: 0.1 },
              { x: 1.5, y: 2.5 },
              { x: 2, y: -1 },
              { x: 3, y: -0.5 },
              { x: 4, y: 0 },
            ]}
            allowCompare
          />
        </section>
      </main>

      <footer className="foot">
        InterPlay · Numerical Analysis · Interpolation
      </footer>
    </div>
  );
}
