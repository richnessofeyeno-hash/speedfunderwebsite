'use client';

import { useState } from 'react';
import { Shell } from '../_shared';

export default function Page(){
  const [submitted,setSubmitted] = useState(false);
  return <Shell eyebrow="Contact" title="LET'S TALK ABOUT YOUR KICKSTARTER.">
    <section className="section"><div className="container contact-grid">
      <div>
        <div className="section-head"><h2 className="display">TELL US WHAT YOU'RE BUILDING.</h2><p className="muted">Share your campaign and select the service or plan you are considering. We can review the project and discuss the most appropriate next step.</p></div>
        <form className="form" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
          <div className="field"><label htmlFor="name">Creator Name</label><input id="name" required /></div>
          <div className="field"><label htmlFor="email">Email Address</label><input id="email" type="email" required /></div>
          <div className="field"><label htmlFor="kickstarter">Kickstarter URL</label><input id="kickstarter" type="url" placeholder="https://www.kickstarter.com/..." required /></div>
          <div className="field"><label htmlFor="plan">Service / Plan</label><select id="plan" required defaultValue=""><option value="" disabled>Select a service or plan</option><option>Pre-Launch — $600</option><option>Launch — $800</option><option>Full Campaign Management — $1,200</option><option>Backers Community — Basic $250</option><option>Backers Community — Standard $350</option><option>Backers Community — Premium $450</option><option>I'm not sure — Recommend the best option</option></select></div>
          <button className="btn btn-primary" type="submit">SUBMIT PROJECT →</button>
{submitted && <div className="success"><strong>THANK YOU! YOUR PROJECT REQUEST HAS BEEN RECEIVED.</strong><p>We’ve received your project details and our team will review your submission. A member of the SpeedFunders team will reach out to you shortly to discuss your campaign and the next steps.</p></div>}        </form>
      </div>
    </div></section>

    <section className="section compact-pricing"><div className="container">
      <div className="section-head"><div className="eyebrow">Review before submitting</div><h2 className="display">OUR SERVICES & PRICING</h2></div>
      <div className="contact-pricing">
        <article><h3>PRE-LAUNCH — $600</h3><p>Campaign positioning, page optimization, audience research and pre-launch marketing preparation. Best for creators preparing before launch.</p></article>
        <article><h3>LAUNCH — $800</h3><p>Launch promotion, email marketing, community outreach, campaign messaging and optimization. Best for creators ready to launch.</p></article>
        <article><h3>FULL CAMPAIGN — $1,200</h3><p>Complete pre-launch and launch support covering strategy, audience building, promotion, outreach and campaign optimization.</p></article>
        <article><h3>BACKERS COMMUNITY — $250 / $350 / $450</h3><p>Targeted outreach to up to 10K, 25K or 50K relevant crowdfunding supporters depending on the selected plan.</p></article>
      </div>
      <p className="notice">Results vary by campaign. SpeedFunders does not guarantee a specific number of backers, pledges or funding amount.</p>
    </div></section>
  </Shell>
}
