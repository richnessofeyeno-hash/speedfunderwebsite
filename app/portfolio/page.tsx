'use client';

import { useMemo, useState } from 'react';
import { Shell } from '../_shared';
import { portfolio } from '../../data/portfolio';

const categories = ['All','Art','Comics','Design','Fashion','Film & Video','Games','Publishing','Technology'];

export default function Page(){
  const [category,setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? portfolio : portfolio.filter(p => p.category === category), [category]);
  return <Shell eyebrow="Portfolio" title="EXPLORE OUR FEATURED CAMPAIGN SUCCESS STORIES.">
    <section className="section"><div className="container">
      <div className="filters">{categories.map(c=><button key={c} className={`filter ${category===c?'active':''}`} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="portfolio-grid">
        {filtered.map(p=><a className="card portfolio-card" key={p.title} href={p.url} target="_blank" rel="noreferrer">
          <div className="portfolio-image"><div className="portfolio-art"><span>{p.category} · {p.year}</span><strong>SF</strong></div></div>
          <div className="portfolio-body"><h3>{p.title}</h3><div className="metric"><strong>{p.funding}</strong><small>FUNDED</small></div><div className="portfolio-meta">{p.backers ? `${p.backers} backers` : 'Campaign record'}</div><span className="text-link">VIEW KICKSTARTER CAMPAIGN ↗</span></div>
        </a>)}
      </div>
<div className="notice portfolio-request">
  <strong>LOOKING FOR A SPECIFIC NICHE?</strong>
  <p>
    This portfolio showcases a selection of our campaign work, not our complete portfolio. If you'd like to see examples relevant to your specific niche, category, or campaign type, contact us and we'll provide relevant portfolio examples where available.
  </p>
  <a className="text-link" href="/contact">REQUEST RELEVANT EXAMPLES →</a>
</div>
    </div></section>
  </Shell>
}
