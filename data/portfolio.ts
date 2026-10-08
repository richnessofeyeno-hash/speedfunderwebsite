export type PortfolioItem = {
  title: string;
  category: 'Art'|'Comics'|'Design'|'Fashion'|'Film & Video'|'Games'|'Publishing'|'Technology';
  year: number;
  funding: string;
  goal: string;
  backers?: string;
  url: string;
  image?: string;
};

// Verified campaign records currently loaded. The remaining portfolio records should
// only be added when their exact Kickstarter URLs are supplied/verified.
export const portfolio: PortfolioItem[] = [
  // Art
  {
    title:'The Marvel Art of DAN DOS SANTOS - A Deluxe Art Book & More!',
    category:'Art',
    year:2026,
    funding:'$126,900',
    goal:'$10,000',
    backers:'707',
    url:'https://www.kickstarter.com/projects/cloverpressart/the-marvel-art-of-dan-dos-santos-a-deluxe-art-book-and-more',
    image:'/marvel-art-dan-dos-santos.jpg'
  },

  {
    title:'AKREON - Artbook by Anna Podedworna',
    category:'Art',
    year:2026,
    funding:'€80,028',
    goal:'€25,000',
    backers:'698',
    url:'https://www.kickstarter.com/projects/spiridon/akreon',
    image:'/akreon.jpg'
  },

  {
    title:'The Art of Sakimichan Vol 3: The Final Hard One ^_^',
    category:'Art',
    year:2026,
    funding:'CA$191,337',
    goal:'CA$75,000',
    backers:'797',
    url:'https://www.kickstarter.com/projects/artofsakimichannsfw/the-art-of-sakimichan-vol-3-the-final-hard-one',
    image:'/sakimichan-vol-3.jpg'
  },

  {
    title:'The Art of Zarory',
    category:'Art',
    year:2026,
    funding:'€16,306',
    goal:'€5,000',
    backers:'209',
    url:'https://www.kickstarter.com/projects/zarory/the-art-of-zarory',
    image:'/art-of-zarory.jpg'
  },

  {
    title:'Arcane - Luxury Tarot and Art Playing Cards',
    category:'Art',
    year:2026,
    funding:'¥15,033,633',
    goal:'¥1,000,000',
    backers:'976',
    url:'https://www.kickstarter.com/projects/jackbrutuspenny/arcane-luxury-tarot-and-art-playing-cards',
    image:'/arcane.jpg'
  },

  {
    title:'The Oracle of Many Paths',
    category:'Art',
    year:2025,
    funding:'$277,399',
    goal:'$50,000',
    backers:'3,074',
    url:'https://www.kickstarter.com/projects/jamesreads/the-oracle-of-many-paths',
    image:'/oracle-many-paths.jpg'
  },

  {
    title:'The Rebel Loon Archive: A Book of Protest Art',
    category:'Art',
    year:2026,
    funding:'$65,351',
    goal:'$5,000',
    backers:'768',
    url:'https://www.kickstarter.com/projects/rebelloonpress/the-rebel-loon-archive-hardcover-book',
    image:'/rebel-loon.jpg'
  },

  {
    title:'Remembering: Messages From the Wild Voice Within',
    category:'Art',
    year:2026,
    funding:'$26,417',
    goal:'$12,000',
    backers:'428',
    url:'https://www.kickstarter.com/projects/thestarseekertarot/the-star-seeker-divine-messages-deck',
    image:'/remembering.jpg'
  },

  {
    title:'Goliath GP STL Definitive Collection Miniatures for 3D Print',
    category:'Art',
    year:2026,
    funding:'€1,465',
    goal:'€90',
    backers:'114',
    url:'https://www.kickstarter.com/projects/claudiocasiniart/goliath-stl-definitive-collection-miniatures-for-3d-print/',
    image:'/goliath-gp.jpg'
  },

  {
    title:'The Bones of Becoming Oracle Deck: Second Edition',
    category:'Art',
    year:2026,
    funding:'$7,096',
    goal:'$3,800',
    backers:'123',
    url:'https://www.kickstarter.com/projects/bonesofbecoming/the-bones-of-becoming-oracle-deck-second-edition',
    image:'/bones-of-becoming.jpg'
  },


  // Comics
  {
    title:'James S.A. Corey Returns to THE EXPANSE in A LITTLE DEATH',
    category:'Comics',
    year:2025,
    funding:'$897,653',
    goal:'$50,000',
    backers:'8,173',
    url:'https://www.kickstarter.com/projects/boom-studios/james-sa-corey-returns-to-the-expanse-in-a-little-death',
    image:'/the-expanse-a-little-death.jpg'
  },

  {
    title:'Witches of Oz #1-4: THE WICCA COVEN!',
    category:'Comics',
    year:2026,
    funding:'$55,954',
    goal:'$22,000',
    backers:'1,285',
    url:'https://www.kickstarter.com/projects/comicuno/woz4/',
    image:'/witches-of-oz.jpg'
  },

  {
    title:'Submachine | Comic Book',
    category:'Comics',
    year:2026,
    funding:'€82,490',
    goal:'€20,000',
    backers:'939',
    url:'https://www.kickstarter.com/projects/mateuszskutnik/submachine-comic-book',
    image:'/submachine.jpg'
  },

  {
    title:'SUGAR POP: The Fly on Windscreen pt. 2',
    category:'Comics',
    year:2026,
    funding:'$68,866',
    goal:'$5,000',
    backers:'833',
    url:'https://www.kickstarter.com/projects/danmendoza/sugar-pop-the-fly-on-windscreen-pt-2',
    image:'/sugar-pop.jpg'
  },

  {
    title:'Fathom Timeline Omnibus: Volume 1',
    category:'Comics',
    year:2026,
    funding:'$189,258',
    goal:'$50,000',
    backers:'1,179',
    url:'https://www.kickstarter.com/projects/aspencomics/fathom-timeline-omnibus-volume-1',
    image:'/fathom-timeline.jpg'
  },

  {
    title:'FREQ: Volume #1',
    category:'Comics',
    year:2026,
    funding:'€35,937',
    goal:'€20,000',
    backers:'583',
    url:'https://www.kickstarter.com/projects/freqmanga/freq-volume-1',
    image:'/freq-volume-1.jpg'
  },

  {
    title:'The Mandawhorian',
    category:'Comics',
    year:2026,
    funding:'$10,564',
    goal:'$500',
    backers:'260',
    url:'https://www.kickstarter.com/projects/divinity--comics/the-mandawhorian',
    image:'/mandawhorian.jpg'
  },

  {
    title:'Devil\'s Due Presents: Mercy Sparx - 25th Anniversary Special',
    category:'Comics',
    year:2026,
    funding:'$12,549',
    goal:'$5,555',
    backers:'223',
    url:'https://www.kickstarter.com/projects/joshcblaylock/devils-due-presents-mercy-sparx',
    image:'/mercy-sparx.jpg'
  },

  {
    title:'Keres: Blood & Shadow One-Shot',
    category:'Comics',
    year:2026,
    funding:'$50,884',
    goal:'$4,900',
    backers:'554',
    url:'https://www.kickstarter.com/projects/zenescopecomics/keres-blood-and-shadow-one-shot',
    image:'/keres-blood-shadow.jpg'
  },

  {
    title:'BURLAP VOL. 1 GRAPHIC NOVEL',
    category:'Comics',
    year:2026,
    funding:'$5,391',
    goal:'$5,000',
    backers:'104',
    url:'https://www.kickstarter.com/projects/burlapcomics/burlap-vol-1-graphic-novel',
    image:'/burlap-vol-1.jpg'
  },


  // Design
  {
    title:'Renote Snap: World’s 1st Metal Notebook Wallet',
    category:'Design',
    year:2026,
    funding:'£68,119',
    goal:'£1,127',
    backers:'847',
    url:'https://www.kickstarter.com/projects/renote-snap/renote-snap-worlds-first-7-in-1-notebook-wallet',
    image:'/renote-snap.jpg'
  },

  {
    title:'KEI PACK | The Future of EU Hand Luggage',
    category:'Design',
    year:2026,
    funding:'€10,404',
    goal:'€2,500',
    backers:'90',
    url:'https://www.kickstarter.com/projects/931698574/kei-carry-on-the-future-of-eu-hand-luggage',
    image:'/kei-pack.jpg'
  },

  {
    title:'Cinomadist Motion: A Backpack for Work, Transit, and Travel',
    category:'Design',
    year:2026,
    funding:'HK$827,686',
    goal:'HK$10,000',
    backers:'663',
    url:'https://www.kickstarter.com/projects/cinomadistbackpack/cinomadist-motion-a-backpack-for-work-transit-and-travel/',
    image:'/cinomadist-motion.jpg'
  },

  {
    title:'PartyDrop:3-in-1 Backpack That Transforms & Travels With You',
    category:'Design',
    year:2026,
    funding:'HK$132,418',
    goal:'HK$5,000',
    backers:'213',
    url:'https://www.kickstarter.com/projects/294064084/partydro-3-in-1-backpack-that-transforms-and-travels-with-you',
    image:'/partydrop.jpg'
  },

  {
    title:'TEMO – The Gravity-Activated Focus Timer for Deep Work',
    category:'Design',
    year:2026,
    funding:'HK$58,662',
    goal:'HK$4,000',
    backers:'135',
    url:'https://www.kickstarter.com/projects/1022636539/temo-the-gravity-activated-focus-timer-for-deep-work',
    image:'/temo.jpg'
  },

  {
    title:'The Magnetic 12-in-1 Phone Stand & Titanium EDC Tool',
    category:'Design',
    year:2026,
    funding:'$13,451',
    goal:'$2,000',
    backers:'159',
    url:'https://www.kickstarter.com/projects/vulyx/the-magnetic-12-in-1-phone-stand-and-titanium-edc-tool/',
    image:'/magnetic-12-in-1.jpg'
  },

  {
    title:'TDM. Neo | Headphones That Transform into a Speaker',
    category:'Design',
    year:2026,
    funding:'$154,113',
    goal:'$10,000',
    backers:'766',
    url:'https://www.kickstarter.com/projects/1973963736/tdm-neo-headphones-that-transform-into-a-speaker',
    image:'/tdm-neo.jpg'
  },

  {
    title:'Artella | The Modular Carry System',
    category:'Design',
    year:2026,
    funding:'€12,893',
    goal:'€5,120',
    backers:'36',
    url:'https://www.kickstarter.com/projects/artsyna/artella-a-modular-carry-system-for-work-gym-and-travel',
    image:'/artella.jpg'
  },

  {
    title:'Mighty Morphin Power Rangers Combinable Dragonzord',
    category:'Design',
    year:2026,
    funding:'$782,530',
    goal:'$400,000',
    backers:'7,883',
    url:'https://www.kickstarter.com/projects/playmatestoys/mighty-morphin-power-rangers-combinable-dragonzord',
    image:'/dragonzord.jpg'
  },

  {
    title:'D1 Milano x Peter Tarka: The Impossible Watch',
    category:'Design',
    year:2026,
    funding:'$415,041',
    goal:'$15,000',
    backers:'943',
    url:'https://www.kickstarter.com/projects/840192188/d1-milano-x-peter-tarka-the-impossible-watch',
    image:'/d1-milano-peter-tarka.jpg'
  },


  // Fashion
  {
    title:'noRecognition : AI Adversarial Clothing',
    category:'Fashion',
    year:2026,
    funding:'$204,288',
    goal:'$5,000',
    backers:'1,213',
    url:'https://www.kickstarter.com/projects/norecognition/norecognition-ai-adversarial-clothing',
    image:'/norecognition.jpg'
  },

  {
    title:'The Unbound Performance Quarter Zip & Overshirt',
    category:'Fashion',
    year:2026,
    funding:'$85,484',
    goal:'$10,000',
    backers:'420',
    url:'https://www.kickstarter.com/projects/woodiesdenim/the-unbound-performance-quarter-zip-and-overshirt',
    image:'/unbound-performance.jpg'
  },

  {
    title:'LAY YOUR BONES - An Ode to Natural Fibre',
    category:'Fashion',
    year:2026,
    funding:'AU$31,000',
    goal:'AU$30,000',
    backers:'46',
    url:'https://www.kickstarter.com/projects/layyourbones/lay-your-bones-an-ode-to-natural-fibre',
    image:'/lay-your-bones.jpg'
  },

  {
    title:'Ember Bison: Unexpectedly Soft. Deeply Durable Apparel',
    category:'Fashion',
    year:2026,
    funding:'$5,217',
    goal:'$5,000',
    backers:'12',
    url:'https://www.kickstarter.com/projects/1925399328/ember-bison-unexpectedly-soft-deeply-durable-apparel',
    image:'/ember-bison.jpg'
  },

  {
    title:'Revenant - Transform',
    category:'Fashion',
    year:2026,
    funding:'$184,192',
    goal:'$100,000',
    backers:'687',
    url:'https://www.kickstarter.com/projects/bisonwares/revenant-transform',
    image:'/revenant-transform.jpg'
  },

  {
    title:'TRANSFORM- Sherpa Jean Jacket',
    category:'Fashion',
    year:2026,
    funding:'$225,017',
    goal:'$16,000',
    backers:'1,496',
    url:'https://www.kickstarter.com/projects/transformjeanjacket/transform-sherpa-jean-jacket',
    image:'/transform-sherpa.jpg'
  },

  {
    title:'The GAMEBAG - A Nostalgic, Fun ITA Satchel Bag',
    category:'Fashion',
    year:2025,
    funding:'£310,744',
    goal:'£10,000',
    backers:'3,666',
    url:'https://www.kickstarter.com/projects/dokidokidemon/the-gamebag-a-nostalgic-fun-satchel-bag',
    image:'/gamebag.jpg'
  },

  {
    title:'The Monolith Collection: Modular RPG Dice Jewelry',
    category:'Fashion',
    year:2025,
    funding:'$354,591',
    goal:'$10,000',
    backers:'2,047',
    url:'https://www.kickstarter.com/projects/yaniir/the-monolith-collection',
    image:'/monolith.jpg'
  },

  {
    title:'SOTTOS: All-Terrain Luggage',
    category:'Fashion',
    year:2024,
    funding:'$240,680',
    goal:'$75,000',
    backers:'643',
    url:'https://www.kickstarter.com/projects/sottos/sottos-all-terrain-luggage',
    image:'/sottos.jpg'
  },

  {
    title:'Mesolite: Modular Bag System',
    category:'Fashion',
    year:2025,
    funding:'$137,028',
    goal:'$125,000',
    backers:'115',
    url:'https://www.kickstarter.com/projects/mesolite/mesolite-modular-bag-system',
    image:'/mesolite.jpg'
  },


  // Film & Video
  {
    title:'RICKY Film Pay-It-Forward $250,000 Impact Campaign',
    category:'Film & Video',
    year:2026,
    funding:'$60,712',
    goal:'$50,000',
    backers:'120',
    url:'https://www.kickstarter.com/projects/rickythemovie/ricky-film-2026',
    image:'/ricky.jpg'
  },

  {
    title:'Small Town Monsters 2026: UFOs, Dogman, and Bigfoot',
    category:'Film & Video',
    year:2026,
    funding:'$106,787',
    goal:'$70,000',
    backers:'485',
    url:'https://www.kickstarter.com/projects/minervamonster/small-town-monsters-2026-ufos-dogman-and-bigfoot',
    image:'/small-town-monsters.jpg'
  },

  {
    title:'The Last Picture Shop - Feature Documentary',
    category:'Film & Video',
    year:2026,
    funding:'£56,162',
    goal:'£30,000',
    backers:'779',
    url:'https://www.kickstarter.com/projects/tlps/the-last-picture-shop-feature-documentary',
    image:'/last-picture-shop.jpg'
  },

  {
    title:'HALFRICAN',
    category:'Film & Video',
    year:2026,
    funding:'$39,153',
    goal:'$20,000',
    backers:'257',
    url:'https://www.kickstarter.com/projects/halfricanshow/halfrican',
    image:'/halfrican.jpg'
  },

  {
    title:'Talitha | A Miraculous Resurrection Feature Film',
    category:'Film & Video',
    year:2026,
    funding:'$30,000',
    goal:'$27,000',
    backers:'132',
    url:'https://www.kickstarter.com/projects/refocuscreative/talitha-a-miraculous-resurrection-story',
    image:'/talitha.jpg'
  },

  {
    title:'The Commodore 64: The Birth of a Cultural Icon',
    category:'Film & Video',
    year:2026,
    funding:'£134,759',
    goal:'£55,000',
    backers:'2,616',
    url:'https://www.kickstarter.com/projects/graciousfilms/the-commodore-64-the-birth-of-a-cultural-icon',
    image:'/commodore-64.jpg'
  },

  {
    title:'BOWHUNTER',
    category:'Film & Video',
    year:2026,
    funding:'NZ$5,171',
    goal:'NZ$5,000',
    backers:'28',
    url:'https://www.kickstarter.com/projects/raroa/bowhunter/',
    image:'/bowhunter.jpg'
  },

  {
    title:'Wait in the Wings: Buried Treasure',
    category:'Film & Video',
    year:2026,
    funding:'$40,339',
    goal:'$15,000',
    backers:'282',
    url:'https://www.kickstarter.com/projects/waitinthewings/wait-in-the-wings-buried-treasure',
    image:'/wait-in-the-wings.jpg'
  },

  {
    title:'The Madoff Suit Project',
    category:'Film & Video',
    year:2026,
    funding:'$2,673',
    goal:'$1,000',
    backers:'34',
    url:'https://www.kickstarter.com/projects/vdpod/the-madoff-suit-project',
    image:'/madoff-suit-project.jpg'
  },

  {
    title:'TURMOIL IN THE TOYBOX - Feature Film Finishing Funds',
    category:'Film & Video',
    year:2026,
    funding:'$108,476',
    goal:'$75,000',
    backers:'964',
    url:'https://www.kickstarter.com/projects/1418036943/turmoil-in-the-toybox-feature-film-finishing-funds',
    image:'/turmoil-in-the-toybox.jpg'
  },


  // Games
  {
    title:'Tex Murphy: Killing Moon Rising',
    category:'Games',
    year:2026,
    funding:'$482,875',
    goal:'$50,000',
    backers:'4,502',
    url:'https://www.kickstarter.com/projects/texmurphy/tex-murphy-killing-moon-rising',
    image:'/tex-murphy.jpg'
  },

  {
    title:'Rolling Deep & Eureka | Dice Adventure Roguelike & Campaign',
    category:'Games',
    year:2026,
    funding:'$720,547',
    goal:'$15,000',
    backers:'6,209',
    url:'https://www.kickstarter.com/projects/bitewinggamesnick/rolling-deep-and-eureka-dice-adventure-roguelike-and-campaign',
    image:'/rolling-deep-eureka.jpg'
  },

  {
    title:'PDX ✈️ The Airport Game',
    category:'Games',
    year:2026,
    funding:'$447,095',
    goal:'$22,000',
    backers:'4,670',
    url:'https://www.kickstarter.com/projects/waterworks/pdx',
    image:'/pdx-airport-game.jpg'
  },

  {
    title:'Slay the Spire: The Board Game - Downfall',
    category:'Games',
    year:2026,
    funding:'$7,624,941',
    goal:'$50,000',
    backers:'38,134',
    url:'https://www.kickstarter.com/projects/contentiongames/sts-downfall/',
    image:'/slay-the-spire-downfall.jpg'
  },

  {
    title:'Runeway - A Self Discovery Roleplaying Game',
    category:'Games',
    year:2026,
    funding:'€76,893',
    goal:'€10,000',
    backers:'1,030',
    url:'https://www.kickstarter.com/projects/manaprojectstudio/runeway',
    image:'/runeway.jpg'
  },

  {
    title:'The Cats of New Orleans',
    category:'Games',
    year:2026,
    funding:'CA$152,465',
    goal:'CA$50,000',
    backers:'936',
    url:'https://www.kickstarter.com/projects/283509132/the-cats-of-new-orleans',
    image:'/cats-of-new-orleans.jpg'
  },

  {
    title:'Unearth: Complete Edition',
    category:'Games',
    year:2026,
    funding:'$115,372',
    goal:'$30,000',
    backers:'2,005',
    url:'https://www.kickstarter.com/projects/brotherwise/unearth-10th-anniversary-edition',
    image:'/unearth-complete-edition.jpg'
  },

  {
    title:'One More Page | A Cozy Card Game of Productivity & Pet Chaos',
    category:'Games',
    year:2026,
    funding:'$95,766',
    goal:'$3,108',
    backers:'1,336',
    url:'https://www.kickstarter.com/projects/worldofmithrasa/one-more-page-a-cozy-card-game-of-productivity-and-pet-chaos',
    image:'/one-more-page.jpg'
  },

  {
    title:'Logic & Lore 2nd Edition & Expansion',
    category:'Games',
    year:2026,
    funding:'$107,421',
    goal:'$9,000',
    backers:'1,960',
    url:'https://www.kickstarter.com/projects/weirdgiraffegames/logic-and-lore-2nd-edition',
    image:'/logic-and-lore-2nd-edition.jpg'
  },


  // Publishing
  {
    title:'Historical Trailblazers: Romance Collection',
    category:'Publishing',
    year:2026,
    funding:'$395,385',
    goal:'$10,000',
    backers:'1,497',
    url:'https://www.kickstarter.com/projects/ahpublishing/historical-trailblazers-romance-collection',
    image:'/historical-trailblazers.jpg'
  },

  {
    title:'Kenner Wars',
    category:'Publishing',
    year:2026,
    funding:'€183,451',
    goal:'€30,000',
    backers:'2,308',
    url:'https://www.kickstarter.com/projects/pulsebooks/kennerwars',
    image:'/kenner-wars.jpg'
  },

  {
    title:'Hypothesis Series: Let’s Get Nerdy',
    category:'Publishing',
    year:2026,
    funding:'$172,623',
    goal:'$25,000',
    backers:'425',
    url:'https://www.kickstarter.com/projects/pennyreid/hypothesis-series-lets-get-nerdy',
    image:'/hypothesis-series.jpg'
  },

  {
    title:'Mother of Learning: ARC 1 — Illustrated Deluxe Edition',
    category:'Publishing',
    year:2026,
    funding:'$151,727',
    goal:'$10,000',
    backers:'970',
    url:'https://www.kickstarter.com/projects/wraithmarked/mol1dlx',
    image:'/mother-of-learning.jpg'
  },

  {
    title:'The Odyssey - Special Limited Edition',
    category:'Publishing',
    year:2026,
    funding:'$148,407',
    goal:'$10,000',
    backers:'1,359',
    url:'https://www.kickstarter.com/projects/wraithmarked/odyssey-1',
    image:'/odyssey.jpg'
  },

  {
    title:'Junichiro Jackson (JJ) — Psychological Thriller Manga Series',
    category:'Publishing',
    year:2026,
    funding:'$103,574',
    goal:'$42,000',
    backers:'890',
    url:'https://www.kickstarter.com/projects/teamto/jj',
    image:'/junichiro-jackson.jpg'
  },

  {
    title:'Shadows of the Tenebris Court: Collector\'s Edition Romantasy',
    category:'Publishing',
    year:2026,
    funding:'£83,428',
    goal:'£5,000',
    backers:'604',
    url:'https://www.kickstarter.com/projects/claresager/shadows-of-the-tenebris-court-collectors-edition-romantasy',
    image:'/shadows-tenebris-court.jpg'
  },

  {
    title:'The World of Frostpunk: Artbook & Anthology',
    category:'Publishing',
    year:2025,
    funding:'€638,203',
    goal:'€50,000',
    backers:'3,807',
    url:'https://www.kickstarter.com/projects/11bitstudios/frostpunk-anthology-and-frostpunk-2-artbook',
    image:'/world-of-frostpunk.jpg'
  },

  {
    title:'The Torch that Ignites the Stars Illustrated Deluxe Edition',
    category:'Publishing',
    year:2026,
    funding:'$123,033',
    goal:'$10,000',
    backers:'795',
    url:'https://www.kickstarter.com/projects/wxp/aa3',
    image:'/torch-ignites-stars.jpg'
  },


  // Technology
  {
    title:'PetyPot - AI-Powered Litter-Free Self-Cleaning Cat Toilet',
    category:'Technology',
    year:2025,
    funding:'$650,548',
    goal:'$10,000',
    backers:'1,511',
    url:'https://www.kickstarter.com/projects/petypot/petypot',
    image:'/petypot.jpg'
  },

  {
    title:'Keychron K3 HE & Keychron K3 Ultra: Slim Wireless Custom Keyboards',
    category:'Technology',
    year:2026,
    funding:'$284,900',
    goal:'$10,000',
    backers:'2,044',
    url:'https://www.kickstarter.com/projects/keytron/keychron-k3-he-and-k3-ultra-slim-wireless-custom-keyboards',
    image:'/keychron-k3-he-ultra.jpg'
  },

  {
    title:'Ray: Watch Anything. Understand Everything.',
    category:'Technology',
    year:2026,
    funding:'$227,420',
    goal:'$26,000',
    backers:'1,117',
    url:'https://www.kickstarter.com/projects/techspecs/ray-watch-anything-understand-everything',
    image:'/ray.jpg'
  },

  {
    title:'Owl3D Shift: The Glasses-Free 3D Portal for Your PC',
    category:'Technology',
    year:2026,
    funding:'$347,611',
    goal:'$50,000',
    backers:'795',
    url:'https://www.kickstarter.com/projects/owl3d/owl3d-shift-the-glasses-free-3d-portal-for-your-pc',
    image:'/owl3d-shift.jpg'
  },

  {
    title:'KeyGo Gen2 Pro: Slim Foldable Keyboard with 4K Touchscreen',
    category:'Technology',
    year:2026,
    funding:'HK$4,965,010',
    goal:'HK$30,000',
    backers:'1,770',
    url:'https://www.kickstarter.com/projects/1794064432/keygo-gen2-ultra-slim-folding-keyboard-with-4k-touch-screen',
    image:'/keygo-gen2-pro.jpg'
  },

  {
    title:'FocusRay - VR FacialTracking Device',
    category:'Technology',
    year:2026,
    funding:'¥18,488,436',
    goal:'¥4,000,000',
    backers:'1,306',
    url:'https://www.kickstarter.com/projects/aoharunext/focusray-vr-facialtracking-device/',
    image:'/focusray.jpg'
  },

  {
    title:'ZIEA One: World\'s 1st AI Calendar for Planning and Focus',
    category:'Technology',
    year:2026,
    funding:'S$59,369',
    goal:'S$12,728',
    backers:'187',
    url:'https://www.kickstarter.com/projects/ziea/ziea-one-the-first-ai-powered-planning-and-focus-tool',
    image:'/ziea-one.jpg'
  },

  {
    title:'energieleser - endlich alle Zähler im Blick',
    category:'Technology',
    year:2026,
    funding:'€32,464',
    goal:'€10,000',
    backers:'391',
    url:'https://www.kickstarter.com/projects/energieleser/energieleser-endlich-alle-zahler-im-blick',
    image:'/energieleser.jpg'
  },

  {
    title:'VoxMeta H1 Pro: Metrology-Grade 3D Scanner',
    category:'Technology',
    year:2026,
    funding:'HK$1,416,498',
    goal:'HK$117,640',
    backers:'91',
    url:'https://www.kickstarter.com/projects/voxmeta/h1-pro-3d-scanner',
    image:'/voxmeta-h1-pro.jpg'
  },

  {
    title:'Jetro: Keep Freshness Longer',
    category:'Technology',
    year:2026,
    funding:'HK$698,121',
    goal:'HK$39,000',
    backers:'1,317',
    url:'https://www.kickstarter.com/projects/ionizo/jetro-keep-freshness-longer/',
    image:'/jetro.jpg'
  },
];

export const categories = ['Art','Comics','Design','Fashion','Film & Video','Games','Publishing','Technology'] as const;
