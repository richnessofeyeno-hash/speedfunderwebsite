import { Shell } from '../_shared';

const points = [
  ['Who We Are','SpeedFunders is a crowdfunding marketing team built around the needs of creators preparing to launch and grow Kickstarter campaigns. We have been developing crowdfunding marketing experience since 2018. We work across campaign positioning, audience development, email, discoverability, outreach and promotional execution. We combine campaign strategy with practical marketing delivery. Our goal is to help creators move from a good idea to a campaign that is properly prepared for attention.'],
  ['Our Mission','Our mission is to help creators build stronger campaigns and create measurable momentum around them. We start by understanding the project, audience, offer and campaign objective. We then build the marketing activities around what the campaign actually needs. We focus on relevant audiences rather than traffic for traffic’s sake. We also aim to help creators build an audience that can remain valuable after the Kickstarter campaign ends.'],
  ['What We Do','We help creators improve their campaign presentation, discoverability, audience-building systems, email marketing and supporter outreach. We review the campaign foundation before introducing promotional activity. We build pre-launch interest where the timeline allows. We coordinate agreed promotional channels around launch and campaign milestones. We also provide targeted community outreach for creators who need additional crowdfunding exposure.'],
  ['Our Approach','Our approach follows a simple principle: position first, promote second, build beyond Kickstarter. We review the campaign before deciding how it should be marketed. We identify the audiences most likely to care about the project and tailor messaging around them. We use a combination of organic, email, community and promotional channels where appropriate. We continuously refine the execution around the campaign’s response and available resources.'],
  ['Why SpeedFunders','SpeedFunders is focused specifically on crowdfunding rather than treating Kickstarter as just another advertising destination. We understand that campaign presentation, trust, audience readiness and timing affect promotion. We structure our services so creators can choose between broader campaign management and focused community outreach. We explain what each service covers before work begins. We build our recommendations around the project rather than forcing every creator into the same marketing package.'],
  ['Our Backers Community','Our broader crowdfunding supporter community gives eligible campaigns another promotional channel beyond their existing audience. We review the project before deciding which audience segments are relevant. We use targeted outreach rather than treating the full community as one undifferentiated list. Depending on the selected plan, outreach can include email promotion, newsletter placement and follow-up. The service is designed for creators who need additional targeted exposure without necessarily purchasing full campaign management.'],
  ['Our Location','SpeedFunders is based at 447 Broadway, 2nd Floor, New York, NY 10013, United States. The location supports our professional business presence while our campaign work is delivered digitally. We work with creators and projects that can be served through remote marketing workflows. Communication, campaign materials and reporting can be handled online. Our focus remains on the campaign, its audience and the agreed marketing objectives rather than physical proximity.'],
  ['Our Philosophy','We believe strong crowdfunding marketing begins before the first promotional click. We believe creators deserve clarity about what they are paying for and what the marketing process involves. We do not treat a large audience number as a guarantee of pledges or funding. We focus on relevance, positioning, communication and consistent execution. Most importantly, we want the campaign to become a foundation for the creator’s next opportunity, not simply a one-time traffic destination.'],
];

export default function Page(){
  return <Shell eyebrow="About SpeedFunders" title="BUILT AROUND CROWDFUNDING. BUILT TO CREATE MOMENTUM.">
    <section className="section"><div className="container about-list">
{points.map(([eyebrow,text]) => (
  <article className="about-block" key={eyebrow}>
    <div className="eyebrow">{eyebrow}</div>
    <p>{text}</p>
  </article>
))}
    </div></section>
    <section className="section grid-bg"><div className="container"><div className="section-head"><div className="eyebrow">Our differentiator</div><h2 className="display">WE DON'T SEND TRAFFIC TO A CAMPAIGN THAT ISN'T READY.</h2><p className="muted">TRAFFIC IS NOT THE STRATEGY. POSITIONING COMES FIRST.</p></div></div></section>
  </Shell>
}
