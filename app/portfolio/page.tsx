'use client';

import { useMemo, useState } from 'react';
import { Shell } from '../_shared';
import { portfolio } from '../../data/portfolio';

const categories = ['All','Art','Comics','Design','Fashion','Film & Video','Games','Publishing','Technology'];

export default function Page(){
  const [category,setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? portfolio : portfolio.filter(p => p.category === category), [category]);
  return <Shell eyebrow="Portfolio" title="80 CAMPAIGNS. REAL PROJECTS. VERIFIED DESTINATIONS.">
    <section className="section"><div className="container">
      <div className="filters">{categories.map(c=><button key={c} className={`filter ${category===c?'active':''}`} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="portfolio-grid">
        {filtered.map(p=><a className="card portfolio-card" key={p.title} href={p.url} target="_blank" rel="noreferrer">
          <div className="portfolio-image"><div className="portfolio-art"><span>{p.category} · {p.year}</span><strong>SF</strong></div></div>
          <div className="portfolio-body"><h3>{p.title}</h3><div className="metric"><strong>{p.funding}</strong><small>FUNDED</small></div><div className="portfolio-meta">{p.backers ? `${p.backers} backers` : 'Campaign record'}</div><span className="text-link">VIEW KICKSTARTER CAMPAIGN ↗</span></div>
        </a>)}
      </div>
      <p className="notice">Portfolio image mapping is intentionally not fabricated. Campaign cards will use the corresponding verified Kickstarter campaign artwork once each image URL has been checked and added to the dataset.</p>
    </div></section>
  </Shell>
}
