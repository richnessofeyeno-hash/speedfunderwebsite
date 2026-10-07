'use client';

import { useEffect, useMemo, useState } from 'react';
import { Header, Footer } from './_shared';
import { portfolio } from '../data/portfolio';

const services = [
  ['01','Campaign Page Setup & Optimization'],
  ['02','SEO & Off-Platform Discoverability'],
  ['03','Email Funnel & Lead Magnet'],
  ['04','Email Marketing & Newsletter Placement'],
  ['05','Backer Community Outreach'],
];

const stages = ['PREPARE','BUILD','NURTURE','LAUNCH','REACH','CONVERT'];

const featuredTitles = [
  'Historical Trailblazers: Romance Collection',
  'The Marvel Art of DAN DOS SANTOS - A Deluxe Art Book & More!',
  'James S.A. Corey Returns to THE EXPANSE in A LITTLE DEATH',
  'Fathom Timeline Omnibus: Volume 1',
  'Mighty Morphin Power Rangers Combinable Dragonzord',
  'D1 Milano x Peter Tarka: The Impossible Watch',
  'noRecognition : AI Adversarial Clothing',
  'Tex Murphy: Killing Moon Rising',
  'The World of Frostpunk: Artbook & Anthology',
  'Keychron K3 HE & K3 Ultra: Slim Wireless Custom Keyboards',
];

