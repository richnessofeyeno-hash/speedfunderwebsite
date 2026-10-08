'use client';

import { useEffect, useMemo, useState } from 'react';
import { Header, Footer } from './_shared';

const services = [
  ['01', 'Campaign Page Setup & Optimization'],
  ['02', 'SEO & Off-Platform Discoverability'],
  ['03', 'Email Funnel & Lead Magnet'],
  ['04', 'Email Marketing & Newsletter Placement'],
  ['05', 'Backer Community Outreach'],
];

const stages = ['PREPARE', 'BUILD', 'NURTURE', 'LAUNCH', 'REACH', 'CONVERT'];

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
  'Keychron K3 HE & Keychron K3 Ultra: Slim Wireless Custom Keyboards',
];

const featuredExtras = {
  'Historical Trailblazers: Romance Collection': {
    title: 'Historical Trailblazers: Romance Collection',
    category: 'Publishing' as const,
    year: 2026,
    funding: '$395,385',
    goal: '$10,000',
    backers: '1,497',
    url: 'https://www.kickstarter.com/projects/ahpublishing/historical-trailblazers-romance-collection',
    image:
      'https://i.kickstarter.com/assets/053/761/868/1bf43276e70c692c5b630c269cd6775a_original.png?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=W8vQaStRv6%2B9QzEeXmVgkVaqfhym24LjnwGglgTgYyE%3D&v=1779033738&width=1552',
  },

  'The Marvel Art of DAN DOS SANTOS - A Deluxe Art Book & More!': {
    title: 'The Marvel Art of DAN DOS SANTOS - A Deluxe Art Book & More!',
    category: 'Art' as const,
    year: 2026,
    funding: '$126,900',
    goal: '$10,000',
    backers: '707',
    url: 'https://www.kickstarter.com/projects/cloverpressart/the-marvel-art-of-dan-dos-santos-a-deluxe-art-book-and-more',
    image:
      'https://i.kickstarter.com/assets/052/157/792/35e3db6d655121c0a5b796284922f1fb_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=YuGQuVACMpBXXkP0Zv5LIggRxpwDwK0ZNRX3vDRvD88%3D&v=1767897014&width=1552',
  },

  'James S.A. Corey Returns to THE EXPANSE in A LITTLE DEATH': {
    title: 'James S.A. Corey Returns to THE EXPANSE in A LITTLE DEATH',
    category: 'Comics' as const,
    year: 2025,
    funding: '$897,653',
    goal: '$50,000',
    backers: '8,173',
    url: 'https://www.kickstarter.com/projects/boom-studios/james-sa-corey-returns-to-the-expanse-in-a-little-death',
    image:
      'https://i.kickstarter.com/assets/048/774/067/2d7a86d8dd8abd0c97de97683088a0ea_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=lbSlLErsM95%2Ft5YppFrWDsGSJjFTa8JczEIP6LVCDuE%3D&v=1743697763&width=1552',
  },

  'Fathom Timeline Omnibus: Volume 1': {
    title: 'Fathom Timeline Omnibus: Volume 1',
    category: 'Comics' as const,
    year: 2026,
    funding: '$189,258',
    goal: '$50,000',
    backers: '1,179',
    url: 'https://www.kickstarter.com/projects/aspencomics/fathom-timeline-omnibus-volume-1',
    image:
      'https://i.kickstarter.com/assets/052/934/323/fab6df8515ca3ce407a2de961b6fba94_original.png?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=EUymoMvfxpRpwCvMYR1ekUWGC2TdgXbofnLiOfjcDGQ%3D&v=1773366321&width=1552',
  },

  'Mighty Morphin Power Rangers Combinable Dragonzord': {
    title: 'Mighty Morphin Power Rangers Combinable Dragonzord',
    category: 'Design' as const,
    year: 2026,
    funding: '$782,530',
    goal: '$400,000',
    backers: '7,883',
    url: 'https://www.kickstarter.com/projects/playmatestoys/mighty-morphin-power-rangers-combinable-dragonzord',
    image:
      'https://i.kickstarter.com/assets/054/790/343/61d45342b0778d71101371f73087a2a9_original.png?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=yUJ8lC4Y1FLhrxgn4lnCnZ4bOrz0W333L6OFBonmnOI%3D&v=1786998534&width=1552',
  },

  'D1 Milano x Peter Tarka: The Impossible Watch': {
    title: 'D1 Milano x Peter Tarka: The Impossible Watch',
    category: 'Design' as const,
    year: 2026,
    funding: '$415,041',
    goal: '$15,000',
    backers: '943',
    url: 'https://www.kickstarter.com/projects/840192188/d1-milano-x-peter-tarka-the-impossible-watch',
    image:
      'https://i.kickstarter.com/assets/054/083/249/763a3fb74652e0024f1e0c63534aef3a_original.png?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=b6XlLloc42ZV5a%2F%2FdeFMgVdr0s3fsoDc6V98HX5Yk08%3D&v=1781255143&width=1552',
  },

  'noRecognition : AI Adversarial Clothing': {
    title: 'noRecognition : AI Adversarial Clothing',
    category: 'Fashion' as const,
    year: 2026,
    funding: '$204,288',
    goal: '$5,000',
    backers: '1,213',
    url: 'https://www.kickstarter.com/projects/norecognition/norecognition-ai-adversarial-clothing',
    image:
      'https://i.kickstarter.com/assets/054/634/091/26da1568be5925382c6655a6eea8798d_original.png?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=I1HD71mJGDDNQGre2bSUGsYZhQzeEHgttmAmAaQTeO8%3D&v=1785716130&width=1552',
  },

  'Tex Murphy: Killing Moon Rising': {
    title: 'Tex Murphy: Killing Moon Rising',
    category: 'Games' as const,
    year: 2026,
    funding: '$486,482',
    goal: '$50,000',
    backers: '4,533',
    url: 'https://www.kickstarter.com/projects/texmurphy/tex-murphy-killing-moon-rising',
    image: '/tex-murphy.jpg',
  },

  'The World of Frostpunk: Artbook & Anthology': {
    title: 'The World of Frostpunk: Artbook & Anthology',
    category: 'Publishing' as const,
    year: 2025,
    funding: '€638,203',
    goal: '€50,000',
    backers: '3,807',
    url: 'https://www.kickstarter.com/projects/11bitstudios/frostpunk-anthology-and-frostpunk-2-artbook',
    image:
      'https://i.kickstarter.com/assets/048/956/304/baf50941a95a8186dbbf50f0230d8f20_original.jpg?anim=false&fit=scale-down&origin=ugc&q=92&sig=tnyBUd5%2BBeVQdT81jyX5vUv%2FAx6LpuVGq1%2FyHpn501A%3D&v=1744990682&width=700',
  },

  'Keychron K3 HE & Keychron K3 Ultra: Slim Wireless Custom Keyboards': {
    title: 'Keychron K3 HE & Keychron K3 Ultra: Slim Wireless Custom Keyboards',
    category: 'Technology' as const,
    year: 2026,
    funding: '$284,900',
    goal: '$10,000',
    backers: '2,044',
    url: 'https://www.kickstarter.com/projects/keytron/keychron-k3-he-and-k3-ultra-slim-wireless-custom-keyboards',
    image:
      'https://i.kickstarter.com/assets/052/769/511/d506c87223fe2cf7a275d4093617075d_original.png?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&sig=ElTl5Okbt6CVmGPzcSxipnvZksJnsqLl428AQmCg4rI%3D&v=1772264145&width=1552',
  },
};

