import type { VerticalGuide } from "../vertical-guide-types";

export const insuranceGuides: Record<string, VerticalGuide> = {
  "auto-insurance": {
    slug: "auto-insurance",
    lede:
      "Drivers call when a renewal jumps, a policy lapses, or they need state-minimum vs full coverage spelled out before they buy. You can take that demand as CPL, cost per call, live or warm transfers, exclusive or shared, or as qualified traffic into your own quote funnel. RidgeRise runs auto from in-house media buying plus a vetted publisher network, with filters and quality monitoring matched to how your intake team actually works.",
    sections: [
      {
        heading: "Who's on the line, and why they called today",
        paragraphs: [
          "Most auto callers are not browsing for fun. A renewal landed 18% higher than last year, a teen got added to the household, a car was financed and the lender wants collision, or the current carrier non-renewed after a ticket. That event is why the phone rang. Your agents hear it in the first thirty seconds if you let the caller talk. If you don't, you get a generic 'I want a quote' and a burned minute.",
          "A second cluster is the lapse and SR-22 crowd. Someone let coverage drop, got pulled over, or needs an SR-22 filing to keep a license. These callers are in a hurry and they often want the cheapest legal policy that satisfies the state. That is a different conversation than a household shopping full coverage on two vehicles. Mixing them in one queue without a coverage-type flag wastes licensed time on both sides.",
          "Then you have the comparison shoppers. Auto is one of the few insurance products people re-shop on a schedule, not just at a life event. They had a quote last month. They will have another next month. Intent is real, but it is not exclusive to you unless you buy exclusive transfers. Shared auto calls in this group get shopped across two or three agencies in the same afternoon. Plan for that, or don't buy shared.",
          "Age and household makeup change the pitch. A 24-year-old with one speeding ticket is not the same file as a 58-year-old with a clean record and a paid-off sedan. Your underwriting appetite already knows this. The campaign should know it before the call hits your board. If you take every age band because the media looks cheap, your close rate will tell you later, after you've paid for the talk time.",
          "RidgeRise is set up for buyers who can describe that caller in operational language: state, coverage intent, age band, and whether SR-22 is in or out. We generate demand with our own media buying and we add volume through vetted publishers. You do not get a mystery mix. You get a brief, filters, and a queue that matches what your people can actually rate.",
        ],
      },
      {
        heading: "Auto shoppers do not shop once",
        paragraphs: [
          "Auto has a habit other P&C lines do not. People keep shopping. Rate filings hit in waves. A carrier takes a 12-point increase in Florida or Michigan and half the book starts collecting quotes. Those drivers are not 'new to insurance.' They already have a policy. They want a number they can hold next to the bill sitting on the kitchen counter. Your agent is competing with a screenshot, not with ignorance.",
          "That continuous shopping behavior is why duration rules and exclusivity matter more here than a pretty landing page. A shared call that lasts 90 seconds might be a real shopper who already gave their VIN to two other agencies. An exclusive transfer that lasts four minutes might still not bind if your rate is not competitive in that ZIP. Paying for the call does not mean you sold a policy. Anyone who tells you otherwise is selling you a story.",
          "Rate-hike switching also means your creative and your IVR should not pretend this is someone's first auto policy. Ask if they currently have coverage. Ask if they are shopping a renewal. Those two answers change how your agent opens. They also change how you score the source. A publisher sending first-time uninsured callers into a preferred-carrier campaign will look fine on connect rate and terrible on bind.",
          "Because shoppers return, you will see the same phone numbers across weeks if you watch recordings. That is not automatically fraud. It is auto. Decide in the brief whether a repeat caller in a 30-day window is billable, a courtesy connect, or a reject. Write it down. Do not argue it after the invoice. Campaign-specific rules beat tribal memory every time.",
        ],
      },
      {
        heading: "State-minimum vs full coverage is a routing problem",
        paragraphs: [
          "Coverage intent is the auto filter buyers skip, then regret. A caller who wants state-minimum liability so they can register a 2009 Civic is not a full-coverage household. Your captives and preferred carriers may not want that risk. Independents with nonstandard markets might. If both buyer types sit on the same campaign without a split, someone is paying for conversations they cannot write.",
          "Full coverage callers usually have a loan or a car they cannot replace out of pocket. They will sit longer on the phone because the quote has more moving parts: deductibles, rental, roadside, glass. State-minimum callers want a price and a binder. Different talk time, different close motion, different agent skill. Put them through the same IVR prompt and you will hear agents rushing the wrong file.",
          "State minimums themselves are not one product. California, Texas, and New York do not mean the same liability limits, and some states treat uninsured motorist as a fight you have on every call. Your geo filter is not just 'we write in these states.' It is 'we write this coverage shape in these states.' If you only want full coverage in the Southeast, say that. Do not make us guess from a list of 12 state abbreviations.",
          "SR-22 sits next to the cheap-policy path more often than buyers admit. Some of your markets write it. Some bounce it. If SR-22 is a reject, the IVR or the live qualifier should kill the transfer before your licensed agent picks up. If SR-22 is a product you want, it should be a tagged queue, not a surprise at minute two. Surprise SR-22 on a preferred campaign is how agents start dumping calls.",
        ],
      },
      {
        heading: "Age band, SR-22, and the filters your floor actually needs",
        paragraphs: [
          "Age band is not a vanity demographic. It is a rating and a licensing-hours problem. Younger drivers quote higher, take longer, and bind less often on preferred paper. Older drivers can be easier files until you hit the other edge where some carriers get picky. Your intake manager already knows which ages your people close. Put those bands in the campaign. Leave the rest off unless you have a nonstandard desk ready.",
          "Geo is the other non-negotiable. Auto rates are ZIP-sensitive. A source that looks fine at the state level can be a dump of high-loss ZIP codes your carrier appointment will not touch. Filter at the state level at minimum. Tighter if your appointments are county-real. Hours should match when your licensed agents are on the board, not when media is cheapest. Overnight auto traffic into a voicemail is how you pay for abandoned connects.",
          "Exclusivity is a capacity decision. Exclusive inbound calls and exclusive live transfers cost more and protect your agents from a three-way shop. Shared volume is how you test a new state or a new coverage split without committing the whole budget. If your close process needs a 20-minute needs analysis, shared will hurt you. If you are a high-velocity quote shop, shared can fill the board. Be honest about which you are.",
          "Duration and concurrency sit together. Auto shoppers hang up when hold time stretches. Cap concurrent calls to what your team can answer live. Set a duration threshold that matches a real conversation, not a two-second IVR dump. Buffer time between transfers matters when the same agent is wrapping a quote. None of these numbers are universal. They belong in your brief, then in the routing rules, then in the weekly quality pass.",
          "Live transfers and warm transfers are not the same product. A live transfer hits your agent with the caller on the line after qualification. A warm transfer includes a short intro so your person is not cold-starting. Pick one. Document what the qualifier is allowed to promise. 'Someone will save you money' is how you create angry duration disputes. 'An agent will quote based on your driving record and ZIP' is slower copy and cleaner calls.",
        ],
      },
      {
        heading: "CPL, cost per call, or traffic into your quote path",
        paragraphs: [
          "Cost per call and pay per call fit auto when your agents are staffed to take inbound and your rating engine is fast. You pay when a qualified call connects under the rules you set: geo, hours, duration, exclusivity. That model hurts if your phones are thin after 5 p.m. or if your quote flow takes eight minutes before a premium appears. Do not buy calls into a process that cannot catch them.",
          "CPL is the better fit when you want form data first: name, phone, ZIP, vehicles, current carrier. Your team works a lead queue instead of a live board. Auto CPL still needs TCPA-aware consent language set per campaign, and it still needs a speed-to-lead rule you will actually keep. A four-hour-old auto lead is a shopper who already called two other agencies. The form was real. The window closed.",
          "Qualified traffic is clicks or redirects into your own landing page or quote tool. You own the funnel, the consent capture, and the call or chat that happens after. Buy traffic when your page converts and you want to control the experience. Skip it if your quote path is a PDF and a hope. RidgeRise can run traffic alongside calls. We will not pretend a click is a sold policy.",
          "Plenty of auto buyers mix models. Exclusive transfers in their best states during business hours, CPL in expansion states, traffic into a branded quote flow for the rest. That mix only works if each path has its own qualification and its own quality bar. Dumping all three into one 'auto' bucket is how you lose the plot on cost per quoted file.",
          "Pricing talk belongs on a call, not in a blog paragraph with fake numbers. What a qualified auto call is worth depends on coverage type, exclusivity, duration, and how picky your appointments are. Bring your target cost per quoted item and your bind assumptions. We will tell you if the filters you want can support that. If they cannot, we will say so at /contact rather than stretch a campaign until it breaks.",
        ],
      },
      {
        heading: "What the IVR should ask before your agent picks up",
        paragraphs: [
          "Auto qualification is short or it does not happen. Callers will not sit through a nine-question survey to get a quote they think takes two minutes. You need the questions that prevent a wasted transfer: state, currently insured or not, vehicles roughly, coverage intent if you split minimum vs full, and SR-22 if that is a reject for you. Everything else is an agent skill, not an IVR job.",
          "IVR and live qualification are both valid. IVR is consistent and cheap. Live quals can salvage a confused caller and catch liars who mash 1 on every prompt. The tradeoff is cost and script drift. If you use live quals, record them and listen. Qualifiers who start selling coverage on the front end steal the close from your licensed agent and create expectation problems you will hear on the transfer.",
          "Do not let the qualifier quote a price. Auto shoppers will cling to that number. If your rated premium is higher, they feel baited, duration looks fine, and they still do not bind. The qualifier confirms they want an auto quote, they are in a writable state, and they meet your coverage and age rules. Then they transfer. That discipline is boring. It is also how you keep dispute rates sane.",
          "Language and consent belong in the same pass. Campaign-specific consent and TCPA-aware processes are part of setup, not a sticker you slap on after launch. We do not sell a legal guarantee. Your counsel sets what you can accept. We implement the call path, the disclosure timing, and the recording rules you require for that campaign. If a publisher cannot run that path, they do not run on your campaign.",
        ],
      },
      {
        heading: "Recordings, source cutoffs, and how auto disputes get handled",
        paragraphs: [
          "Quality on auto is a listening job. Recordings (where the campaign allows them) show you whether the caller asked for a quote, whether they were in-geo, whether they were already mid-quote with someone else, and whether your agent had a fair shot. Spot-check by source, not just by day. One publisher can look clean on connect rate while dumping uninsured callers into a preferred queue.",
          "Source-level cutoffs are how hybrid supply stays usable. RidgeRise buys media in-house and takes publisher traffic that passes vetting. Both get watched. If a source starts sending wrong coverage intent, wrong age band, or dead air after the transfer, that source gets throttled or cut. We do not wait for a monthly autopsy if the recordings already show the pattern.",
          "Disputes need a rulebook written before the first invoice. What is a qualified auto call for you? In-state, during hours, minimum duration, correct coverage flag, not a wrong number, not a soliciting vendor, not a duplicate inside your window. Put the window in writing. Auto duplicates are common because shoppers call again. If you want a 72-hour exclusive on the phone number, say so. If you do not, do not try to claw back a second call from a genuine shopper.",
          "Chargeback theater helps no one. Buyers who dispute every sub-four-minute call without listening will get a reputation inside the campaign ops chat, and publishers will sandbag them. Buyers who never dispute obvious junk train sources to keep sending it. Listen to the tape. Keep the ones that match the brief. Kill the ones that do not. That is the whole quality program, minus the slogans.",
          "None of this makes every call a sale. Auto bind rates move with your price, your appointments, your agent's speed, and whether the shopper already has three quotes. Paying for a qualified inbound call means you paid for a real conversation under your rules. The policy is still your team's job. Keep those two ledgers separate or you will hate this channel by week three.",
        ],
      },
      {
        heading: "When auto volume actually moves",
        paragraphs: [
          "Auto does not have one clean season like health open enrollment. It has rate cycles, registration months, and weather. Some states see shopping spikes when filings land. Tax refund weeks put people in cars, which puts people on quote calls. Moving season drags auto along with renters and homeowners. None of that is a reason to ignore your hour and concurrency caps. Seasonal volume into an understaffed floor is just expensive hold music.",
          "Storms and hail create a weird auto pattern. People call about comprehensive claims, then shop because they think their rate will jump. That traffic can be legitimate and still be a bad fit if your agents are trained for new-business quotes and not claim-adjacent conversations. If you do not want catastrophe ZIP codes in a given week, geo-pause them. Do not complain after the fact that the callers 'sounded stressed.'",
          "January and late summer often feel busy because households reshuffle cars and drivers. College-age kids going back, new commutes, new vehicles. Age-band filters earn their keep in those weeks. If you opened 18-25 to chase volume, you will feel it. If you kept the band tight, you will wonder why the other agencies are complaining. That is the filter doing the job.",
          "Plan staffing against your real answer-rate, not against a media calendar. Auto media can deliver on a Saturday. Your licensed desk might not. If weekend is a yes, staff it and buy it. If weekend is a voicemail with a callback promise, either price that as CPL or turn the campaign off. Cost-per-call into unanswered phones is a self-inflicted wound.",
        ],
      },
      {
        heading: "Carriers, captives, independents: who this channel is for",
        paragraphs: [
          "Captive agency owners buy auto calls when their book is not feeding enough inbound and their carrier still wants auto production. They usually need exclusive or tightly capped shared, because one household talking to two captives in the same town is a mess. Their filters tend to be stricter on credit-adjacent signals and coverage type. That is fine. Strict is cheaper than a floor of agents who stop trusting the queue.",
          "Independent agencies and clusters buy auto when they have markets for both preferred and nonstandard. They can take a wider age band and some SR-22 if they staff it. The mistake independents make is buying one blended campaign and hoping producers sort it. Producers will not sort it. They will cherry-pick easy files and dump the rest. Split the campaigns or split the queues.",
          "Call centers and remote licensed teams buy auto for hours coverage and speed. They need concurrency caps, clean warm transfers, and a rating stack that does not freeze. If your center's average handle time is long, exclusive with a higher duration threshold usually beats cheap shared. If you are a quote factory, you can take more volume as long as the IVR keeps coverage intent honest.",
          "Direct-to-consumer carrier programs sometimes want qualified traffic or CPL into a branded funnel instead of live transfers to a local agent. That is a different brief: more control on the page, different consent capture, different quality definition (a started quote vs a live conversation). Say which business you are. RidgeRise will not force a transfer model on a buyer who should be buying clicks.",
        ],
      },
      {
        heading: "Publisher traffic is part of the mix on purpose",
        paragraphs: [
          "About twenty percent of this page is for the supply side because that is how the channel works. RidgeRise is a demand aggregator, not a single-source media shop pretending every call is 'proprietary.' We buy auto ourselves and we take search, social, and click-to-call paths from publishers who can show rate-comparison or quote intent. Both streams sit behind the same qualification and the same source monitoring.",
          "If you are a publisher reading this, auto is picky about coverage flags and repeat shoppers. Read /publishers for how partner campaigns run. If you are a buyer, the point is simpler: hybrid supply lets us fill states your own brand search cannot fill, without turning your queue into an unvetted affiliate free-for-all. Vetted means we can cut a source. It does not mean every publisher call will bind.",
          "Buyers who insist on 'in-house only' often under-fill their licensed hours. Buyers who insist on 'all the volume' without source-level cutoffs drown. The workable middle is a named mix, watched weekly, with auto-specific rejects (SR-22, wrong coverage, out of age band) applied to every source the same way. That is the job. The rest is decoration.",
        ],
      },
      {
        heading: "Mistakes that waste auto spend",
        paragraphs: [
          "Buying all ages because the media is cheap. You will meet every 19-year-old with a lapse and a story. If your markets hate that file, you did not get a deal. You bought a training program for your newest agent. Set the age band to what your appointments will write, then expand on purpose with a separate campaign and a separate cost assumption.",
          "Skipping the state-minimum vs full coverage split. This is the auto-specific version of 'we'll figure it out on the phone.' You will not. Your preferred agents will get hostile. Your nonstandard desk will starve. Two campaigns cost more to manage and save more in wasted talk time than any blended queue I have watched.",
          "Treating SR-22 as a footnote. Either it is a product or it is a reject. Hidden SR-22 on a preferred auto campaign produces the angriest recordings in the vertical. Put it in the IVR. Put it in the dispute rules. Do not discover it in a weekly wrap where everyone is already mad.",
          "Staffing for Monday-Friday 9-5 while buying media that peaks at night. Auto shoppers call after work and on weekends. If your licenses go home at 5, your campaign should too, or you should buy CPL for the overflow. Cost per call does not pause because your roster did.",
          "Judging the channel by bind rate in week one without looking at quote rate, hold time, and source mix. Auto shoppers take multiple quotes. Your close might land on call three from a different number. If you only count binds against RidgeRise-tagged calls, you will under-count and over-cut. Track quoted files and recorded qualification, then argue about binds with your own sales process in the room.",
        ],
      },
      {
        heading: "How to brief an auto campaign",
        paragraphs: [
          "Start with states, coverage appetite, age bands, and SR-22 yes or no. Add hours, time zone, and how many concurrent calls your board can take without hold. Say exclusive or shared, live transfer or warm transfer or inbound DID, and the duration that counts as billable. If you want CPL or traffic instead of or besides calls, say which funnel they hit and what a qualified lead looks like on that path.",
          "Write the IVR or live-qual questions in the order a shopper will tolerate. Include the reject list: commercial vehicles if you do not write them, motorcycles if that is a different desk, out-of-state titles, no-license callers. Auto briefs that skip vehicle type get surprised by box trucks. Put the surprise in writing now.",
          "Tell us how you handle duplicates, recordings, and disputes. Name the person on your side who will actually listen to tape, not the person who forwards emails. Quality dies when the only reviewer is a producer who is also trying to hit a quota. RidgeRise can monitor sources. We cannot replace your internal coaching.",
          "If you also write homeowners, say whether you want a bundle ask on the auto call. Keep it light. Auto shoppers did not call to recast their dwelling policy. A single qualifying question is plenty. Deeper property conversations belong on /verticals/home-insurance, not jammed into an auto transfer. Related demand is useful. Confused demand is not.",
          "When the brief is real, come through /buyers or /contact and talk through filters before anyone turns media on. Bring what a qualified call looks like in your agency, not a wish for 'good leads.' We will match hybrid supply to that definition, keep TCPA-aware and campaign-specific consent in the setup, and cut sources that drift. Discuss a campaign when you can describe the caller. That is the whole ask.",
        ],
      },
    ],
  },
  "health-insurance": {
    slug: "health-insurance",
    lede:
      "Health demand spikes in open enrollment and Special Enrollment Periods, then keeps moving year-round for short-term and individual products your licensed agents can actually place. Buy CPL or cost per call with product type, state licensing, and hour filters so the queue matches appointments, not just media. Volume comes from RidgeRise in-house buying plus vetted publishers, with quality monitoring and campaign-specific consent, not a legal guarantee.",
    sections: [
      {
        heading: "OEP callers and SEP callers are not the same person",
        paragraphs: [
          "Open Enrollment Period traffic is a calendar event with a crowd behind it. People who ignored coverage all year suddenly need a plan by a deadline. They are price-sensitive, confused about subsidies, and often calling from a comparison page with three tabs open. Your licensed agents can write a lot of that if they are staffed for the crush and licensed in the states that are ringing. If they are not, OEP is how you buy hold time.",
          "Special Enrollment Period callers have a reason: job loss, move, birth, marriage, loss of coverage. The reason is the product. If your qualification does not confirm a qualifying life event when the calendar is outside OEP, you will transfer people who cannot enroll in an ACA plan right now. They will still talk. They will not be a policy. That distinction is health-specific. Auto does not work this way. Life does not work this way.",
          "A third group shows up every month: people who want short-term, limited-benefit, or other non-ACA products because they missed OEP, they do not qualify for a SEP, or they do not want a marketplace plan. Those callers can be excellent for agencies appointed to write that paper. They are poison if your only appointment is ACA and your agents are trained on healthcare.gov workflows. Product split is the campaign.",
          "Do not brief 'health insurance' as one pile. Tell us which window you are buying for, which products you can bind, and what happens to a caller who is in the wrong window. Overflow to a short-term desk is a strategy. Dumping them on an ACA-only agent is how recordings fill with apologies. RidgeRise can route by product and by calendar rules. We cannot invent a qualifying event the caller does not have.",
        ],
      },
      {
        heading: "ACA vs short-term is a license and a talk track",
        paragraphs: [
          "ACA marketplace and off-marketplace individual plans need licensed health agents who can talk subsidies, networks, and enrollment windows without improvising. Short-term and excepted-benefit products need different scripts, different suitability, and often different carrier appointments. If your floor mixes both without a product prompt, you get ACA agents selling short-term because it is faster, or short-term agents pretending a caller can enroll in a metal-level plan in March. Both are how you get complaints.",
          "Buyers sometimes want 'any health call' because volume looks good in a deck. Then licensing catches up. An agent licensed in Texas cannot take a Florida ACA transfer and magically be appointed. State is not a preference in this vertical. It is a legal constraint on who can even continue the conversation. Filter geo to states where you have active licenses and appointments. Expand state by state when the licenses are real, not when media is on sale.",
          "Ancillary products (dental, vision, hospital indemnity) ride along on a lot of health calls. Decide if your agents are allowed to pivot. A hard pivot into ancillary on every ACA shopper will show up in recordings as pressure. A clean offer after the primary need is handled can be real production. Put the rule in the brief so quality review is not a taste argument later.",
          "Medicare Advantage is a different vertical with CMS marketing rules and AEP/OEP windows of its own. If your health campaign starts attracting 65+ callers who want Part C, that is not a bonus. That is misrouted demand. Send those conversations to a MA-licensed desk or reject them. See /verticals/medicare-advantage for that product. Do not hide MA inside 'health' to chase winter volume.",
        ],
      },
      {
        heading: "Licensing is a filter, not a footnote",
        paragraphs: [
          "Health is the vertical where a beautiful call still cannot be worked. The caller is in-state for their address and out-of-state for your license. Or your agent is licensed but not appointed with the carrier that fits the subsidy situation. Or the call arrives outside the hours your resident license rules and your agency's call-recording policy allow. These are not quality disputes in the media sense. They are operations. Build them into routing or pay for dead air with a license attached.",
          "Resident vs non-resident licenses, line of authority, and carrier appointments should sit in the campaign setup the way auto sits with coverage type. If you only have health licenses in five states, your geo list is five states. Publishers and in-house media will still generate demand elsewhere. That demand should never hit your board. It should hit a different buyer or not be bought against your campaign at all.",
          "Call centers that roster licensed agents across many states still need a skills-based route, not a round-robin. A Georgia-licensed agent taking a New York ACA call is a compliance incident waiting for a recording review. Concurrency caps should be per licensed pod, not per building. If your NY pod can take three simultaneous transfers, the campaign cap for NY is three. National caps hide local overload.",
          "We run TCPA-aware processes and campaign-specific consent. Your compliance team still owns what 'licensed conversation' means for you. RidgeRise will not sell a legal guarantee on the call path. Anyone who does is selling comfort. We implement the disclosures, hours, and recording rules you require, and we cut sources that skip them. That is the honest version.",
        ],
      },
      {
        heading: "CPL, pay per call, and traffic when the calendar is the product",
        paragraphs: [
          "Cost per call during OEP is how a staffed ACA floor captures deadline demand. You pay for qualified inbound calls and live or warm transfers that meet state, product, and duration rules. The model assumes someone licensed is there. OEP nights and weekends are real. If you buy those hours, staff those hours. A Saturday ACA transfer into a voicemail is a shopper who enrolls with someone else before Monday.",
          "CPL fits year-round SEP and short-term better for some teams, because the caller can be worked in sequence instead of live. Health leads go stale when the qualifying event has a clock on it. Job-loss SEPs do not wait for your Tuesday dialer. If you buy health CPL, your speed-to-lead is part of qualification in practice, even if it is not part of the vendor bill. Budget the desk accordingly.",
          "Qualified traffic into your own enrollment funnel makes sense when you have a page that captures consent the way your counsel wants and a call-back or chat team that can finish the application. Traffic is not a way to skip licensing. The person who completes the application still needs the right authority. Buy traffic when you trust your funnel. Buy transfers when you trust your live agents more than your page.",
          "Mixing models across the year is normal in health. Heavier pay per call in OEP, more CPL and short-term transfers in the off months, traffic into an always-on education page that is not pretending every visitor can enroll tomorrow. Keep the product flags separate on reporting. If you blend ACA OEP calls with July short-term CPL into one CPA number, you will make a budget decision on noise.",
        ],
      },
      {
        heading: "Hours, geo, exclusivity, duration, concurrency",
        paragraphs: [
          "Hours in health follow the enrollment clock and your licensed roster, not the cheapest CPC on a media platform. OEP evenings convert because people are off work and staring at a deadline. SEP calls can look more like business hours if they are coming from job-loss or HR-adjacent content. Set hours per product if you have to. One national on/off switch is how you miss Texas and overserve a pod that already went home.",
          "Geo is license-shaped. It is also carrier-shaped. Some states are brutal on short-term. Some networks are unusable in rural ZIPs even when the license is valid. If your agents keep declining files in a county, pause the county. Paying for a qualified call that your team immediately cannot place is a self-own. Bring those no-go ZIPs in the brief.",
          "Exclusivity during OEP is a sanity choice. Shared health calls in November get shopped. The caller has five ads in the same Facebook session. Exclusive live transfers cost more and keep your agent as the only licensed voice on that attempt. Shared can still work for short-term factories with fast pitches. Match exclusivity to how long your enrollment conversation actually takes.",
          "Duration thresholds should reflect a real licensed conversation, not an IVR hop. Health calls run longer than auto quotes when subsidies and networks come up. If you set duration too short, you will pay for connects that never got to income questions. If you set it like a life-insurance needs analysis, you will dispute honest calls that ended because the person needed to find a pay stub. Pick a number that matches your script's first meaningful checkpoint.",
          "Concurrency is how you avoid the OEP meltdown. Cap transfers to what each licensed pod can take live. Use overflow rules you have actually tested: hold with a time limit, callback CPL, or a second product desk. Uncapped OEP media into 12 agents is a story every health buyer already knows. Tell us the cap. We will run to the cap. We will not 'find a way' to dump 40 simultaneous calls onto a 12-person board.",
        ],
      },
      {
        heading: "Qualification and IVR when the calendar decides eligibility",
        paragraphs: [
          "Health IVR has a job auto IVR does not: figure out which universe the caller belongs in. Are they in OEP? Do they claim a qualifying life event? Are they 65+ and actually a Medicare shopper? Do they want short-term on purpose? Get those branches right and your agents start on the correct paper. Get them wrong and your best ACA closer spends four minutes explaining why they cannot enroll someone in May.",
          "Keep the prompts few. Health callers are already anxious. A long tree feels like a government site. Confirm state, age band if you split MA away, enrollment window or SEP reason, and product path. Income and household size can wait for the licensed agent if that is where your script puts them. Front-loading subsidy math in an IVR creates abandoned calls and invented numbers.",
          "Live qualification helps when callers do not know what a SEP is. A good qualifier translates 'I lost my job last week' into a path. A bad qualifier coaches the caller into claiming a qualifying event they do not have. That coached call may meet duration and still be a problem on the recording. We review for that pattern. Your dispute rules should too. Campaign-specific consent includes not manufacturing eligibility.",
          "Language on the front end should not promise a $0 plan, a specific subsidy, or that any condition is covered. Health is where overpromise becomes a complaint. The qualifier can say a licensed agent will review options they may qualify for. That sentence is slower. It survives a recording review. 'We'll get you covered today' does not, especially off-calendar.",
        ],
      },
      {
        heading: "Quality monitoring when consent and product rules collide",
        paragraphs: [
          "Listen for product mismatch first. An ACA-only campaign should not be full of short-term pitches. A short-term campaign should not be full of people asking for marketplace subsidies. Source-level cutoffs belong on those patterns, not only on mute calls and wrong numbers. Hybrid supply (our media plus publishers) gets the same listen. Comparison and education traffic can be clean. It can also attract Medicare or Medicaid callers your desk does not handle.",
          "Recordings, where the campaign allows them, are how you catch coaching, missed disclosures, and agents who skip suitability. Health quality is not only 'was the caller real.' It is 'did this conversation stay inside the product and the consent you bought.' We will cut a publisher that cannot keep consent language stable. We will also flag internal agent behavior we hear, because it affects whether you want to keep buying the path.",
          "Disputes in health often argue about SEP validity. The caller said they moved. The agent decided they did not. That is not automatically an invalid media call. If the qualifier asked the SEP question in good faith and the caller answered yes, you got a qualified connect under a survey definition. Your enrollment rules can still reject the application. Split those concepts or every declined app becomes a chargeback war.",
          "TCPA-aware setup, recording disclosure, and hours rules are campaign-specific. They are not a warranty or a legal guarantee. Your counsel, your E&O, and your carrier contracts still govern. What RidgeRise does is operational: implement the path you require, monitor sources against it, and remove supply that drifts. Talk through that bar at /contact before OEP, not during it.",
        ],
      },
      {
        heading: "Seasonality you can staff for",
        paragraphs: [
          "OEP is the obvious peak. Applications cluster toward the deadline. Your worst staffing mistake is hiring for average November instead of the last two weeks. Concurrency caps and overflow CPL should be designed for the deadline, then relaxed. Media will keep sending. Your licenses will not clone themselves.",
          "SEP volume is lumpy. Layoffs, hurricane displacements, and Medicaid redeterminations create waves that do not respect your Q4 plan. You cannot forecast every wave. You can keep a year-round health campaign with tighter hours and a SEP-reason prompt, then loosen filters when a wave is real. Turning the whole vertical off in February is how you miss those waves and then panic-buy junk in March.",
          "Short-term demand fills the trough for agencies that write it. It is not a substitute for ACA production and it should not be forecast as if it were. Separate the P&L. Buyers who use short-term to 'replace OEP revenue' start stretching suitability. Recordings will show it. Carriers will notice. Keep the product honest even when the calendar is quiet.",
          "Summer health traffic can look cheap and still be wrong-window ACA shoppers. If your IVR does not branch, your agents will spend the season educating people about January. Education is not a qualified enrollment conversation unless you defined it that way in the brief. Most buyers should not define it that way.",
        ],
      },
      {
        heading: "Who buys health calls",
        paragraphs: [
          "Licensed health agencies with ACA appointments buy OEP transfers and SEP CPL. They need state filters that match licenses, hours that match enrollment behavior, and a hard wall against MA-only callers unless they also run that desk. They usually want exclusive or low-share during the deadline weeks.",
          "Call centers with nested licensed agents buy for hours coverage across states. They live and die on skills-based routing and concurrency. A center that treats health like a sales contest without product branches will generate duration and still fail carrier audits. If that is your culture, this vertical will hurt.",
          "IMOs and FGAs that sit on short-term and ancillary paper buy year-round calls with a different qual. They should not be silently fed ACA-intent traffic. The caller who wants a subsidy is not a short-term lead. Misrouting here is how this industry gets its reputation. Do not do it on a RidgeRise campaign. We will not play along with a brief that pretends those callers are interchangeable.",
          "If you are still deciding between health and Medicare Advantage, pick a lane per campaign. Dual-licensed shops can run both. They still need two briefs, two consent treatments, and two quality scorecards. Mixing them because 'it's all health' is how CMS-shaped creative leaks into an ACA path and vice versa.",
        ],
      },
      {
        heading: "Publishers, comparison traffic, and extra scrutiny",
        paragraphs: [
          "Health is where publisher supply gets the most questions, and that is fair. Comparison sites, education content, and SEP-aware social can produce real enrollment conversations. They can also produce Medicaid seekers, MA shoppers, and people who wanted a doctor appointment, not a plan. Vetting and source cutoffs are not optional here. They are the product.",
          "RidgeRise still uses a hybrid model: we buy and we take vetted partners. The twenty percent publisher note on this site is not a disclaimer at the bottom. It is how volume exists in fifty states during a six-week OEP. In-house only rarely fills a national licensed roster. Unvetted affiliate everything fills it with the wrong product. The middle is watched supply with the same IVR and the same dispute rules.",
          "Publishers should read /publishers for partner standards. Buyers should insist that consent language is campaign-specific and that we can name which sources are on their campaign. You do not need our internal media plan. You do need to know we will cut a source without a six-week debate when recordings go sideways.",
        ],
      },
      {
        heading: "Health-specific ways campaigns go wrong",
        paragraphs: [
          "Buying ACA calls in May with no SEP prompt. You will pay for people who cannot enroll, and your agents will start dreading the queue. Either add the qualifying-event question or buy short-term and say so.",
          "Ignoring licenses while expanding geo because 'demand is there.' Demand is always there. Authority is not. Out-of-state health transfers are not a gray area you can average out in CPA.",
          "Letting qualifiers promise $0 premiums or 'guaranteed acceptance' on ACA paths. The recording becomes your problem even if the media was clean. Script the front end like someone from compliance is in the room, because on a dispute, they will be.",
          "Staffing OEP like a normal month. Health is not auto. The calendar is the campaign. If you cannot surge licensed seats, cap concurrency early and add CPL overflow. Do not discover the cap when abandon rate is already ugly.",
          "Folding Medicare Advantage into health to chase age 64-65 callers without CMS-ready creative and MA licenses on the line. That is a different vertical with different rules. Keep it on /verticals/medicare-advantage or keep it off the campaign.",
        ],
      },
      {
        heading: "How to brief a health campaign",
        paragraphs: [
          "List states with active health licenses and appointments, not states you wish you had. Name products: ACA, short-term, ancillary, or a defined mix with routing rules. State whether you are buying OEP, SEP, year-round off-calendar, or a combination with calendar logic in the IVR. Add hours per time zone and the concurrent licensed seats per state pod.",
          "Define a qualified call in enrollment language. In-window or valid SEP reason if ACA, correct age band, not seeking MA unless routed there, not Medicaid-only if you cannot help, minimum duration, during hours, exclusive or shared. Write the reject list: already enrolled and just shopping extra dental, group-coverage questions your agents do not handle, callers who want to argue a medical bill.",
          "Give us the consent and recording requirements your counsel signed off on. Campaign-specific means we implement yours, not a generic health script from another buyer. If you need different language for short-term vs ACA, that is two paths. Say so now.",
          "Name the quality owner who will listen during OEP, not after. Health campaigns that wait until January to review November tape are doing archaeology. Weekly source cutoffs during the window save the rest of the window.",
          "Bring the brief to /buyers or /contact. Tell us what a qualified call looks like for your licensed team. We will line up in-house media and vetted publishers against that definition, keep TCPA-aware processes in the setup, and refuse to treat every connect as a bound policy. Discuss a campaign when your calendar, licenses, and product split are on one page. That is enough to start.",
        ],
      },
    ],
  },
  "life-insurance": {
    slug: "life-insurance",
    lede:
      "Life callers usually want face amount, term length, and underwriting path explained before they will let an agent run the case. Match campaigns to term vs permanent, age, and exclusive vs shared so your people are not fighting the same prospect on three lines. RidgeRise supplies that demand through in-house buying and vetted publishers on CPL, cost per call, live or warm transfers, and qualified traffic, with quality monitoring rather than fairy-tale close rates.",
    sections: [
      {
        heading: "Who calls about life coverage, and what they want explained",
        paragraphs: [
          "A lot of life shoppers are not ready to bind. They are ready to understand. New kid, new mortgage, a brother-in-law who died without coverage, a workplace enrollment packet that made them feel behind. They pick up the phone because the math on a banner ad did not answer term vs whole life, or because the instant-quote form spat out a number that felt fake. Your agent is an explainer first. Closers who skip the explain lose the recording and the case.",
          "Face amount is already in their head even when they get it wrong. They saw $250,000 or $1 million on a landing page. If your process starts at $50,000 final-expense-adjacent coverage, you will feel the mismatch in the first minute. That is why life and final expense are different verticals. Older callers shopping burial coverage belong on /verticals/final-expense. Working-age callers shopping income replacement belong here. Mixing them trains agents to downsell everyone.",
          "Some callers have been declined or rated up. They want a simplified-issue or guaranteed-issue path, or they want to argue with underwriting on the phone. Those are real conversations for shops that write that paper. They are a waste if your only appetite is clean term through a preferred carrier. Ask health-class and decline history in qualification if it changes routing. Do not wait for the agent to discover a recent decline after a four-minute needs analysis.",
          "Spouses on speakerphone are common. Life is a household decision more often than auto. Your duration rules should allow a slower conversation without treating silence as dead air. Two people thinking is not a bad call. A qualifier who rushes them off speaker to 'get a decision' creates buyer's remorse you will never see in the connect report.",
        ],
      },
      {
        heading: "Term vs permanent is the first routing decision",
        paragraphs: [
          "Term life is a price and a period. Twenty or thirty years, a face amount, a health class. Callers who want term usually have a mortgage or kids with a finish line. Permanent (whole life, UL, IUL depending on what you actually appoint) is a different talk: cash value, longer premium, illustrations that can go sideways if your agent sells a dream. If your floor is a term shop, do not buy 'life' as a blended product. You will inherit illustration calls your people cannot and should not run.",
          "Routing on product intent is life-specific. Auto routes on coverage limits. Health routes on calendar. Life routes on whether the person wants a term number or a permanent design. A single IVR prompt can do it: term, permanent, not sure. 'Not sure' should go to an agent who can educate without forcing IUL. If you do not have that agent, 'not sure' is a reject or a term-default with a soft permission to pivot, written down.",
          "IMOs love permanent production. Direct term shops hate surprise IUL pitches on their branded transfers because it shows up as pressure on the tape. If you allow a product pivot, define when. After needs analysis. After the term quote. Never in the qualifier. Qualifiers who start selling indexed products on the front end are how life campaigns get a reputation.",
          "Do not let media creative decide the product. A '$9.17 a month' term ad will send term intent. If you then run a permanent script, you created the objection. Match the page, the IVR, and the agent. RidgeRise can run separate campaigns for term and permanent. We would rather run two clean ones than one confused one that looks big in a weekly volume email.",
        ],
      },
      {
        heading: "Face amount and underwriting path before you pay for the minute",
        paragraphs: [
          "Face amount changes everything: which carriers, whether an exam is likely, how long the agent should stay on the line, whether the caller is a tire-kicker collecting numbers. A $100,000 term shop is a different file than $2 million with a brokerage underwriting path. If your appointments cap out, say the cap. Transfers above your max face are qualified in a consumer sense and useless to you. That is a filter, not a dispute after the fact.",
          "Underwriting path is the other life-only fork. Fully underwritten, accelerated, simplified issue, guaranteed issue. Callers who want 'no medical exam' are telling you the path. If you cannot offer SI or GI, those calls should not transfer. If you only want accelerated term on clean health, then tobacco, recent treatment, and decline history belong in the qual. Agents can still take a dirty case on purpose. They should not take it by accident.",
          "Age bands pair with path. A 32-year-old term shopper and a 62-year-old who thinks they want term are not the same underwriting conversation. Some of those 62-year-olds belong in final expense. Some belong in simplified whole life. If your life campaign's age band is 25-70 with no split, your agents will spend half the day re-qualifying. Split campaigns by age when the product changes. It is extra ops. It is cheaper than a blended queue.",
          "Height, weight, and meds do not belong in a six-question IVR. You will abandon good term shoppers. Put knock-out questions only: tobacco if it is a hard reject for a preferred-only desk, recent cancer if you do not write it, already has an agent of record if you refuse replacements. The rest is the licensed conversation you are paying for.",
        ],
      },
      {
        heading: "CPL vs cost per call vs traffic for life",
        paragraphs: [
          "Pay per call and live transfers fit life when your agents can run a needs conversation in real time and you have enough licensed seats. Life calls run longer than auto. If your duration threshold is copied from an auto campaign, you will underpay sources for real conversations or overpay for hangups, depending which way you copied. Set duration against the point in your script where you have a real application start or a scheduled exam, not against a competitor's auto number.",
          "CPL is common in life because many shops work a pipeline: quote, illustration, exam, delivery. A form lead with age, face amount, and product intent can be worth more than a rushed shared call. It can also be a data record that never answers the phone. Speed-to-lead still matters. Life shoppers cool off. They do not cool off as fast as auto shoppers staring at a same-week renewal, but a two-day-old lead is not 'warm' just because life feels consultative.",
          "Qualified traffic into your quote engine works when the engine asks for the right fields and your call-in or click-to-call is staffed. Life quote tools that hide the phone number and hope for a form will underperform on traffic you paid for. If you buy clicks, look at the page the click hits. RidgeRise can send traffic. We cannot fix a 12-field form that asks for Social Security before a conversation.",
          "Exclusive vs shared is sharper in life than buyers expect. Shared life calls get double-sold. The same household hears two IUL pitches by dinner. If your compliance team hates replacements and twisting, buy exclusive. If you are a high-velocity term center comfortable with shoppers, shared can fill the calendar. Do not buy shared to save money and then complain that the caller 'already has an appointment with someone else.' That is what shared means.",
        ],
      },
      {
        heading: "Geo, hours, exclusivity, duration, concurrency",
        paragraphs: [
          "Geo in life follows licenses and carrier appointments, same as health, with a twist: some products are not available in every state, and some illustrations are not approved the way your agent wants to run them. If a state is illustration-awkward for your permanent block, do not buy permanent calls there. Term might still be fine. Split it.",
          "Hours should match when people will sit for a 15-minute conversation. Life does less 'lunch break quote' than auto. Evenings and weekends can be better. If your agents leave at 5, you are missing the household decision-makers. Either staff later or buy CPL for after-hours and work it next morning. Cost-per-call into an empty life desk is a long voicemail and a wasted consent.",
          "Concurrency caps protect the consultative sale. Two life transfers holding while an agent finishes an illustration is how you get abandoned duration that looks like bad media. Cap to live-answer capacity. Use a short buffer after each transfer. Life agents need wrap time. Auto quote shops can fake their way through less wrap. Life cannot.",
          "Warm transfers help because the caller has already admitted they want to talk about coverage. A cold inbound DID with no qual puts more education on your licensed person. Both can work. Warm plus a product flag (term vs permanent) is the usual adult setup. Live transfer without a product flag is how permanent specialists get term shoppers and get loud about it.",
        ],
      },
      {
        heading: "IVR and qualification without killing intent",
        paragraphs: [
          "Life shoppers will tolerate a few questions. They will not tolerate a medical exam on the IVR. Ask age band, state, term vs permanent vs not sure, and a rough face amount bucket if you route on it. Tobacco as a yes/no is reasonable if it changes the desk. Asking for every medication is how you pay for abandoned calls and still get liars.",
          "The qualifier's job is routing, not closing. No illustrating. No 'this product builds wealth.' No quoting a monthly that came from a landing page. If the ad said $9, the qualifier should not repeat $9. Your agent can re-quote honestly. Repeating the teaser is how you buy duration and lose trust. We listen for that on recordings when the campaign includes them.",
          "Replace and existing-coverage questions belong here if your shop avoids twisting. 'Do you already have life insurance you plan to drop' is a compliance-shaped question, not a nicety. If the answer is yes and you do not do replacements, reject or route to a specialist. If you do replacements, your agent needs that flag before they start a new app.",
          "Consent is campaign-specific and TCPA-aware in setup. Life has a lot of callback sequences. Make sure the consent you buy covers the follow-up your pipeline actually does. We will not treat follow-up as a legal guarantee. Your counsel draws the line. We build the path to that line and drop publishers who improvise new language on their landing pages.",
        ],
      },
      {
        heading: "Recordings, source cutoffs, disputes",
        paragraphs: [
          "Life quality review should score product match, age fit, and whether the caller wanted a conversation about coverage, not whether they signed. A qualified life call can end with 'I need to talk to my spouse.' That can still be a good call. If you only count submitted apps as valid, you turned a media campaign into a sales-management problem and you will starve the queue.",
          "Source cutoffs on life often catch two tells: wrong age band leaking from senior media, and 'earn while you protect your family' adjacent traffic that is really IUL recruitment. If you write life insurance for consumers, recruitment calls are junk even when they last eight minutes. Cut those sources. Hybrid supply only works if we are allowed to cut. In-house media gets the same standard.",
          "Disputes should list the usual invalids (wrong number, out of geo, outside hours, under duration, soliciting) plus life-specific ones you actually care about: below minimum face, above maximum face, GI-intent on a fully underwritten campaign, final-expense intent on a term campaign. Write the face buckets in dollars. 'Serious buyers only' is not a rule. '$250,000 minimum term' is a rule.",
          "Do not dispute silence on a joint call, and do not dispute a caller who wants to think. Life is slower. If your agents cannot handle slower, buy a different vertical. Auto might fit them better. Life will feel like people are wasting their time when those people are behaving like life shoppers.",
        ],
      },
      {
        heading: "Seasonality, such as it is",
        paragraphs: [
          "Life does not have OEP. That is the point. Volume moves with tax season (people looking at dependents), homebuying (mortgage-related term), new babies, and employer open enrollment packets that mention voluntary life and make people check their gap. Those are waves, not a switch. Keep a baseline campaign running if your agents need a steady calendar.",
          "January gym-and-resolution energy sometimes shows up as 'I should get my life together' calls. Cute. Not a forecast. Staff for your real answer rate. Do not hire a class of new agents because December felt slow and January ads look cheap.",
          "Rate environments in adjacent products (mortgage, auto) can spill. A household shopping a refinance sometimes adds term. If you want that spill, we can talk about related funnels. If you do not, keep life creative about protection and family, not about 'bundle savings' language that pulls the wrong intent.",
          "Year-end agency pushes are your problem, not a consumer season. Forcing volume in December to hit a carrier contest usually means loosening filters. Recordings get worse. Keep the brief stable and take the contest hit. Or run a separate, honestly looser campaign with a different cost assumption. Do not silently loosen the good campaign.",
        ],
      },
      {
        heading: "Agencies, IMOs, FGAs, and term shops",
        paragraphs: [
          "Career agency managers buying for a local office usually want exclusive term or a defined permanent split, tight geo, and hours that match producers who still do evening appointments. Shared national life into a local book is how producers get territorial. Keep geo honest.",
          "IMOs and FGAs buy when they have downline that can take transfers or leads. The brief has to name who answers. A transfer to a general voicemail box for 'the team' is not a life campaign. It is a leak. Name the licensed agents, the product they write, and the overflow. If downline is uneven, buy CPL and distribute on purpose instead of spraying live calls.",
          "Term-only call centers want age, tobacco, face bucket, and speed. They should reject permanent intent or route it out. They should not experiment with IUL on term traffic because a trainer had a good week. That experiment shows up as complaints and as a quality problem we will treat as a source-plus-script issue.",
          "If you sit on final expense and life, run two campaigns. Different age, different face, different talk track, different duration. See /verticals/final-expense. Combining them because both say 'life' on a license is how you get a 34-year-old term shopper hearing a burial pitch. Funny on a recording. Expensive in real life.",
        ],
      },
      {
        heading: "Publisher supply, content funnels, and the 20 percent",
        paragraphs: [
          "Life supply often looks like content: protection articles, family-planning calculators, quote widgets. That can be clean intent. It can also be newsletter remnant that was 'in market' six months ago. Vetting matters. RidgeRise buys in-house and takes publishers who can show quote or protection intent, then watches age and product match on the tape.",
          "The publisher slice of this site exists because buyers need to know volume is hybrid. We are not going to pretend every life call is a brand search on your carrier's name. Partner traffic fills age bands and states your organic presence will not. It also needs more cutoff discipline than a single Google campaign. That is the trade. It is a trade we will make in the open.",
          "Publishers: /publishers is the application path. Buyers: you still buy through /buyers. Same quality bar. Different next step. Life payouts and our internal volumes are not something we invent in a guide. If you need a price conversation, that is /contact with a real brief.",
        ],
      },
      {
        heading: "Mistakes that are specific to life",
        paragraphs: [
          "Buying 'life' without a term vs permanent split. You will hear it in week one. Permanent agents will complain about tire-kickers who wanted a 20-year term number. Term agents will complain about illustration lectures. Split the intent.",
          "Copying auto duration and concurrency. Life conversations breathe. If you choke them, you will call the vertical dead when you actually called it too much like personal auto.",
          "Letting age drift into final expense without renaming the campaign. A 68-year-old asking about burial is not a failed term shopper. They are a different product. Route them or reject them. Do not let agents improvise a GI whole life sale on a term brief unless that pivot is written and licensed for.",
          "Qualifiers quoting the ad's monthly price. Face amount at a made-up class is not a quote. Repeating it makes your licensed agent the bad guy. Kill that habit on the front end.",
          "Scoring the channel only on placed policies in the first 14 days. Underwriting takes time. Accelerated term is faster. Fully underwritten is not. If you cut media before cases issue, you taught yourself the wrong lesson. Track submitted, pending, and issued as separate lines. Pay for qualified conversations on the media line.",
        ],
      },
      {
        heading: "How to brief a life campaign",
        paragraphs: [
          "Product: term, permanent, or split routing. Age bands. Min and max face amount. Underwriting paths you can actually run. Tobacco and major health knock-outs if they are hard rejects. States and licenses. Hours and concurrent licensed seats. Exclusive or shared. Live, warm, inbound, CPL, traffic, or a mix with separate rules.",
          "Write the IVR in consumer words. Term vs whole life vs not sure. Face buckets in numbers people recognize. No medical interrogation. Add replacement questions if compliance needs them. Add a final-expense reject or route if age demands it.",
          "Define qualified without requiring a signature. In-geo, in-hours, in-age, in-face, product match, duration, not a recruiter, not a vendor. Spell the duplicate window. Life shoppers call back after they talk to a spouse. Decide if that is billable.",
          "Name who listens to recordings and who owns pending-case reporting so you do not blame media for underwriting. Bring carrier appetite limits. If a carrier is closed for a class, that is a filter change, not a quality mystery.",
          "Send it through /buyers or /contact. Tell us what a qualified call looks like for your life desk. We will set TCPA-aware, campaign-specific consent, hybrid supply, and source cutoffs against that sheet. We will not promise every transfer becomes a placed policy. Discuss a campaign when term vs permanent is decided. Everything else is details we can work.",
        ],
      },
    ],
  },
  "home-insurance": {
    slug: "home-insurance",
    lede:
      "Homeowners call at purchase, at renewal, and after a non-renewal or a rate shock they did not see coming. Geo and property type decide whether your team can write the file: coastal, wildfire, and high-value homes are different campaigns than a standard HO-3 in a quiet ZIP. Buy CPL, cost per call, exclusive or shared transfers, or qualified traffic with those filters on, plus quality monitoring on a hybrid mix of in-house media and vetted publishers.",
    sections: [
      {
        heading: "Purchase, renewal, non-renewal, rate shock: four different calls",
        paragraphs: [
          "A purchase call is on a clock. Closing is in two weeks, the lender wants a binder, and the caller will talk to whoever can issue. Intent is high and patience is low. Your agents need markets that actually bind in that ZIP and occupancy type. A beautiful conversation about replacement cost that cannot issue before closing is not a win. It is a referral to a competitor with a faster market.",
          "Renewal shoppers still have a policy. They want a number against the one in the packet. Like auto, they may shop every year once they have been burned. Unlike auto, they cannot always move. Coastal and wildfire carriers are non-renewing and shrinking. The shopper might be looking for any admitted or surplus market that will take them. That is a different agent skill than remarketing a suburban HO-3.",
          "Non-renewal calls are urgent and often ugly. The carrier left the county, the roof age tripped a guideline, or a claims history ended the relationship. These callers will accept surplus lines if your shop writes them. They will not accept an agent who only has one preferred company and a shrug. If you do not write E&S or have a broker path, non-renewal intent should be a reject or a separate campaign. It will dominate recordings in hard markets if you leave it mixed.",
          "Rate shock without non-renewal is the fourth file: still offered a renewal, cannot stomach the premium, hunting for options. They have time, sometimes. They also have a property that just got more expensive to insure, which means your markets may price them the same. Paying for that call is still valid if your appetite includes it. Just do not brief the campaign as if every homeowner is a clean suburban bind.",
        ],
      },
      {
        heading: "Coastal, wildfire, and high-value are not 'homeowners'",
        paragraphs: [
          "Coastal property is a market problem before it is a media problem. Wind deductibles, flood vs wind, citizen residual markets, distance-to-coast questions. If your appointments stop at a county line, your geo filter must stop there too. Buying 'Florida homeowners' as one campaign is how you send barrier-island files to an agent who only writes inland HO-3. They will sound irritated on the tape. They should. The brief failed them.",
          "Wildfire ZIPs in the West have their own underwriting theater: brush scores, roof type, defensible space. Callers know they are in a problem ZIP because everyone in the neighborhood got the same letter. They need a shop that still has a market, not a script about shopping around for savings. If you cannot help those ZIPs, exclude them. Demand will still exist. It should hit a buyer who can place it.",
          "High-value and high-net-worth homes are a third desk. Scheduled articles, secondary locations, construction type, claims on a renovation. A standard homeowners call center will waste a $2 million dwelling shopper and also waste a $220,000 ranch shopper if you sit them in the same IVR. Face amount in life has an analog here: dwelling limit or estimated value. Route on it or cap it.",
          "These three (coast, fire, high-value) are the anti-clone facts for this vertical. Auto has SR-22 and continuous shopping. Health has OEP. Home has catastrophe geography and carrier flight. If your campaign copy could be swapped onto auto with a find-and-replace, you have not briefed homeowners. Start over with property type and peril.",
        ],
      },
      {
        heading: "Property type, occupancy, and bundles",
        paragraphs: [
          "HO-3 primary, HO-6 condo, HO-4 renters, DP-3 investment, mobile/manufactured, farm, vacant. Pick the ones you write. A renters caller on a homeowners campaign is the classic wasted connect. It is also preventable with one IVR question: own or rent, then property type. Publishers will still send mixed traffic. Qualification is how you keep it off your licensed homeowners producers.",
          "Occupancy and closing status change urgency. Owner-occupied vs landlord. Primary vs secondary. Already closed vs under contract. Lender-required by a date. Put the closing-date question on purchase-intent paths. Your agents should know if they have four days or four months. Duration rules might even differ. Purchase-rush calls can be shorter and still bind. Shopping calls run longer and bind less. That is not bad media. That is homeowners.",
          "Bundles with auto are real production for multi-line agencies and a trap for property-only shops. If you want the auto ask, make it a second question after the dwelling is handled, or run a separate auto path (see /verticals/auto-insurance). Leading a home call with auto discounts annoys people who just got non-renewed on the house. They called about the house.",
          "Roof age, claims in the last three to five years, and insurance score adjacent questions can be agent work. Knock-out on the IVR only if it is a hard no for every market you have. If you have one company that takes 20-year roofs and one that does not, do not reject at the front. Route. Rejects are for files nobody on your roster can touch.",
        ],
      },
      {
        heading: "CPL, pay per call, or traffic with an address attached",
        paragraphs: [
          "Cost per call works when your raters can work an address live. Homeowners quoting without an address is theater. Live and warm transfers should confirm ZIP and occupancy before the agent picks up so they are not starting from a blank ACORD in a catastrophe county. If your rating stack is slow, you will hate pay per call. Fix the stack or buy CPL.",
          "CPL with a physical address, occupancy, and property type is often the better homeowners product for appointment-based producers. They work the lead between inspections and client meetings. The lead still ages out when a closing date is near. Purchase-intent CPL older than a couple of days is frequently already bound. Non-renewal CPL lasts until the expiration date, which you should try to capture.",
          "Qualified traffic into a branded rater is powerful if the page asks for address and occupancy and your click-to-call is on. Traffic into a content blog about 'how to lower homeowners premiums' will look cheap and quote poorly. Buy the funnel you have, not the funnel you intend to build next quarter.",
          "Exclusive transfers matter more in purchase and non-renewal because those callers will issue with the first shop that can bind. Shared homeowners in a catastrophe ZIP means two agencies racing a residual market application. If that is your sport, admit it. If your E&O hates that sport, buy exclusive.",
        ],
      },
      {
        heading: "Geo is the campaign",
        paragraphs: [
          "Homeowners geo is tighter than auto geo in hard markets. State is not enough when a carrier is open in north Georgia and shut on the coast. Bring county lists, coastal-distance rules, wildfire ZIP excludes, and any surplus-only zones. We can filter. We cannot infer your appointments from a smile and a state list.",
          "Hours should match producers who can rate and bind, including evenings if purchase callers are touring houses after work. A 9-5 property desk will miss the under-contract couple. Either staff later, use an inside sales licensed pod, or take after-hours as CPL. Do not buy night calls into a service voicemail that promises 'someone will call you about your home' and then waits until Thursday.",
          "Duration on home calls is address plus questions. If you set it too short, every caller who had to go find a declaration page looks like junk. If you set it very long, you will pay for agents who like to talk about roofs. Pick a checkpoint: address confirmed, occupancy confirmed, request for quote started. That is a conversation. A 20-second 'what ZIP' and a dump is not.",
          "Concurrency caps stop a storm week from wrecking the floor. After a hurricane or a fire complex, everyone wants a policy or a better one. Your markets may be closed in those ZIPs anyway. Cap, geo-pause catastrophe zones when you cannot write, and do not confuse disaster curiosity with bindable new business. We will pause sources when you say pause. Say it early.",
        ],
      },
      {
        heading: "Qualification questions that save the appointment",
        paragraphs: [
          "Own vs rent. Property type. ZIP. Purchase vs current policy vs non-renewal. Estimated dwelling value or a bucket if you split high-value. That set prevents most of the classic homeowners junk. Add coastal or brush questions only in the states where they matter, so inland callers are not answering hurricane prompts.",
          "IVR vs live qual: live is better when callers do not know if they are HO-3 or HO-6. A good qualifier can tell a condo from a house. A bad qualifier will punch 'house' to get the transfer. Record the qual. Home is full of that shortcut because property questions feel tedious. Tedious is the job.",
          "Do not let the qualifier promise a premium or that 'we still write the coast.' If you do write it, the agent can say so after they see the address. Promising coastal markets on the front end is how you create disputes when the address is on the wrong side of the canal. Stay humble on the IVR. Be precise on the desk.",
          "Consent and TCPA-aware processes are still campaign-specific. Home has a lot of follow-up: need photos of the roof, need a closing date, need the mortgagee clause. Make sure your consent covers the callbacks your workflow needs. Your lawyers, your carriers, and your E&O still own the legal call. We implement the path you require.",
        ],
      },
      {
        heading: "Quality monitoring on property campaigns",
        paragraphs: [
          "Listen for property-type misses and catastrophe-ZIP misses first. A clean-sounding caller in a non-writable wildfire tract is a failed geo filter, not a failed closer. Source cutoffs should follow those misses. Hybrid supply (in-house plus publishers) will drift toward high-intent disaster content after a storm. That content can be legitimate non-renewal shopping or it can be people calling about claims. Claims is not new-business homeowners unless you defined it that way, which most buyers should not.",
          "Recordings show whether the agent asked for address and occupancy or tried to quote 'a typical house.' Typical house is not a rate. Sources that train callers to withhold the address until they hear a teaser price will look fine on duration and fail on bind. Cut those sources. Your agents should not have to beg for a street name.",
          "Disputes: out of geo, renters on HO-3 campaigns, commercial buildings, farms if you do not write farm, vacant if you do not write vacant, under duration, outside hours, wrong numbers. Add 'already bound, calling about a claim' if your campaign is new business only. Put it in writing so a claim caller with a long duration is not an automatic war.",
          "Every qualified home call is not a bound policy. Markets close. Roof reports kill files. The lender's timeline dies. You paid for a writable conversation under your rules. Placement is still underwriting and producer follow-through. Keep those books apart.",
        ],
      },
      {
        heading: "Moving season, storms, and renewal cycles",
        paragraphs: [
          "Late spring and summer bring purchase-intent volume in a lot of the country. Staff for under-contract urgency. Shorten your CPL age-out. Raise concurrency only if raters can keep up. Purchase season is not a reason to lift coastal excludes. New buyers in excluded ZIPs still cannot bind with you.",
          "Hurricane and wildfire seasons create spikes of non-renewal and remarket demand, plus a lot of unplaceable curiosity. Use geo pauses. Use product flags. If your surplus desk can work the spike, put budget there on purpose. If your only market is a preferred carrier that closes the county, turning media up is lighting money on fire.",
          "Carrier-wide renewal waves (a company taking a rate hit or exiting a state) create shopping that looks like auto rate-hike shopping but with fewer alternatives. You will hear 'my company is leaving the state.' That caller is real. Your ability to help is a market question. Brief us when a carrier exit is in the news in your states so we can watch quality, not so we can hype volume.",
          "January is not OEP. Do not staff homeowners like health. There is a modest new-year shop, then you are back to closings and renewals. Plan against your local real-estate calendar more than a national media calendar.",
        ],
      },
      {
        heading: "Who should buy home calls",
        paragraphs: [
          "Independent property agencies with real markets (admitted plus a surplus path if they work hard counties) are the core buyer. They need geo lists that match appointments, not ambition. They usually want exclusive on purchase and non-renewal, and they can use shared on ordinary renewal shopping if they quote fast.",
          "Captives buy homeowners when the parent still wants the line and the local book is not feeding enough inbound. Their appetite is often narrower. Filters should be narrower. A captive taking coastal E&S-intent calls will only train the producer to distrust the queue.",
          "Multi-line shops buying for bundle production should still qualify the property first. Auto can be a second product, not the headline. If the call is really an auto shopper who mentioned a house, that is an auto campaign leaking. Fix the creative. Do not relabel it homeowners.",
          "Call centers need raters, not just licensed talkers. Home without an address tool is a long sympathetic chat. If your center cannot rerate live, buy CPL and schedule callbacks with the address in hand. Paying cost per call for a conversation that cannot produce a number is how property centers sour on the channel.",
        ],
      },
      {
        heading: "Publisher traffic for moving and local intent",
        paragraphs: [
          "Home supply that works tends to look like moving, homebuying, and local-intent paths with a ZIP attached. Abstract 'protect your biggest asset' content without an address is weaker. RidgeRise buys in-house and takes publishers who can work that local intent, then applies the same property-type and geo filters. The twenty percent publisher note is the same honest hybrid as the other verticals: we are a demand aggregator, not a single-source fairy tale.",
          "Storm-chasing publisher traffic needs extra monitoring. Some of it is non-renewal gold. Some of it is people who needed a claims adjuster. Vetting and cutoffs are how we keep your producers on new-business files. If a source cannot hold a property-type qual, they do not stay on the campaign.",
          "Publishers apply at /publishers. Buyers stay on /buyers. Home is not a remnant dump for whoever has 'insurance' in a subid. Address-level intent or it does not belong.",
        ],
      },
      {
        heading: "Mistakes that are unique to homeowners",
        paragraphs: [
          "One national 'home' campaign across coast, fire, and inland. You will torture your best property producers. Split geo by peril appetite. It is more campaigns. It is also the only version that works in a hard market.",
          "No own-vs-rent prompt. Renters will transfer. Your HO-3 producers will check out. This is the most preventable mistake in the vertical and it still happens because someone wanted a shorter IVR.",
          "Buying catastrophe ZIP volume while your markets are closed there. Intent will look amazing. Bind will be zero. Watch carrier bulletins, not just media dashboards.",
          "Promising bundle savings on a non-renewal call. The person does not have a stable home policy to bundle. Get them a dwelling market first. Auto can wait. See /verticals/auto-insurance when the house is actually written.",
          "Using auto duration rules. Home callers look up a dec page. Give them a minute. Then judge the source on property match, not on whether the first 45 seconds were peppy.",
        ],
      },
      {
        heading: "How to brief a homeowners campaign",
        paragraphs: [
          "States, counties, coastal and wildfire rules, surplus vs admitted. Property types you write. Occupancy. Dwelling-value bands if high-value is a different desk. Purchase vs renewal vs non-renewal routing if you split them. Hours, concurrency, exclusive vs shared, duration checkpoint, live vs warm vs CPL vs traffic.",
          "IVR: own/rent, property type, ZIP, reason for shopping, value bucket if needed. Rejects: commercial, farm, vacant, mobile, if those are not your paper. Closing-date capture on purchase. Expiration-date capture on non-renewal if you can get it without killing the call.",
          "Quality owner who understands property, not a life manager moonlighting. Dispute rules that include catastrophe-ZIP and property-type misses. Duplicate windows that respect lender timelines (the same buyer may call twice in a week from two numbers because the spouse called too).",
          "Bundle rules in one sentence. Roof and claims knock-outs only if universal. Carrier closures as a living appendix we can pause against.",
          "Come in through /buyers or /contact with that sheet. Tell us what a qualified homeowners call looks like for your markets. We will run TCPA-aware, campaign-specific consent, in-house plus vetted publisher supply, and source cutoffs. We will not tell you every transfer binds. Discuss a campaign when you can name the ZIPs you cannot write. That list is more useful than a slogan.",
        ],
      },
    ],
  },
};
