import { Shell } from '../_shared';

const plans = [
  ['PRE-LAUNCH','$600','For creators preparing before launch.','We handle campaign positioning and preparation, page review and optimization, audience research, lead-generation planning, pre-launch audience building, marketing preparation and launch-readiness support.'],
  ['LAUNCH','$800','For creators ready to launch or currently launching.','We handle launch promotion, email marketing, community outreach, social promotion, campaign messaging, promotional coordination, monitoring and agreed launch-period optimization.'],
  ['FULL CAMPAIGN MANAGEMENT','$1,200','Our flagship end-to-end campaign support option.','We combine the agreed preparation and launch workflow into one complete management engagement, covering strategy, campaign optimization, audience building, email marketing, outreach, promotional coordination, monitoring and optimization.'],
];
const communityPlans = [
  [
    'BASIC',
    '$250',
    'Targeted crowdfunding outreach for creators who already have the foundation in place.',
    'Includes campaign review, audience matching and targeted outreach to up to 10K relevant crowdfunding supporters. We focus the outreach on people whose interests are aligned with the campaign rather than sending a generic broadcast.'
  ],
  [
    'STANDARD',
    '$350',
    'A broader targeted outreach option for creators seeking more crowdfunding exposure.',
    'Includes campaign review, audience segmentation, targeted outreach to up to 25K relevant crowdfunding supporters and follow-up activity where appropriate. Messaging is aligned with the campaign positioning and intended audience.'
  ],
  [
    'PREMIUM',
    '$450',
    'Our highest-volume targeted crowdfunding community outreach option.',
    'Includes campaign review, audience matching, targeted outreach to up to 50K relevant crowdfunding supporters and follow-up activity where appropriate. We prioritize relevance and audience fit rather than indiscriminate database blasting.'
  ],
];
export default function Page(){
  return <Shell eyebrow="Pricing" title="CLEAR PRICING. CLEAR SCOPE.">
    <section className="section"><div className="container">
      <div className="pricing three">{plans.map(([name,price,best,body],i)=><article className={`card price-card ${i===2?'featured':''}`} key={name}><div className="eyebrow">{name}</div><div className="price">{price}</div><h3>{best}</h3><p>{body}</p><a className="text-link" href="/contact">GET STARTED →</a></article>)}</div>
      <section className="community-pricing-section">
  <div className="section-head">
    <div className="eyebrow">Our Backers Community</div>
    <h2 className="display">TARGETED CROWDFUNDING OUTREACH.</h2>
    <p className="muted">
      Choose the outreach level that matches your campaign needs. These packages provide targeted exposure to relevant crowdfunding supporters and are designed for creators who already have much of their campaign foundation in place.
    </p>
  </div>

  <div className="pricing three">
    {communityPlans.map(([name,price,best,body]) => (
      <article className="card price-card community-price-card" key={name}>
        <div className="eyebrow">{name}</div>
        <div className="price">{price}</div>
        <h3>{best}</h3>
        <p>{body}</p>
        <a className="text-link" href="/contact">GET STARTED →</a>
      </article>
    ))}
  </div>

  <div className="pricing-note community-pricing-note">
    <h3 className="display">WHAT YOU ARE PAYING FOR</h3>
    <p>
      Your payment covers campaign review, audience matching, segmentation and targeted outreach to relevant crowdfunding supporters based on the selected package. SpeedFunders does not simply provide access to a contact list or send the same message to everyone. We determine which audience segments are more relevant to the campaign, coordinate the agreed outreach and use appropriate follow-up where applicable.
    </p>
    <p>
      The community size represents the maximum targeted outreach volume included in the selected package: up to 10K supporters with Basic, up to 25K with Standard, or up to 50K with Premium. Audience relevance and response will vary by campaign, category, positioning and supporter interest.
    </p>
  </div>
</section>
      <div className="pricing-note">
        <h3 className="display">WHAT YOU ARE PAYING FOR</h3>
        <p>Every package is based on an agreed scope of marketing work, execution and communication. SpeedFunders handles the activities described in the selected plan while the creator provides timely access to campaign materials, approvals and required accounts or assets. The exact workflow is confirmed before work begins. Pricing covers services and promotional execution, not guaranteed campaign results.</p>
      </div>
      <p className="notice">SpeedFunders does not guarantee a specific number of backers, pledges, funding amount, Kickstarter approval, Project We Love, media coverage, influencer coverage or conversion outcome.</p>
    </div></section>
  </Shell>
}
