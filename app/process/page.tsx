import { Shell } from '../_shared';

const stages = [
  ['01','PREPARE','7-Day Campaign Preparation','We review your Kickstarter concept, campaign page, positioning, rewards, funding goal, audience and creative assets. We identify areas that need improvement before promotion begins. We establish the strongest marketing angle and define the priority audience segments. We prepare the agreed campaign assets and promotional direction. We make sure the campaign is ready for the attention we plan to generate.'],
  ['02','BUILD','2–4 Week Pre-Launch','We build the audience before the campaign goes live. We set up lead-generation opportunities, lead magnets, email capture and audience segmentation where applicable. We prepare social and email content that introduces the project to potential supporters. We begin nurturing early interest and collecting qualified prospects. We use this period to create a stronger starting audience for launch.'],
  ['03','NURTURE','Turn Interest Into Intent','We communicate with people who have already shown interest in the project. We use email, content, updates and targeted follow-ups to keep the campaign in front of them. We reinforce the project’s strongest value points and address common questions. We organize messaging around the journey from awareness to genuine intent. We continue building familiarity so supporters are more prepared to take action when the campaign goes live or reaches an important milestone.'],
  ['04','LAUNCH','Launch With Momentum','We coordinate the agreed promotional activities around the Kickstarter launch. We activate email promotion, community outreach, social activity and other selected marketing channels. We direct relevant audiences toward the campaign and monitor the initial response. We review early engagement and adjust messaging or promotional emphasis where appropriate. We use the launch period to establish a coordinated flow of attention rather than relying on one announcement.'],
  ['05','REACH','Expand Relevant Visibility','We expand promotion beyond the campaign’s initial audience. We identify additional relevant communities, newsletters, media opportunities, influencers and promotional channels where appropriate. We refine targeting and messaging based on campaign performance and audience behavior. We prioritize audiences that have a reasonable connection to the project instead of pursuing untargeted traffic. We use this stage to broaden qualified visibility while maintaining campaign relevance.'],
  ['06','CONVERT','Turn Attention Into Backing','We focus promotional activity on people who have demonstrated meaningful interest in the campaign. We strengthen calls to action, follow up with engaged audiences and communicate important milestones. We use appropriate urgency during key campaign periods and final days. We review available performance signals to identify drop-off and opportunities for improvement. We continue optimizing the path from qualified attention to meaningful campaign action.'],
];

export default function Page(){
  return (
    <Shell eyebrow="Process" title="OUR CROWDFUNDING PROCESS">
      <section className="section process-headline-section">
        <div className="container">
          <div className="process-headline-grid">
            <div className="process-headline-card">
              <span>01</span>
              <strong>PREPARE</strong>
              <b>→</b>
            </div>

            <div className="process-headline-card">
              <span>02</span>
              <strong>BUILD</strong>
              <b>→</b>
            </div>

            <div className="process-headline-card">
              <span>03</span>
              <strong>NURTURE</strong>
            </div>

            <div className="process-headline-card">
              <span>04</span>
              <strong>LAUNCH</strong>
              <b>→</b>
            </div>

            <div className="process-headline-card">
              <span>05</span>
              <strong>REACH</strong>
              <b>→</b>
            </div>

            <div className="process-headline-card">
              <span>06</span>
              <strong>CONVERT</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-list">
          {stages.map(([n,name,time,body]) => (
            <article className="process-detail" key={n}>
              <div className="process-number">{n}</div>
              <div>
                <div className="eyebrow">{name}</div>
                <h2 className="display">{time}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  )
}
