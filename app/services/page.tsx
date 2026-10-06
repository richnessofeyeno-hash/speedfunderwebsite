import { Shell } from '../_shared';

const services = [
  ['01','Campaign Page Setup & Optimization','We review the campaign page from the perspective of a first-time visitor. We assess the headline, story, offer, rewards, visuals, social proof, calls to action and overall flow. We identify sections that may weaken trust or make the value difficult to understand. We then recommend and implement agreed improvements to the campaign presentation. The objective is to give promotion a stronger page to send qualified attention toward.'],
  ['02','SEO & Off-Platform Discoverability','We work on the words and signals that help a campaign become easier to discover beyond Kickstarter. We research relevant keywords, campaign language and audience search intent. We apply those insights to campaign messaging and supporting promotional assets where appropriate. We also consider off-platform discovery through search, social and relevant content channels. The work is designed to strengthen discoverability rather than rely entirely on paid or direct traffic.'],
  ['03','Email Funnel & Lead Magnet','We help create a practical path for turning early interest into an audience that can be nurtured. We plan a lead magnet or incentive that gives potential supporters a reason to join. We structure the capture and segmentation process around the campaign timeline. We prepare messaging that introduces the project and builds interest before launch. The result is a warmer audience that can be contacted again at important campaign moments.'],
  ['04','Email Marketing & Newsletter Placement','We plan campaign-specific email communication around the creator’s available audience and promotional opportunities. We can prepare launch announcements, reminders, milestone messages and urgency-focused follow-ups. Where included and appropriate, we coordinate newsletter placements with relevant crowdfunding audiences. Messaging is adapted to the campaign rather than copied as a generic advertisement. We track the agreed promotional activity and use the response to improve subsequent outreach.'],
  ['05','Backer Community Outreach','We review the campaign and identify relevant segments within our broader crowdfunding supporter community. We then coordinate targeted email and newsletter outreach according to the selected plan. Follow-ups are used to re-engage appropriate audiences instead of relying on a single announcement. Campaign-specific messaging is used to communicate the project clearly. We provide reporting on the promotional activity so creators can evaluate the outreach alongside their wider campaign strategy.'],
];

export default function Page(){
  return <Shell eyebrow="Services" title="MARKETING BUILT AROUND THE CAMPAIGN.">
    <section className="section"><div className="container service-list">
      {services.map(([n,title,body]) => <article className="service-detail" key={n}><div className="service-icon">{n}</div><div><h2 className="display">{title}</h2><p>{body}</p></div></article>)}
    </div></section>
  </Shell>
}
