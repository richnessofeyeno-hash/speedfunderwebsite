import { Shell } from '../_shared';

const plans = [
  ['BASIC','$250','Up to 10K relevant crowdfunding supporters','Campaign review, audience matching, targeted email promotion, one newsletter placement, one follow-up and a basic performance report.'],
  ['STANDARD','$350','Up to 25K relevant crowdfunding supporters','Everything in Basic, with broader reach, dedicated newsletter placement, two follow-ups, additional segmentation, campaign messaging and a performance summary.'],
  ['PREMIUM','$450','Up to 50K relevant crowdfunding supporters','Everything in Standard, with multiple audience segments, three follow-ups, campaign-specific messaging, urgency follow-up, tracking and a final performance report.'],
];

export default function Page(){
  return <Shell eyebrow="Our Backers Community" title="150K+ CROWDFUNDING SUPPORTERS">
    <section className="section"><div className="container">
      <div className="section-head wide"><h2 className="display">A TARGETED PROMOTIONAL LAYER FOR CREATORS WHO NEED MORE RELEVANT EXPOSURE.</h2>
      <p className="muted">SpeedFunders gives creators another way to put a Kickstarter campaign in front of people who already understand crowdfunding. We review each project before outreach and match it with relevant audience segments. We do not treat the full community as one generic blast list. The service is designed for creators who already have much of their campaign foundation in place but want additional targeted exposure.</p></div>
      <div className="community-callout"><strong>150K+ IS THE SIZE OF THE COMMUNITY. RELEVANCE DETERMINES WHO WE REACH.</strong></div>
      <div className="community-flow">
        {['CAMPAIGN REVIEW','AUDIENCE MATCHING','TARGETED OUTREACH','FOLLOW-UP','REPORTING'].map((x,i)=><div className="stage" key={x}><b>0{i+1}</b><h3>{x}</h3></div>)}
      </div>
      <div className="section-head"><div className="eyebrow">Why choose this instead of full campaign management?</div><h2 className="display">FOCUSED OUTREACH WITHOUT BUYING A COMPLETE MARKETING OPERATION.</h2><p className="muted">Full Campaign Management is for creators who need SpeedFunders to help build and manage the broader marketing journey. Our Backers Community service is for creators who already have much of that foundation and primarily need additional targeted crowdfunding exposure. It can therefore work as a focused promotional layer alongside an existing strategy, team or audience. The service still begins with campaign review and audience relevance rather than a blind send.</p></div>
      <div className="pricing three">{plans.map(([name,price,reach,body],i)=><article className={`card ${i===1?'featured':''}`} key={name}><div className="eyebrow">{name}</div><div className="price">{price}</div><h3>{reach}</h3><p>{body}</p></article>)}</div>
      <p className="notice">Community size does not mean every campaign is sent to every supporter. Outreach is matched and segmented according to relevance. Results vary by campaign, audience, offer and market conditions. We do not guarantee pledges, backers or funding.</p>
    </div></section>
  </Shell>
}
