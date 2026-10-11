import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle,
  Clock3,
  ExternalLink,
  Hammer,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  Ship,
  ShieldCheck,
  Wrench,
  X,
  Zap,
  TriangleAlert,
} from 'lucide-react'

const phoneNumber = '2039487145'
const phoneLabel = '(203) 948-7145'
const facebookUrl =
  'https://www.facebook.com/search/top?q=Cory%27s%20Mobile%20Mechanics%20New%20Milford%20CT'

const services = [
  {
    number: '01',
    icon: Wrench,
    title: 'Driveway Diagnostics & Repair',
    description:
      'Get a clear answer and a dependable fix without arranging a tow or losing a day at the shop.',
    items: ['Check engine diagnostics', 'Starters & alternators', 'Battery testing & replacement'],
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Routine Maintenance',
    description:
      'Stay ahead of the next breakdown with straightforward maintenance at home or work.',
    items: ['Tune-ups & fluid changes', 'Brakes & general maintenance', 'Seasonal inspections'],
  },
  {
    number: '03',
    icon: Ship,
    title: 'Marine & Boat Service',
    description:
      'Mobile help for your boat, with practical service to keep you ready for the water.',
    items: ['Inboard & outboard tune-ups', 'Winterization', 'General boat maintenance'],
  },
]

const workPhotos = [
  {
    title: 'Starter Replacement in New Milford',
    label: 'AUTOMOTIVE · NEW MILFORD',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=85',
    alt: 'Mechanic inspecting a vehicle engine in a repair bay',
    video: true,
  },
  {
    title: 'Boat Motor Tune-up',
    label: 'MARINE · LITCHFIELD COUNTY',
    image:
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1100&q=85',
    alt: 'Motorboat on the water near the shoreline',
    video: true,
  },
  {
    title: 'Driveway Brake Job',
    label: 'AUTOMOTIVE · MOBILE SERVICE',
    image:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1100&q=85',
    alt: 'Close-up of a vehicle wheel during a repair',
    video: true,
  },
  {
    title: 'Diagnostics, Right at Home',
    label: 'DIAGNOSTICS · ON-SITE',
    image:
      'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1100&q=85',
    alt: 'Tools and equipment ready for an automotive repair',
    video: false,
  },
]