export default function Home() {
  const featured = useMemo(
    () => featuredTitles.map(t => portfolio.find(p => p.title === t)).filter(Boolean),
    []
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (featured.length < 2) return;
    const timer = setInterval(() => setIndex(v => (v + 1) % featured.length), 3000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const item = featured[index];

  return (
    <>
      <Header />
      <main>
        <section className="hero-home">
          <div className="hero-overlay" />
          <div className="container hero-home-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">Crowdfunding marketing · Since 2018</div>
              <h1 className="display hero-title">
                YOUR <span>FASTEST</span><br />
                FUNDING<br />
                PARTNERS
              </h1>
              <p className="hero-lead">
                We help innovators, creators & businesses raise funds through crowdfunding.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="/contact">GET STARTED →</a>
                <a className="btn btn-light-outline" href="/services">OUR SERVICES</a>
              </div>
              <div className="trust-row">
                <div className="trust-dots" aria-hidden="true"><i/><i/><i/><i/><i/></div>
                <span>Trusted by 300+ Creators Worldwide</span>
            </div>
          </div>
            </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Built around crowdfunding</div>
              <h2 className="display">WE DON'T SEND TRAFFIC TO A CAMPAIGN THAT ISN'T READY.</h2>
              <p className="muted">TRAFFIC IS NOT THE STRATEGY. POSITIONING COMES FIRST.</p>
            </div>
            <div className="cards three">
              <article className="card"><div className="eyebrow">01</div><h3>Position First</h3><p>We review the creator, project, audience, offer, campaign page and conversion path before promotion begins.</p></article>
              <article className="card"><div className="eyebrow">02</div><h3>Promote Second</h3><p>We use relevant search, email, community and promotional channels to put the campaign in front of appropriate audiences.</p></article>
              <article className="card"><div className="eyebrow">03</div><h3>Build Beyond Kickstarter</h3><p>We use the campaign as an opportunity to develop an audience and community that can support what comes next.</p></article>
            </div>
          </div>
        </section>

        <section className="section grid-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">What we do</div>
              <h2 className="display">MARKETING BUILT AROUND THE CAMPAIGN.</h2>
            </div>
            <div className="cards">
              {services.map(([n, title]) => (
                <article className="card" key={n}>
                  <div className="service-icon">{n}</div>
                  <h3>{title}</h3>
                  <p>We plan and execute this part of the crowdfunding journey around your campaign, audience and agreed marketing objectives.</p>
                </article>
              ))}
            </div>
            <a className="text-link" href="/services">EXPLORE ALL SERVICES →</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Our process</div>
              <h2 className="display">PREPARE → BUILD → NURTURE → LAUNCH → REACH → CONVERT</h2>
            </div>
<div className="process">
  {[
    ['PREPARE', 'We review your campaign, positioning, audience and core materials before promotion begins.'],
    ['BUILD', 'We help build the audience, assets and outreach foundation needed for a stronger launch.'],
    ['NURTURE', 'We turn early interest into intent through follow-up, email and audience engagement.'],
    ['LAUNCH', 'We coordinate the launch push and focus early attention on the campaign while momentum matters most.'],
    ['REACH', 'We expand relevant visibility through targeted promotion, communities and off-platform channels.'],
    ['CONVERT', 'We help turn qualified attention into campaign visits, engagement and potential backing.'],
  ].map(([stage, description], n) => (
    <div className="stage" key={stage}>
      <b>0{n + 1}</b>
      <h3>{stage}</h3>
      <p>{description}</p>
    </div>
  ))}
</div>
          
      <a className="text-link" href="/process">SEE OUR PROCESS →</a>
          </div>
        </section>

        <section className="section grid-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Featured projects</div>
              <h2 className="display">CAMPAIGNS WORTH LOOKING AT.</h2>
              <p className="muted">Featured campaigns are shown only when their campaign data and Kickstarter destination have been verified.</p>
            </div>
            {item ? (
              <a className="featured-campaign" href={item.url} target="_blank" rel="noreferrer">
                <div className="featured-campaign-copy">
                  <div className="eyebrow">{item.category} · {item.year}</div>
                  <h3>{item.title}</h3>
                  <strong>{item.funding}</strong>
                  <span className="text-link">VIEW KICKSTARTER CAMPAIGN ↗</span>
                </div>
              </a>
            ) : null}
            <div className="carousel-controls">
              <button className="btn btn-ghost" onClick={() => setIndex(v => (v - 1 + featured.length) % featured.length)}>←</button>
              <span className="eyebrow">{featured.length ? `${String(index+1).padStart(2,'0')} / ${String(featured.length).padStart(2,'0')}` : 'PORTFOLIO'}</span>
              <button className="btn btn-ghost" onClick={() => setIndex(v => (v + 1) % featured.length)}>→</button>
            </div>
            <a className="text-link" href="/portfolio" target="_blank" rel="noreferrer">EXPLORE FULL PORTFOLIO ↗</a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Our Backers Community</div>
              <h2 className="display">150K+ CROWDFUNDING SUPPORTERS</h2>
              <p className="muted">150K+ is the size of the community. Relevance determines who we reach. We match and segment audiences rather than treating the community as a generic blast list.</p>
            </div>
<p className="community-home-copy">
  Our growing community is built from crowdfunding supporters and backers we have reached through previous campaigns and creator projects.
  We use this network as an additional promotional channel, matching campaigns with relevant supporter segments rather than sending every project to everyone.
</p>

<div className="community-mini-grid">
  <article className="community-mini-card">
    <span>01</span>
    <h3>Campaign Review</h3>
    <p>We review your campaign and identify its ideal backer.</p>
  </article>

  <article className="community-mini-card">
    <span>02</span>
    <h3>Audience Matching</h3>
    <p>We match your project with relevant supporter segments.</p>
  </article>

  <article className="community-mini-card">
    <span>03</span>
    <h3>Targeted Outreach</h3>
    <p>We introduce your campaign to relevant crowdfunding supporters.</p>
  </article>

  <article className="community-mini-card">
    <span>04</span>
    <h3>Follow-Up</h3>
    <p>We maintain visibility during the agreed outreach period.</p>
  </article>
</div>

<div className="community-home-highlight">
  150K+ IS THE SIZE OF THE COMMUNITY. RELEVANCE DETERMINES WHO WE REACH.
</div>
            <a className="text-link" href="/our-backers-community">REACH RELEVANT BACKERS →</a>
          </div>
        </section>

        <section className="cta"><div className="container cta-box"><h2 className="display">READY TO BUILD MOMENTUM FOR YOUR KICKSTARTER?</h2><a className="btn btn-primary" href="/contact">START YOUR CAMPAIGN →</a></div></section>
      </main>
      <Footer />
    </>
  );
}
