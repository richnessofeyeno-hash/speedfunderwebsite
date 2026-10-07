import Link from 'next/link';

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
<div className="nav-brand-lockup">
  <Link className="brand brand-circle" href="/" aria-label="SpeedFunders home">
    <img src="/logo-circle.png" alt="SpeedFunders" />
  </Link>
  <strong className="nav-brand-name">SPEEDFUNDERS</strong>
</div>
        <nav className="links" aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/process">Process</Link>
          <Link href="/our-backers-community">Our Backers Community</Link>
          <a href="/portfolio" target="_blank" rel="noreferrer">Portfolio ↗</a>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link className="btn btn-primary nav-cta" href="/contact">GET STARTED →</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">☰</summary>
          <nav className="mobile-nav">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/process">Process</Link>
            <Link href="/our-backers-community">Our Backers Community</Link>
            <a href="/portfolio" target="_blank" rel="noreferrer">Portfolio ↗</a>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
            <Link className="btn btn-primary" href="/contact">GET STARTED →</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
<div className="footer-brand-row">
  <Link className="footer-brand brand-circle" href="/" aria-label="SpeedFunders home">
    <img src="/logo-circle.png" alt="SpeedFunders" />
  </Link>
  <strong className="footer-brand-name">SPEEDFUNDERS</strong>
</div>
<p className="footer-tagline">YOUR FASTEST FUNDING PARTNERS</p>
          <p>447 Broadway, 2nd Floor<br />New York, NY 10013, United States</p>
          <a href="mailto:team@speedfunders.com">team@speedfunders.com</a>
          <div className="social-row">
  <a href="https://www.facebook.com/speedfunders" target="_blank" rel="noreferrer" aria-label="SpeedFunders on Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.3l.7-4H13V9c0-.7.3-1 1-1Z"/></svg>
    Facebook
  </a>

  <a href="https://www.instagram.com/speedfunders" target="_blank" rel="noreferrer" aria-label="SpeedFunders on Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
    Instagram
  </a>

  <a href="https://twitter.com/speedfunders" target="_blank" rel="noreferrer" aria-label="SpeedFunders on X">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.7l3.4 4.6L17.3 4H20l-5.7 6.3L20 20h-4.7l-3.8-5.1L6.7 20H4l6-6.8L5 4Zm3.2 2 7.8 12h1.8L10 6H8.2Z"/></svg>
    X
  </a>
</div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link href="/about">About</Link><Link href="/services">Services</Link>
            <Link href="/process">Process</Link><a href="/portfolio" target="_blank" rel="noreferrer">Portfolio ↗</a>
            <Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Our Services</h4>
          <div className="footer-links">
            <Link href="/services">Campaign Marketing</Link>
            <Link href="/services">Audience Building</Link>
            <Link href="/services">Campaign Strategy</Link>
            <Link href="/our-backers-community">Crowdfunding Community</Link>
            <Link href="/services">Social Media Promotion</Link>
            <Link href="/services">Email Marketing</Link>
            <Link href="/services">Press & Influencer Outreach</Link>
          </div>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Get Kickstarter marketing insights, campaign tips, crowdfunding updates and SpeedFunders news.</p>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Enter your email" required />
            <button className="btn btn-primary full" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="container copyright">
        <span>© 2026 SpeedFunders. All Rights Reserved.</span>
        <span><Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/terms-and-conditions">Terms & Conditions</Link> · <Link href="/disclaimer">Disclaimer</Link></span>
      </div>
    </footer>
  );
}

export function Shell({title, eyebrow, children}:{title:string; eyebrow:string; children:React.ReactNode}) {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="display">{title}</h1>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
