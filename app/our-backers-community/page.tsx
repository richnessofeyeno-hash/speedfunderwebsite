import { Shell } from '../_shared';

const plans = [
  ['BASIC','$250','Up to 10K relevant crowdfunding supporters','Campaign review, audience matching, targeted email promotion, one newsletter placement, one follow-up and a basic performance report.'],
  ['STANDARD','$350','Up to 25K relevant crowdfunding supporters','Everything in Basic, with broader reach, dedicated newsletter placement, two follow-ups, additional segmentation, campaign messaging and a performance summary.'],
  ['PREMIUM','$450','Up to 50K relevant crowdfunding supporters','Everything in Standard, with multiple audience segments, three follow-ups, campaign-specific messaging, urgency follow-up, tracking and a final performance report.'],
];

export default function Page(){
  return <Shell eyebrow="Our Backers Community" title="150K+ CROWDFUNDING SUPPORTERS">
    <section className="section">
      <div className="container">

        <div className="section-head wide">
          <div className="eyebrow">Choose your outreach level</div>
          <h2 className="display">TARGETED CROWDFUNDING EXPOSURE FOR YOUR CAMPAIGN.</h2>
          <p className="muted">
            Choose the level of targeted crowdfunding exposure that best fits your campaign and existing marketing foundation.
          </p>
        </div>

        <div className="pricing three community-pricing">
          {plans.map(([name,price,reach,body],i) => (
            <article className={`card ${i===1?'featured':''}`} key={name}>
              <div className="eyebrow">{name}</div>
              <div className="price">{price}</div>
              <h3>{reach}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="section-head wide community-explanation">
          <div className="eyebrow">Built through previous campaigns</div>
          <h2 className="display">
            A COMMUNITY BUILT THROUGH SUCCESSFUL CROWDFUNDING CAMPAIGNS.
          </h2>

          <p className="muted">
            Our Backers Community is a growing network of crowdfunding supporters built through the campaigns and creator projects we have worked with over the years.
          </p>

          <p className="muted">
            Through our previous campaigns, we have developed relationships with people who actively discover, follow and support new crowdfunding projects across different categories.
          </p>

          <p className="muted">
            When you work with SpeedFunders, your campaign can be introduced to this established crowdfunding audience as an additional channel alongside your own marketing, social media and organic reach.
          </p>

          <p className="muted">
            We don't simply send every campaign to everyone. We review your project, identify relevant supporter segments, and focus our outreach on people who are most likely to find your campaign relevant.
          </p>
        </div>

        <div className="community-callout">
          <strong>
            150K+ IS THE SIZE OF THE COMMUNITY. RELEVANCE DETERMINES WHO WE REACH.
          </strong>
        </div>

        <div className="section-head">
          <div className="eyebrow">How we use the community</div>
          <h2 className="display">
            TARGETED OUTREACH, NOT A GENERIC BLAST.
          </h2>
        </div>

        <div className="community-flow">
          {[
            ['01','CAMPAIGN REVIEW','We review your campaign and identify its ideal backer.'],
            ['02','AUDIENCE MATCHING','We match your project with relevant supporter segments.'],
            ['03','TARGETED OUTREACH','We introduce your campaign to relevant crowdfunding supporters.'],
            ['04','FOLLOW-UP','We maintain visibility during the agreed outreach period.'],
            ['05','REPORTING','We track the outreach and provide a performance summary.'],
          ].map(([number,title,text]) => (
            <article className="community-mini-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="section-head">
          <div className="eyebrow">
            Why choose this instead of full campaign management?
          </div>

          <h2 className="display">
            FOCUSED OUTREACH WITHOUT BUYING A COMPLETE MARKETING OPERATION.
          </h2>

          <p className="muted">
            Full Campaign Management is for creators who need SpeedFunders to help build and manage the broader marketing journey. Our Backers Community service is for creators who already have much of that foundation and primarily need additional targeted crowdfunding exposure.
          </p>

          <p className="muted">
            It can therefore work as a focused promotional layer alongside an existing strategy, team or audience. The service still begins with campaign review and audience relevance rather than a blind send.
          </p>
        </div>

        <p className="notice">
          Community size does not mean every campaign is sent to every supporter.
          Outreach is matched and segmented according to relevance. Results vary by
          campaign, audience, offer and market conditions. We do not guarantee
          pledges, backers or funding.
        </p>

      </div>
    </section>
  </Shell>
}