export default function Home() {
  const featured = useMemo(
    () =>
      featuredTitles
        .map(t => featuredExtras[t as keyof typeof featuredExtras])
        .filter(Boolean),
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (featured.length < 2) return;

    const timer = setInterval(
      () => setIndex(v => (v + 1) % featured.length),
      3000
    );

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
              <div className="eyebrow hero-eyebrow">
                Crowdfunding marketing · Since 2018
              </div>

              <h1 className="display hero-title">
                YOUR <span>FASTEST</span>
                <br />
                FUNDING
                <br />
                PARTNERS
              </h1>

              <p className="hero-lead">
                We help innovators, creators & businesses raise funds through
                crowdfunding.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href="/contact">
                  GET STARTED →
                </a>

                <a className="btn btn-light-outline" href="/services">
                  OUR SERVICES
                </a>
              </div>

              <div className="trust-row">
                <div className="trust-dots" aria-hidden="true">
                  <i className="trust-logo trust-logo-1">SF</i>
                  <i className="trust-logo trust-logo-2">✦</i>
                  <i className="trust-logo trust-logo-3">↗</i>
                  <i className="trust-logo trust-logo-4">CF</i>
                  <i className="trust-logo trust-logo-5">+</i>
                </div>

                <span>Trusted by 300+ Creators Worldwide</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Built around crowdfunding</div>

              <h2 className="display">
                WE DON'T SEND TRAFFIC TO A CAMPAIGN THAT ISN'T READY.
              </h2>

              <p className="muted">
                TRAFFIC IS NOT THE STRATEGY. POSITIONING COMES FIRST.
              </p>
            </div>

            <div className="cards three">
              <article className="card">
                <div className="eyebrow">01</div>
                <h3>Position First</h3>
                <p>
                  We review the creator, project, audience, offer, campaign
                  page and conversion path before promotion begins.
                </p>
              </article>

              <article className="card">
                <div className="eyebrow">02</div>
                <h3>Promote Second</h3>
                <p>
                  We use relevant search, email, community and promotional
                  channels to put the campaign in front of appropriate
                  audiences.
                </p>
              </article>

              <article className="card">
                <div className="eyebrow">03</div>
                <h3>Build Beyond Kickstarter</h3>
                <p>
                  We use the campaign as an opportunity to develop an audience
                  and community that can support what comes next.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section grid-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">What we do</div>

              <h2 className="display">
                MARKETING BUILT AROUND THE CAMPAIGN.
              </h2>
            </div>

            <div className="cards">
              {services.map(([n, title]) => (
                <article className="card" key={n}>
                  <div className="service-icon">{n}</div>

                  <h3>{title}</h3>

                  <p>
                    We plan and execute this part of the crowdfunding journey
                    around your campaign, audience and agreed marketing
                    objectives.
                  </p>
                </article>
              ))}
            </div>

            <a className="text-link" href="/services">
              EXPLORE ALL SERVICES →
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Our process</div>

              <h2 className="display">
                PREPARE → BUILD → NURTURE → LAUNCH → REACH → CONVERT
              </h2>
            </div>

            <div className="process">
              {[
                [
                  'PREPARE',
                  'We review your campaign, positioning, audience and core materials before promotion begins.',
                ],
                [
                  'BUILD',
                  'We help build the audience, assets and outreach foundation needed for a stronger launch.',
                ],
                [
                  'NURTURE',
                  'We turn early interest into intent through follow-up, email and audience engagement.',
                ],
                [
                  'LAUNCH',
                  'We coordinate the launch push and focus early attention on the campaign while momentum matters most.',
                ],
                [
                  'REACH',
                  'We expand relevant visibility through targeted promotion, communities and off-platform channels.',
                ],
                [
                  'CONVERT',
                  'We help turn qualified attention into campaign visits, engagement and potential backing.',
                ],
              ].map(([stage, description], n) => (
                <div className="stage" key={stage}>
                  <b>0{n + 1}</b>
                  <h3>{stage}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>

            <a className="text-link" href="/process">
              SEE OUR PROCESS →
            </a>
          </div>
        </section>

        <section className="section grid-bg">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Featured projects</div>

              <h2 className="display">CAMPAIGNS WORTH LOOKING AT.</h2>

              <p className="muted">
                Featured campaigns are shown only when their campaign data and
                Kickstarter destination have been verified.
              </p>
            </div>

            {item ? (
              <a
                className="featured-campaign"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="featured-campaign-art">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                    />
                  ) : null}
                </div>

                <div className="featured-campaign-copy">
                  <div className="eyebrow">
                    {item.category} · {item.year}
                  </div>

                  <h3>{item.title}</h3>

                  <strong>{item.funding}</strong>

                  <span className="text-link">
                    VIEW KICKSTARTER CAMPAIGN ↗
                  </span>
                </div>
              </a>
            ) : null}

            <div className="carousel-controls">
              <button
                className="btn btn-ghost"
                onClick={() =>
                  setIndex(
                    v => (v - 1 + featured.length) % featured.length
                  )
                }
                aria-label="Previous featured project"
              >
                ←
              </button>

              <span className="eyebrow">
                {featured.length
                  ? `${String(index + 1).padStart(2, '0')} / ${String(
                      featured.length
                    ).padStart(2, '0')}`
                  : 'PORTFOLIO'}
              </span>

              <button
                className="btn btn-ghost"
                onClick={() =>
                  setIndex(v => (v + 1) % featured.length)
                }
                aria-label="Next featured project"
              >
                →
              </button>
            </div>

            <a
              className="text-link"
              href="/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE FULL PORTFOLIO ↗
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Our Backers Community</div>

              <h2 className="display">
                150K+ CROWDFUNDING SUPPORTERS
              </h2>

              <p className="muted">
                150K+ is the size of the community. Relevance determines who
                we reach. We match and segment audiences rather than treating
                the community as a generic blast list.
              </p>
            </div>

            <p className="community-home-copy">
              Our growing community is built from crowdfunding supporters and
              backers we have reached through previous campaigns and creator
              projects. We use this network as an additional promotional
              channel, matching campaigns with relevant supporter segments
              rather than sending every project to everyone.
            </p>

            <div className="community-mini-grid">
              <article className="community-mini-card">
                <span>01</span>
                <h3>Campaign Review</h3>
                <p>
                  We review your campaign and identify its ideal backer.
                </p>
              </article>

              <article className="community-mini-card">
                <span>02</span>
                <h3>Audience Matching</h3>
                <p>
                  We match your project with relevant supporter segments.
                </p>
              </article>

              <article className="community-mini-card">
                <span>03</span>
                <h3>Targeted Outreach</h3>
                <p>
                  We introduce your campaign to relevant crowdfunding
                  supporters.
                </p>
              </article>

              <article className="community-mini-card">
                <span>04</span>
                <h3>Follow-Up</h3>
                <p>
                  We maintain visibility during the agreed outreach period.
                </p>
              </article>
            </div>

            <div className="community-home-highlight">
              150K+ IS THE SIZE OF THE COMMUNITY. RELEVANCE DETERMINES WHO WE
              REACH.
            </div>

            <a
              className="text-link"
              href="/our-backers-community"
            >
              REACH RELEVANT BACKERS →
            </a>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-box">
            <h2 className="display">
              READY TO BUILD MOMENTUM FOR YOUR KICKSTARTER?
            </h2>

            <a className="btn btn-primary" href="/contact">
              START YOUR CAMPAIGN →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
