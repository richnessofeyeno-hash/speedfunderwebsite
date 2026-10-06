import { Shell } from '../_shared';

const plans = [
  ['PRE-LAUNCH','$600','For creators preparing before launch.','We handle campaign positioning and preparation, page review and optimization, audience research, lead-generation planning, pre-launch audience building, marketing preparation and launch-readiness support.'],
  ['LAUNCH','$800','For creators ready to launch or currently launching.','We handle launch promotion, email marketing, community outreach, social promotion, campaign messaging, promotional coordination, monitoring and agreed launch-period optimization.'],
  ['FULL CAMPAIGN MANAGEMENT','$1,200','Our flagship end-to-end campaign support option.','We combine the agreed preparation and launch workflow into one complete management engagement, covering strategy, campaign optimization, audience building, email marketing, outreach, promotional coordination, monitoring and optimization.'],
];

export default function Page(){
  return <Shell eyebrow="Pricing" title="CLEAR PRICING. CLEAR SCOPE.">
    <section className="section"><div className="container">
      <div className="pricing three">{plans.map(([name,price,best,body],i)=><article className={`card price-card ${i===2?'featured':''}`} key={name}><div className="eyebrow">{name}</div><div className="price">{price}</div><h3>{best}</h3><p>{body}</p><a className="text-link" href="/contact">GET STARTED →</a></article>)}</div>
      <div className="pricing-note">
        <h3 className="display">WHAT YOU ARE PAYING FOR</h3>
        <p>Every package is based on an agreed scope of marketing work, execution and communication. SpeedFunders handles the activities described in the selected plan while the creator provides timely access to campaign materials, approvals and required accounts or assets. The exact workflow is confirmed before work begins. Pricing covers services and promotional execution, not guaranteed campaign results.</p>
      </div>
      <p className="notice">SpeedFunders does not guarantee a specific number of backers, pledges, funding amount, Kickstarter approval, Project We Love, media coverage, influencer coverage or conversion outcome.</p>
    </div></section>
  </Shell>
}
