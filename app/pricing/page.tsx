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
    'Up to 10K relevant crowdfunding supporters',
    'Campaign review, audience matching, targeted email promotion, one newsletter placement, one follow-up and a basic performance report.'
  ],
  [
    'STANDARD',
    '$350',
    'Up to 25K relevant crowdfunding supporters',
    'Everything in Basic, with broader reach, dedicated newsletter placement, two follow-ups, additional segmentation, campaign messaging and a performance summary.'
  ],
  [
    'PREMIUM',
    '$450',
    'Up to 50K relevant crowdfunding supporters',
    'Everything in Standard, with multiple audience segments, three follow-ups, campaign-specific messaging, urgency follow-up, tracking and a final performance report.'
  ],
];
export default function Page(){
  return <Shell eyebrow="Pricing" title="CLEAR PRICING. CLEAR SCOPE.">
    <section className="section"><div className="container">
      <div className="pricing three">{plans.map(([name,price,best,body],i)=><article className={`card price-card ${i===2?'featured':''}`} key={name}><div className="eyebrow">{name}</div><div className="price">{price}</div><h3>{best}</h3><p>{body}</p><a className="text-link" href="/contact">GET STARTED →</a></article>)}</div>
     <section className="community-pricing-section">

  <div className="section-head">
    <div className="eyebrow">BACKERS COMMUNITY</div>

    <h2 className="display">
      ACCESS OUR BACKERS COMMUNITY
    </h2>

    <p className="muted">
      For creators who want to put their campaign in front of relevant members of our crowdfunding supporters community through targeted outreach.
    </p>

    <p className="muted">
      Unlike Full Campaign Management, these packages do not cover the complete marketing journey. Instead, SpeedFunders focuses specifically on matching your campaign with relevant crowdfunding supporters and carrying out targeted outreach based on the package selected.
    </p>

    <p className="muted">
      This option is ideal for creators who already have their campaign foundation in place and need additional targeted exposure through a focused crowdfunding audience.
    </p>
  </div>

  <div className="pricing three">
    {communityPlans.map(([name,price,best,body]) => (
      <article className="card price-card community-price-card" key={name}>
        <div className="eyebrow">{name}</div>
        <div className="price">{price}</div>
        <h3>{best}</h3>
        <p>{body}</p>
      </article>
    ))}
  </div>

  <div className="pricing-note community-pricing-note">
    <h3 className="display">WHAT YOU ARE PAYING FOR</h3>

    <p>
      Your payment covers campaign review, audience matching, segmentation and targeted outreach to relevant crowdfunding supporters based on the package selected.
    </p>

    <p>
      We do not simply provide a contact list or send the same message to everyone. SpeedFunders identifies relevant audience segments, coordinates the agreed outreach and carries out the follow-up activity included in your selected package.
    </p>

    <p>
      The stated community size represents the maximum targeted outreach volume included in each package. Actual audience relevance and response will vary depending on the campaign, category, positioning and supporter interest.
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