const steps = [
  {
    number: '01',
    title: 'Call or text Cory',
    description: 'Tell us what is going on and where you are. A few details help us prepare.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'We come to you',
    description: 'We coordinate a time and bring the tools to your driveway, home, or workplace.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Get back on the road',
    description: 'We diagnose and handle the repair on-site whenever the job allows.',
    icon: CheckCircle,
  },
]

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 90px; }
  body { margin: 0; min-width: 320px; background: #090a0a; color: #f5f5f4; font-family: 'DM Sans', Arial, sans-serif; }
  #root { display: block; width: 100%; max-width: none; min-height: 100vh; margin: 0; border: 0; text-align: left; }
  h1, h2, h3, p { margin-top: 0; }
  a { color: inherit; text-decoration: none; }
  button, input, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible { outline: 3px solid #facc15; outline-offset: 3px; }
  .cm-page { --yellow: #facc15; --orange: #f97316; --ink: #090a0a; --panel: #111313; --muted: #a1a1aa; --line: rgba(255,255,255,.1); overflow: hidden; background: var(--ink); }
  .cm-wrap { width: min(1160px, calc(100% - 44px)); margin: 0 auto; }
  .cm-topline { min-height: 38px; display: flex; align-items: center; justify-content: center; padding: 8px 14px; color: #171717; background: var(--yellow); font-size: 11px; font-weight: 800; letter-spacing: .095em; text-align: center; text-transform: uppercase; }
  .cm-topline a { margin-left: 5px; text-decoration: underline; text-underline-offset: 2px; }
  .cm-nav { position: sticky; z-index: 20; top: 0; border-bottom: 1px solid var(--line); background: rgba(9,10,10,.94); backdrop-filter: blur(16px); }
  .cm-nav-inner { min-height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .cm-brand { display: flex; flex-shrink: 0; align-items: center; gap: 11px; }
  .cm-brand-mark { width: 43px; height: 43px; display: grid; place-items: center; color: #111; background: var(--yellow); transform: skew(-6deg); }
  .cm-brand-mark svg { transform: skew(6deg); }
  .cm-brand-name { display: flex; flex-direction: column; color: #fff; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 20px; font-weight: 900; line-height: .9; letter-spacing: .045em; }
  .cm-brand-name span:last-child { margin-top: 5px; color: var(--yellow); font-size: 11px; letter-spacing: .18em; }
  .cm-links { display: flex; align-items: center; gap: 26px; color: #d4d4d8; font-size: 12px; font-weight: 700; }
  .cm-links a:not(.cm-button):hover { color: var(--yellow); }
  .cm-nav-actions { display: flex; align-items: center; gap: 10px; }
  .cm-button { min-height: 46px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 0 19px; border: 0; border-radius: 2px; color: #111; background: var(--yellow); font-size: 12px; font-weight: 900; letter-spacing: .035em; text-transform: uppercase; transition: background .2s, transform .2s; cursor: pointer; }
  .cm-button:hover { background: #fde047; transform: translateY(-1px); }
  .cm-button-dark { color: white; background: #222525; border: 1px solid rgba(255,255,255,.18); }
  .cm-button-dark:hover { background: #303434; }
  .cm-button svg { width: 16px; height: 16px; }
  .cm-menu-toggle { display: none; width: 44px; height: 44px; align-items: center; justify-content: center; color: white; background: #1b1e1e; border: 1px solid var(--line); }
  .cm-hero { position: relative; isolation: isolate; min-height: 620px; display: flex; align-items: center; border-bottom: 1px solid var(--line); background: #101313; }
  .cm-hero::before { position: absolute; z-index: -2; inset: 0; content: ''; background: linear-gradient(90deg, rgba(8,9,9,.98) 0%, rgba(8,9,9,.92) 42%, rgba(8,9,9,.4) 100%), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=90') center 52% / cover no-repeat; }
  .cm-hero::after { position: absolute; z-index: -1; right: 0; bottom: 0; left: 0; height: 110px; content: ''; background: linear-gradient(transparent, var(--ink)); }
  .cm-hero-content { padding-top: 82px; padding-bottom: 82px; }
  .cm-kicker { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; color: var(--yellow); font-size: 11px; font-weight: 900; letter-spacing: .19em; text-transform: uppercase; }
  .cm-kicker::before { width: 28px; height: 2px; background: var(--yellow); content: ''; }
  .cm-hero h1 { max-width: 800px; margin-bottom: 20px; color: #fff; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: clamp(58px, 8vw, 96px); font-weight: 900; line-height: .91; letter-spacing: -.035em; text-transform: uppercase; }
  .cm-hero h1 em { color: var(--yellow); font-style: normal; }
  .cm-hero-copy { max-width: 600px; margin-bottom: 28px; color: #d4d4d8; font-size: 16px; line-height: 1.8; }
  .cm-hero-actions { display: flex; flex-wrap: wrap; gap: 11px; }
  .cm-proof-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 40px; }
  .cm-proof { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border: 1px solid rgba(255,255,255,.14); background: rgba(10,12,12,.68); color: #e4e4e7; font-size: 10px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
  .cm-proof svg { width: 15px; height: 15px; color: var(--yellow); }
  .cm-emergency { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 18px; padding: 20px 24px; border: 1px solid rgba(250,204,21,.32); background: linear-gradient(100deg, rgba(250,204,21,.1), rgba(250,204,21,.025)); }
  .cm-emergency-icon { width: 42px; height: 42px; display: grid; place-items: center; color: var(--yellow); background: rgba(250,204,21,.12); }
  .cm-emergency h2 { margin: 0 0 3px; color: white; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 23px; text-transform: uppercase; }
  .cm-emergency p { margin: 0; color: #b8b8bc; font-size: 12px; line-height: 1.6; }
  .cm-emergency .cm-button { white-space: nowrap; }
  .cm-section { padding: 98px 0; }
  .cm-section-head { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 38px; }
  .cm-section-head h2 { max-width: 650px; margin: 0; color: #fff; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: clamp(42px, 6vw, 66px); font-weight: 900; line-height: .97; letter-spacing: -.015em; text-transform: uppercase; }
  .cm-section-head h2 span { color: var(--yellow); }
  .cm-section-head > p { max-width: 380px; margin: 0 0 4px; color: var(--muted); font-size: 13px; line-height: 1.8; }
  .cm-services { background: #0d0f0f; }
  .cm-service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .cm-service-card { min-height: 300px; display: flex; flex-direction: column; padding: 27px; border: 1px solid var(--line); background: #131616; transition: border-color .2s, transform .2s; }
  .cm-service-card:hover { transform: translateY(-3px); border-color: rgba(250,204,21,.48); }
  .cm-service-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; }
  .cm-icon-box { width: 47px; height: 47px; display: grid; place-items: center; color: var(--yellow); background: rgba(250,204,21,.1); }
  .cm-icon-box svg { width: 23px; height: 23px; }
  .cm-service-number { color: #666b6b; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 17px; font-weight: 800; }
  .cm-service-card h3 { margin: 0 0 10px; color: #fff; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 26px; line-height: 1.05; text-transform: uppercase; }
  .cm-service-card p { margin: 0 0 17px; color: #a1a1aa; font-size: 12px; line-height: 1.7; }
  .cm-service-list { display: grid; gap: 9px; margin: auto 0 0; padding: 15px 0 0; border-top: 1px solid var(--line); list-style: none; }
  .cm-service-list li { display: flex; align-items: center; gap: 8px; color: #d4d4d8; font-size: 11px; font-weight: 600; }
  .cm-service-list svg { width: 14px; height: 14px; color: var(--yellow); }
  .cm-work { background: var(--ink); }
  .cm-work-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .cm-work-card { position: relative; min-height: 280px; overflow: hidden; background: #202323; }
  .cm-work-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .45s; }
  .cm-work-card:hover img { transform: scale(1.04); }
  .cm-work-card::after { position: absolute; inset: 0; content: ''; background: linear-gradient(0deg, rgba(4,5,5,.94), rgba(4,5,5,.12) 75%); }
  .cm-work-card:first-child { min-height: 390px; }
  .cm-work-card:nth-child(2) { min-height: 390px; }
  .cm-work-meta { position: absolute; z-index: 1; right: 22px; bottom: 21px; left: 22px; }
  .cm-work-label { display: block; margin-bottom: 8px; color: var(--yellow); font-size: 9px; font-weight: 900; letter-spacing: .15em; }
  .cm-work-meta h3 { margin: 0; color: white; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 26px; text-transform: uppercase; }
  .cm-play { position: absolute; z-index: 1; top: 50%; left: 50%; display: grid; width: 56px; height: 56px; place-items: center; border: 1px solid rgba(255,255,255,.7); border-radius: 50%; color: white; background: rgba(8,9,9,.52); transform: translate(-50%, -50%); }
  .cm-play svg { width: 29px; height: 29px; fill: rgba(255,255,255,.18); }
  .cm-work-note { display: flex; align-items: center; gap: 9px; margin-top: 18px; color: #92979a; font-size: 11px; }
  .cm-work-note svg { width: 15px; height: 15px; color: var(--yellow); }
  .cm-how { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #111313; }
  .cm-step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
  .cm-step { position: relative; padding: 12px 32px 12px 0; }
  .cm-step + .cm-step { padding-left: 30px; border-left: 1px solid var(--line); }
  .cm-step-number { display: block; margin-bottom: 19px; color: var(--yellow); font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 18px; font-weight: 900; }
  .cm-step-icon { display: grid; width: 48px; height: 48px; place-items: center; margin-bottom: 17px; color: var(--yellow); background: #202323; }
  .cm-step-icon svg { width: 22px; height: 22px; }
  .cm-step h3 { margin: 0 0 8px; color: white; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 25px; text-transform: uppercase; }
  .cm-step p { max-width: 285px; margin: 0; color: var(--muted); font-size: 12px; line-height: 1.8; }
  .cm-contact { position: relative; background: radial-gradient(ellipse at 15% 50%, rgba(250,204,21,.08), transparent 35%), #090a0a; }
  .cm-contact-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: start; }
  .cm-contact-copy h2 { margin: 0 0 15px; color: white; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: clamp(45px, 6vw, 66px); line-height: .94; text-transform: uppercase; }
  .cm-contact-copy h2 span { color: var(--yellow); }
  .cm-contact-copy > p { max-width: 420px; margin: 0 0 26px; color: #a1a1aa; font-size: 13px; line-height: 1.8; }
  .cm-contact-detail { display: flex; gap: 13px; align-items: center; margin-top: 16px; color: #e4e4e7; font-size: 12px; font-weight: 700; }
  .cm-contact-detail > span:first-child { display: grid; width: 38px; height: 38px; flex: 0 0 auto; place-items: center; color: var(--yellow); background: #1a1d1d; }
  .cm-contact-detail svg { width: 17px; height: 17px; }
  .cm-contact-detail small { display: block; margin-bottom: 2px; color: #85898b; font-size: 9px; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
  .cm-form { padding: 30px; border: 1px solid rgba(255,255,255,.12); background: #121515; }
  .cm-form h3 { margin: 0 0 5px; color: white; font-family: 'Barlow Condensed', Impact, sans-serif; font-size: 27px; text-transform: uppercase; }
  .cm-form-intro { margin: 0 0 22px; color: #a1a1aa; font-size: 11px; line-height: 1.6; }
  .cm-form-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 15px 12px; }
  .cm-field { display: flex; flex-direction: column; gap: 6px; }
  .cm-field-wide { grid-column: 1 / -1; }
  .cm-field label { color: #d4d4d8; font-size: 10px; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
  .cm-field input, .cm-field textarea { width: 100%; padding: 12px 13px; border: 1px solid #343939; border-radius: 0; color: white; background: #0c0e0e; font-size: 12px; }
  .cm-field input::placeholder, .cm-field textarea::placeholder { color: #686e70; }
  .cm-field textarea { min-height: 96px; resize: vertical; }
  .cm-submit { width: 100%; margin-top: 16px; }
  .cm-success { display: flex; gap: 11px; align-items: flex-start; margin-top: 16px; padding: 13px; border: 1px solid rgba(34,197,94,.35); color: #dcfce7; background: rgba(34,197,94,.09); font-size: 12px; line-height: 1.6; }
  .cm-success svg { width: 19px; height: 19px; flex: 0 0 auto; color: #4ade80; }
  .cm-footer { padding: 37px 0; border-top: 1px solid var(--line); background: #070808; }
  .cm-footer-main { display: flex; align-items: center; justify-content: space-between; gap: 25px; }
  .cm-footer-address { max-width: 290px; color: #999da0; font-size: 11px; line-height: 1.7; }
  .cm-footer-links { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; color: #d4d4d8; font-size: 11px; font-weight: 700; }
  .cm-footer-links a { display: inline-flex; align-items: center; gap: 7px; }
  .cm-footer-links a:hover { color: var(--yellow); }
  .cm-footer-links svg { width: 15px; height: 15px; color: var(--yellow); }
  .cm-footer-bottom { display: flex; justify-content: space-between; gap: 15px; margin-top: 27px; padding-top: 17px; border-top: 1px solid var(--line); color: #707578; font-size: 9px; }
  .cm-footer-bottom span:last-child { color: #a4a8aa; }
  .cm-mobile-call { display: none; }
  @media (max-width: 960px) {
    .cm-links { gap: 15px; }
    .cm-links > a:not(.cm-button) { display: none; }
    .cm-contact-layout { gap: 36px; }
  }
  @media (max-width: 680px) {
    html { scroll-padding-top: 72px; }
    .cm-wrap { width: min(100% - 32px, 520px); }
    .cm-topline { min-height: 36px; font-size: 9px; letter-spacing: .055em; }
    .cm-nav-inner { min-height: 66px; gap: 9px; }
    .cm-brand-mark { width: 38px; height: 38px; }
    .cm-brand-name { font-size: 17px; }
    .cm-brand-name span:last-child { font-size: 9px; }
    .cm-nav-actions > .cm-button { display: none; }
    .cm-menu-toggle { display: flex; flex: 0 0 auto; }
    .cm-links { position: absolute; top: 66px; right: 0; left: 0; display: none; align-items: stretch; gap: 0; padding: 9px 16px 15px; border-bottom: 1px solid var(--line); background: #0c0e0e; }
    .cm-links-open { display: flex; flex-direction: column; }
    .cm-links a:not(.cm-button) { display: block; padding: 13px 3px; border-bottom: 1px solid var(--line); }
    .cm-links .cm-button { margin-top: 12px; }
    .cm-hero { min-height: auto; }
    .cm-hero::before { background-position: 58% center; }
    .cm-hero-content { padding-top: 76px; padding-bottom: 54px; }
    .cm-kicker { margin-bottom: 17px; font-size: 9px; }
    .cm-hero h1 { max-width: 440px; margin-bottom: 16px; font-size: clamp(52px, 14vw, 76px); }
    .cm-hero-copy { margin-bottom: 22px; font-size: 13px; line-height: 1.75; }
    .cm-hero-actions { display: grid; grid-template-columns: 1fr; }
    .cm-hero-actions .cm-button { width: 100%; }
    .cm-proof-row { gap: 7px; margin-top: 26px; }
    .cm-proof { padding: 8px; font-size: 8px; }
    .cm-emergency { grid-template-columns: auto 1fr; gap: 12px; padding: 15px; }
    .cm-emergency-icon { width: 36px; height: 36px; }
    .cm-emergency h2 { font-size: 20px; }
    .cm-emergency p { font-size: 10px; }
    .cm-emergency .cm-button { grid-column: 1 / -1; width: 100%; }
    .cm-section { padding: 70px 0; }
    .cm-section-head { display: block; margin-bottom: 26px; }
    .cm-section-head h2 { font-size: 46px; }
    .cm-section-head > p { margin-top: 13px; font-size: 12px; }
    .cm-service-grid { grid-template-columns: 1fr; gap: 11px; }
    .cm-service-card { min-height: auto; padding: 23px; }
    .cm-service-top { margin-bottom: 19px; }
    .cm-work-grid { grid-template-columns: 1fr; gap: 12px; }
    .cm-work-card, .cm-work-card:first-child, .cm-work-card:nth-child(2) { min-height: 260px; }
    .cm-work-meta { right: 17px; bottom: 17px; left: 17px; }
    .cm-work-meta h3 { font-size: 24px; }
    .cm-step-grid { grid-template-columns: 1fr; gap: 0; }
    .cm-step { display: grid; grid-template-columns: 43px 48px 1fr; align-items: start; gap: 0 10px; padding: 18px 0; }
    .cm-step + .cm-step { padding-left: 0; border-top: 1px solid var(--line); border-left: 0; }
    .cm-step-number { grid-row: 1 / 3; margin: 3px 0 0; }
    .cm-step-icon { grid-row: 1 / 3; width: 42px; height: 42px; margin: 0; }
    .cm-step h3 { margin: 1px 0 4px; font-size: 22px; }
    .cm-step p { font-size: 11px; }
    .cm-contact-layout { grid-template-columns: 1fr; gap: 31px; }
    .cm-contact-copy h2 { font-size: 53px; }
    .cm-form { padding: 21px 17px; }
    .cm-form-grid { grid-template-columns: 1fr; gap: 13px; }
    .cm-field-wide { grid-column: auto; }
    .cm-footer-main { align-items: flex-start; flex-direction: column; }
    .cm-footer-links { gap: 14px; }
    .cm-footer-bottom { flex-direction: column; gap: 5px; }
    .cm-mobile-call { position: fixed; z-index: 19; right: 12px; bottom: 12px; left: 12px; display: flex; min-height: 51px; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 8px 30px rgba(0,0,0,.42); }
    .cm-footer { padding-bottom: 86px; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
  }
`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="cm-page">
      <style>{styles}</style>
      <div className="cm-topline">
        <TriangleAlert size={14} aria-hidden="true" />
        &nbsp; Fully Mobile · We Come To Your Driveway · Call or Text:
        <a href={`tel:${phoneNumber}`}>{phoneLabel}</a>
      </div>

      <header className="cm-nav">
        <div className="cm-wrap cm-nav-inner">
          <a className="cm-brand" href="#home" aria-label="Cory's Mobile Mechanics home" onClick={closeMenu}>
            <span className="cm-brand-mark"><Wrench size={24} strokeWidth={2.8} /></span>
            <span className="cm-brand-name">
              <span>CORY&apos;S MOBILE</span>
              <span>MECHANICS</span>
            </span>
          </a>
          <nav className={`cm-links${menuOpen ? ' cm-links-open' : ''}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#marine" onClick={closeMenu}>Marine &amp; Boat</a>
            <a href="#work" onClick={closeMenu}>Recent Work</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="cm-button" href="#contact" onClick={closeMenu}>Request a Quote <ArrowRight /></a>
            <a className="cm-button cm-button-dark" href={`tel:${phoneNumber}`}><Phone /> Call Now</a>
          </nav>
          <button
            className="cm-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="cm-hero" id="home">
          <div className="cm-wrap cm-hero-content">
            <div className="cm-kicker">New Milford, Connecticut · Mobile service</div>
            <h1>Skip the Tow.<br />We Fix It in Your <em>Driveway.</em></h1>
            <p className="cm-hero-copy">
              New Milford&apos;s premier fully mobile mechanic. From check engine diagnostics to starter
              replacements and boat motor tune-ups, we bring the shop to you.
            </p>
            <div className="cm-hero-actions">
              <a className="cm-button" href="#contact">Request Driveway Service <ArrowDownRight /></a>
              <a className="cm-button cm-button-dark" href={`tel:${phoneNumber}`}><Phone /> Call {phoneLabel}</a>
            </div>
            <div className="cm-proof-row" aria-label="Service highlights">
              <span className="cm-proof"><MapPin /> Serving Litchfield County</span>
              <span className="cm-proof"><Ship /> Automotive &amp; Marine</span>
              <span className="cm-proof"><ShieldCheck /> Transparent Pricing</span>
            </div>
          </div>
        </section>

        <div className="cm-wrap" style={{ position: 'relative', zIndex: 2, marginTop: '-1px' }}>
          <aside className="cm-emergency" aria-label="Emergency driveway repairs">
            <span className="cm-emergency-icon"><Zap /></span>
            <div>
              <h2>Stranded or need a quick repair?</h2>
              <p>Call or text Cory to talk through the issue and next steps.</p>
            </div>
            <a className="cm-button" href={`tel:${phoneNumber}`}><Phone /> Get Help Now</a>
          </aside>
        </div>

        <section className="cm-section cm-services" id="services">
          <div className="cm-wrap">
            <div className="cm-section-head">
              <div>
                <div className="cm-kicker">The shop comes to you</div>
                <h2>Real Repairs.<br /><span>Right Where You Are.</span></h2>
              </div>
              <p>No rides to arrange. No shop drop-off. Cory brings hands-on automotive and marine service to your driveway across Litchfield County and nearby communities.</p>
            </div>
            <div className="cm-service-grid">
              {services.map(({ number, icon: Icon, title, description, items }) => (
                <article className="cm-service-card" id={number === '03' ? 'marine' : undefined} key={title}>
                  <div className="cm-service-top">
                    <span className="cm-icon-box"><Icon /></span>
                    <span className="cm-service-number">{number} / SERVICE</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="cm-service-list">
                    {items.map((item) => <li key={item}><CheckCircle /> {item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cm-section cm-work" id="work">
          <div className="cm-wrap">
            <div className="cm-section-head">
              <div>
                <div className="cm-kicker">Hands-on, on-site</div>
                <h2>Work That Gets<br /><span>You Moving.</span></h2>
              </div>
              <p>From driveway repairs to boat service, mobile help means less hassle and a repair plan that starts with a real conversation.</p>
            </div>
            <div className="cm-work-grid">
              {workPhotos.map(({ title, label, image, alt, video }) => (
                <article className="cm-work-card" key={title}>
                  <img src={image} alt={alt} loading="lazy" />
                  {video && <span className="cm-play" aria-label="Video-style work preview"><PlayCircle /></span>}
                  <div className="cm-work-meta">
                    <span className="cm-work-label">{label}</span>
                    <h3>{title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <p className="cm-work-note"><Clock3 /> Representative service photos. Every repair is different—call with your vehicle, boat, and location for availability.</p>
          </div>
        </section>

        <section className="cm-section cm-how" id="how-it-works">
          <div className="cm-wrap">
            <div className="cm-section-head">
              <div>
                <div className="cm-kicker">Simple from the start</div>
                <h2>How Mobile Service <span>Works.</span></h2>
              </div>
              <p>Good help should be easy to reach. Start with a call or text and we&apos;ll figure out the next step together.</p>
            </div>
            <div className="cm-step-grid">
              {steps.map(({ number, title, description, icon: Icon }) => (
                <article className="cm-step" key={number}>
                  <span className="cm-step-number">{number}</span>
                  <span className="cm-step-icon"><Icon /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cm-section cm-contact" id="contact">
          <div className="cm-wrap cm-contact-layout">
            <div className="cm-contact-copy">
              <div className="cm-kicker">Tell us what you need</div>
              <h2>Let&apos;s Get You<br /><span>Back on the Road.</span></h2>
              <p>Send a few details and Cory will call or text to discuss the issue, timing, and a clear next step. For urgent help, call directly.</p>
              <a className="cm-button" href={`tel:${phoneNumber}`}><Phone /> Call Cory · {phoneLabel}</a>
              <div className="cm-contact-detail">
                <span><MapPin /></span>
                <span><small>Based in New Milford, CT</small>Serving Litchfield County &amp; surrounding areas</span>
              </div>
              <div className="cm-contact-detail">
                <span><Clock3 /></span>
                <span><small>Mobile service</small>Automotive &amp; marine, right where you are</span>
              </div>
            </div>

            <form className="cm-form" onSubmit={handleSubmit}>
              <h3>Request Mobile Service</h3>
              <p className="cm-form-intro">Share the basics below. We&apos;ll follow up to learn more and get you on the schedule.</p>
              <div className="cm-form-grid">
                <div className="cm-field">
                  <label htmlFor="customer-name">Full Name</label>
                  <input id="customer-name" name="name" autoComplete="name" placeholder="Your name" required />
                </div>
                <div className="cm-field">
                  <label htmlFor="customer-phone">Phone Number</label>
                  <input id="customer-phone" name="phone" type="tel" autoComplete="tel" placeholder="Best number to reach you" required />
                </div>
                <div className="cm-field">
                  <label htmlFor="vehicle">Vehicle / Boat Make &amp; Model</label>
                  <input id="vehicle" name="vehicle" placeholder="e.g. 2015 Ford F-150" required />
                </div>
                <div className="cm-field">
                  <label htmlFor="location">Location (Town / ZIP)</label>
                  <input id="location" name="location" autoComplete="postal-code" placeholder="e.g. New Milford, CT" required />
                </div>
                <div className="cm-field cm-field-wide">
                  <label htmlFor="issue">Description of the Issue</label>
                  <textarea id="issue" name="issue" placeholder="What is happening? Include any warning lights or symptoms." required />
                </div>
              </div>
              <button className="cm-button cm-submit" type="submit">Send Request <ArrowRight /></button>
              {submitted && (
                <div className="cm-success" role="status" aria-live="polite">
                  <CheckCircle />
                  <span>Message received! Cory will call or text you shortly to get you on the schedule.</span>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="cm-footer">
        <div className="cm-wrap">
          <div className="cm-footer-main">
            <a className="cm-brand" href="#home">
              <span className="cm-brand-mark"><Wrench size={23} strokeWidth={2.8} /></span>
              <span className="cm-brand-name">
                <span>CORY&apos;S MOBILE</span>
                <span>MECHANICS</span>
              </span>
            </a>
            <p className="cm-footer-address">30 Bridge St, Suite 3<br />New Milford, CT 06776<br />Fully mobile service throughout Litchfield County.</p>
            <div className="cm-footer-links">
              <a href={`tel:${phoneNumber}`}><Phone /> {phoneLabel}</a>
              <a href="mailto:ellmancory@gmail.com"><Mail /> Email Cory</a>
              <a href={facebookUrl} target="_blank" rel="noreferrer"><ExternalLink /> Facebook</a>
            </div>
          </div>
          <div className="cm-footer-bottom">
            <span>© {new Date().getFullYear()} Cory&apos;s Mobile Mechanics. All rights reserved.</span>
            <span>New Milford, Connecticut · Automotive &amp; Marine</span>
          </div>
        </div>
      </footer>

      <a className="cm-mobile-call cm-button" href={`tel:${phoneNumber}`}><Phone /> Call Cory · {phoneLabel}</a>
    </div>
  )
}

export default App
