import type { VerticalGuide } from "../vertical-guide-types";

export const legalAndSeniorGuides: Record<string, VerticalGuide> = {
  "medicare-advantage": {
    slug: "medicare-advantage",
    lede:
      "Medicare Advantage volume is a calendar problem before it's a media problem. Most of the people who will talk to your licensed agents this year pile in between October 15 and December 7, with a smaller, pickier wave in the January through March OEP window. Buy MA like it's auto insurance and you'll staff the wrong hours, run creative CMS would flag, and pay for conversations your agents aren't appointed to finish.",
    sections: [
      {
        heading: "Who's actually on the line when an MA call connects",
        paragraphs: [
          "The caller is usually 65 or about to turn 65, or they're on Medicare through disability and shopping an Advantage plan the same way a 72-year-old does. Plenty already have Original Medicare plus a Medigap policy. Plenty are already in an MA plan that's raising premiums, dropping a specialist, changing the formulary, or posting a worse star rating than last year. They didn't pick up the phone to browse. They want to know if their PCP is in-network and what the drug copay looks like on a plan you're actually appointed to sell.",
          "A second cluster shows up during AEP: adult children calling \"for Mom.\" They're doing the homework. They'll ask about hospital networks, insulin caps, and whether the dental rider is real or a brochure line. Your agent needs a talk track for the daughter on the line and a way to get the beneficiary on the call before anyone talks enrollment. If you only train for the 68-year-old who dialed themselves, you'll bleed duration on calls that never reach a decision-maker you can enroll.",
          "Dual-eligible and D-SNP shoppers are a different conversation. They're asking about Medicaid coordination, extra benefits, and transportation, not a golf-themed gym rider. If your floor is standard MAPD and you don't write D-SNP in that county, that call is a miss even if it lasts four minutes. Same for MA-only versus MAPD. A caller who needs Part D in the same plan isn't a \"maybe\" for an MA-only book.",
          "Under-65 Medicare through disability is easy to treat as a rounding error. Don't. The product questions look similar. The network and drug needs often don't. Age-band filters that start at 65 will quietly dump a real slice of demand, and age-band filters that go too young will send you people who aren't on Medicare at all.",
          "What you will not get, if the campaign is built correctly, is a 42-year-old shopping an ACA plan who clicked a \"Medicare\" headline because the creative was sloppy. That mix-up is a media problem, and it shows up in recordings as confusion in the first twenty seconds. Cut those sources. Don't train your MA team to \"just pitch health.\"",
        ],
      },
      {
        heading: "What you can buy on an MA campaign",
        paragraphs: [
          "Most MA shops live on the phone. Cost per call / pay per call bills when a conversation meets your written rules: geo, product, hours, duration or disposition, sometimes a short IVR screen. You're paying for a live talk with someone who asked to discuss Medicare Advantage, not for a click that might call later. Live transfers and warm transfers put that person on your licensed agent's line after qualification. Exclusive transfers mean only your team gets that prospect. Shared means another shop may already be pitching the same household.",
          "CPL still has a job in MA, but it's a different job. A lead record with phone, ZIP, and consent timestamp can feed a compliant outbound cadence your compliance officer already signed off on. It can also back a call-plus-form path when you want the application data before the agent dials. CPL does not replace the need for licensed talk time during AEP. If your close process is a 20-minute plan comparison, a form sitting in a CRM overnight is slower than a live transfer while the caller still has their medication list in front of them.",
          "Qualified traffic is the third model: clicks or redirects into a funnel you own. Some IMOs and FGAs want that because their landing pages, SOA process, and call recording stack are already built. RidgeRise can supply that traffic from the same hybrid mix as calls: in-house media buying plus vetted publishers. You still need CMS-aware creative rules on your side of the click. Traffic is not a loophole around Medicare marketing restrictions.",
          "Pick the model from intake reality, not from a rate card. If your agents sit in a dialer pod with concurrency caps and a queue, exclusive live transfers during AEP business hours are usually the cleanest fit. If you have a licensed outbound team and a documented consent workflow, CPL can fill the gaps between spikes. If you already buy media and just need more senior-intent clicks into your own pages, talk traffic. Plenty of buyers run two of those at once. Few should run all three on day one without a briefing that says which one owns which hours.",
          "None of these models mean the call becomes an enrollment. MA close rates depend on appointments, plan availability in the county, the caller's current coverage, and whether your agent can actually write the plan being discussed. Budget for no-sale talk time. If you need every transfer to enroll, you're buying the wrong product.",
        ],
      },
      {
        heading: "Filters that change who lands on your licensed agents",
        paragraphs: [
          "Start with county, not just state. MA plan menus are county-level. A Texas campaign that dumps Houston and El Paso on the same queue will waste licensed time on plans you don't write. ZIP or DMA filters are how you keep agents inside their appointed contracts. If you only write three carriers in a metro, say so. National \"Medicare calls\" with no geo grain is how you buy conversations you can't finish.",
          "Product split matters as much as geo. MAPD, MA-only, D-SNP, and C-SNP are not one bucket. Medigap and PDP shoppers will still leak in if creative says \"Medicare\" and the offer doesn't specify Advantage. Filter for MA intent, then decide whether dual-eligible traffic is in or out. If you aren't staffed for LIS and Medicaid questions, keep D-SNP off the campaign. You'll thank yourself in November.",
          "Hours are a senior-specific filter, not a generic business-hours toggle. A lot of MA callers ring late morning through mid-afternoon. Early evening can work. Late night is mostly a quality leak: wrong demo, rushed people, or traffic that wouldn't pass a recording review. Match agent shifts to when 65-plus actually calls, then set overflow rules. After-hours dumps onto a voicemail box will still bill if your duration rule is sloppy. Write the after-hours rule before AEP starts.",
          "Exclusivity and concurrency sit together. Exclusive MA transfers cost more because your agent gets a clean shot while the caller still has their Medicare card in hand. Shared can fill a large floor if you accept that another agency may already be comparing plans. Concurrency caps stop Monday-of-AEP from stacking eight live transfers on three agents. Buffer time after a disconnect matters too. Seniors stay on the line. They also get confused if the next call hits while the last application is still open.",
          "Language, age band, and current-coverage filters are the ones shops skip and then complain about. Spanish-language MA demand is real in specific counties and useless if your bilingual licensed headcount is two people. Age 64 turning 65 (IEP/ICEP traffic) behaves differently than a 78-year-old already in an MA plan. \"Currently on Medicare\" versus \"aging in\" should be in the brief if your talk track assumes they already have a card.",
        ],
      },
      {
        heading: "What qualification should happen before your agent picks up",
        paragraphs: [
          "A qualified MA transfer is not \"they said Medicare.\" It's a caller in your geos, in an enrollment window or a valid SEP, interested in Advantage (not a random Medicare question), and willing to talk to a licensed agent now. Put that in writing. IVR or a live screener can catch ZIP, age or Medicare status, and product. Don't make seniors punch through a seven-question tree. They hang up. Two or three confirms beat a clever bot that dumps angry people on your agents.",
          "SEP versus AEP/OEP is a qualification fork most buyers forget until January. During AEP, almost everyone in the demo can change MA plans. During OEP, the person generally needs to already be in an MA plan and they're limited in how they can change. Year-round, you need a real SEP reason: moving, losing coverage, dual-eligible status, and the rest of the CMS list. If your screener doesn't ask, your agents will spend billable minutes discovering the caller has no election period. That's an intake tax, not a media mystery.",
          "Licensing and appointment checks belong on your side of the transfer, but the campaign should assume they exist. Don't buy national MA calls if half your states have no appointed agents that week. Pause geos when a carrier contract is pending. Qualification before transfer can't fix an unappointed book. It can keep you from paying for states you already know you can't write.",
          "Dispositions should name the miss. Wrong geo. Not on Medicare. Wants Medigap only. No election period. Already submitted with another agency this week. Callback requested. Those labels let you cut a source instead of arguing about average duration. A four-minute call that was always Medigap is a failed qualification, even if it cleared a duration floor.",
          "Recording the qualification, where your campaign rules allow it, is how you settle disputes. Seniors will say they \"just had a question.\" Your screener's first thirty seconds should still show MA intent and geo. If it doesn't, the call shouldn't have transferred. Build the script so a reviewer can hear the qualifies without guessing.",
        ],
      },
      {
        heading: "Quality monitoring that holds up when enrollment volume spikes",
        paragraphs: [
          "AEP is when sloppy supply hides in busy queues. Duration looks healthy because seniors talk. Close rates sag because half the calls were the wrong product or the wrong county. Quality here means source-level watching: which publishers, which in-house campaigns, which creatives produce enrollable conversations versus polite dead air. Cut paths that fail the written rules. Don't wait for December 8 to notice.",
          "Call recording and spot review, where applicable, beat a dashboard that only shows talk time. Listen for CMS-sensitive pitch problems on your own agents too, but that's your shop. On the media side, listen for bait: \"government program,\" fake \"Medicare office\" framing, or promises about benefits that no plan sitting on your shelf actually offers. RidgeRise monitors quality on hybrid supply (owned media plus vetted partners) against the campaign brief. We don't promise every call becomes a policy, and we won't sell you a \"guaranteed CMS\" slogan. That's not how this market works.",
          "TCPA-aware processes and campaign-specific consent belong in the build, not the footer. MA adds CMS marketing rules on top of ordinary call-consent hygiene. Consent language for this offer, this product, this callback policy. If a publisher can't show how consent was captured for the path that generated the call, that path doesn't run. Pause a source without killing the whole campaign. That's the operational standard, not a legal guarantee. Anyone selling you a risk-free MA campaign is selling a story.",
          "Chargeback windows and dispute rules need to be boring and written. Wrong product, off-hours if you excluded them, mute/IVR dumps, short calls below the duration you agreed. Argue from recordings and dispositions, not vibes. During AEP you'll want a faster review cycle than you use in June. Set that expectation in the brief so finance isn't surprised.",
          "Answer rate is your problem as much as ours. If your licensed floor misses transfers, you'll see \"bad media\" in the report and a missed-call pile in the dialer. Staff up before October 15. Cap concurrency to what you can actually greet with a licensed agent. Quality monitoring cannot enroll a call nobody answered.",
        ],
      },
      {
        heading: "AEP, OEP, and the months that aren't either",
        paragraphs: [
          "Annual Enrollment Period runs October 15 through December 7. That's the main event. Plan menus refresh. TV, mail, and digital all scream Medicare. Your agents should already be appointed, your hours should already match senior call patterns, and your concurrency caps should already be tested on a smaller September trickle. Buying your first MA campaign on October 20 is how you learn filters the expensive way.",
          "Open Enrollment Period for MA (OEP) runs January 1 through March 31. It's not a second AEP. The caller generally must already be in a Medicare Advantage plan, and they're limited in the switch they can make. Creative that says \"anyone on Medicare can change now\" is wrong in February. Qualification has to ask current coverage. Volume is smaller. Intent can still be high because the person already knows they dislike their January plan. Staff OEP like a specialist window, not a leftover AEP pod with the same script.",
          "IEP and ICEP traffic (turning 65, first enrollment) drips all year. It's valuable if you write the aging-in conversation well. It's a mess if your only talk track is \"let's replace your current Advantage plan.\" Separate the aging-in brief when you can. The questions are about Original Medicare versus Advantage for the first time, not about hopping carriers.",
          "SEPs keep a floor of year-round demand: moves, loss of coverage, dual-eligible status, 5-star trial periods where they still exist in the rules, and other CMS-listed events. Year-round MA is real. It is not AEP with the volume knob turned down. You need screener language for the SEP reason and agents who know which elections are legal this month. Shops that keep buying \"Medicare calls\" in May with AEP creative collect complaints and short calls.",
          "Plan a budget curve, not a flat monthly number. Raise caps into late October. Watch the last ten days of AEP, when panic shopping and leftover media collide. Drop or retarget after December 7. Rebuild a smaller OEP campaign with tighter qualification. Keep a SEP/IEP trickle if your licensed bench can handle irregular days. If you can't staff the spike, don't buy the spike. Overflow during AEP trains seniors to hang up and call the next number on the TV.",
        ],
      },
      {
        heading: "CMS marketing rules that shape creative, consent, and routing",
        paragraphs: [
          "Medicare Advantage is one of the few call verticals where the ad itself can kill the campaign even when the caller is real. CMS marketing and communications rules restrict how you describe plans, what you can imply about being a government entity, how you use the Medicare name, and what superlatives and absolute statements you're allowed to put in front of a beneficiary. Creative that would be normal in auto insurance (\"lowest rate guaranteed,\" \"switch in minutes,\" fake official seals) is how you get a carrier or CMS problem. Brief the media team like a compliance officer is sitting in the room, because on this product they might as well be.",
          "Unsolicited contact rules are stricter than a generic TCPA policy. Cold calling Medicare beneficiaries with MA pitches is not a \"tweak the script\" situation. Inbound pay-per-call still needs campaign-specific consent for the path that generated the call, plus honest identification of who the consumer is about to speak with. If your transfer goes to a licensed agent at an agency, the caller shouldn't think they reached Social Security. Routing and intro language are part of the product.",
          "Benefit claims have to match plans you can actually offer in that county. Ads that dangle groceries, dental, and OTC cards as if every MA plan includes them will send you callers who are angry by minute two. Filter and creative should stay inside the benefit set your appointed contracts support. When a publisher's landing page promises a benefit your shelf doesn't have, cut the page. Don't ask agents to \"explain it away.\" That's how recordings get ugly.",
          "Call recording, where applicable, isn't only for duration disputes. It's how you see whether the first thirty seconds of the consumer experience matches what CMS expects of marketing that leads to an enrollment conversation. We're quality-monitored and TCPA-aware at the campaign level. That is not a claim that every path will survive every review, or that legal risk disappears. Rules change. Carriers add their own overlays. Your appointed agents have their own scripts. The media layer has to stay inside the brief you signed.",
          "If your compliance team has a prohibited-terms list, send it before anything runs. If they require specific disclosure language on the click-to-call path, put it in the brief as a hard requirement, not a suggestion. MA is a vertical where \"we'll fix creative after we see volume\" is how you buy a week of unusable calls and a stack of internal emails you don't want.",
        ],
      },
      {
        heading: "Licensed MA agents and hours that match how seniors actually call",
        paragraphs: [
          "You cannot take Medicare Advantage transfers with a health-insurance generalist who isn't licensed and appointed for MA in that state. Carriers typically also want AHIP (or equivalent) certifications current before someone talks plans. If your floor is mixed ACA and MA, split the queues. An ACA agent guessing through an MAPD comparison is a compliance event waiting for a recording review. Staff the MA line with people who can legally finish the call.",
          "Appointment status changes. A carrier pauses you in a region. A contract lands late. Your buy has to follow the licensed map, not last year's spreadsheet. Pause geos. Don't \"just take the call and refer.\" That's how you pay for conversations you legally shouldn't be having. Tell us which states and counties are live this week. During AEP that list should be reviewed more than once.",
          "Senior call hours are a pattern, not a myth. Late morning and early afternoon carry a lot of MA talk. Some markets do well with early evening after caregivers get home. Very late nights and very early mornings tend to attract the wrong traffic mix. Set hours that your licensed agents can cover with a human greeting. Seniors will wait through a short hold. They will not wait through a five-minute IVR and a callback promise that lands tomorrow.",
          "Concurrency and wrap time are harsher in MA than in a 90-second auto quote. Plan comparisons take minutes. Drug lists take minutes. If you set concurrency as if this were a final-expense two-minute pitch, you'll stack callers. Caps, buffer, and overflow-to-CPL or scheduled callback should be in the campaign design. Licensed time is the scarce resource. Media should respect it.",
          "Bilingual licensed coverage is a filter and a staffing plan. Spanish MA demand in Florida, Texas, California, and a list of other counties is not a toggle you flip on a Friday. If you don't have licensed bilingual agents in seat, don't buy the language. You'll pay for transfers your English-only team can't complete, and the recordings will sound like it.",
        ],
      },
      {
        heading: "Who this volume is actually for",
        paragraphs: [
          "Medicare-focused agencies and IMOs with real MA product authority are the core buyer. You have appointed carriers, a licensed floor, and a compliance person who will actually read the creative. Call centers that write MA as a dedicated book, not a side queue, fit the same profile. If MA is 8% of your revenue and you staff it with whoever is free, AEP will hurt you.",
          "Captive shops limited to one carrier can still buy MA calls if the geo and the plan menu match that carrier's footprint. You'll want tighter creative so you aren't paying to explain why the grocery card in the ad isn't on your plan. Independent agencies with a handful of contracts need county-level filters even more. The call is only useful if you can enroll what you discussed.",
          "This is a poor fit if you don't have licensed MA agents in the states you want, if you can't answer the phone during senior hours in AEP, or if your compliance team won't approve inbound call marketing at all. It's also a poor fit if you wanted Medigap or final expense and said \"Medicare\" in the brief. Those are different products, different callers, different rules.",
          "Agencies that already run their own media sometimes still buy a slice of exclusive transfers to fill licensed idle time in specific counties. That's a capacity play. Treat it like one. Cap it. Don't turn a fill-in buy into an unfiltered national queue because December looks scary on the calendar.",
        ],
      },
      {
        heading: "If you publish senior traffic, read this part",
        paragraphs: [
          "Publisher demand on MA is real and seasonal. We have buyer campaigns that need senior-intent call paths, especially into AEP, with creative that can survive a compliance pass. Search, social, native, and dedicated call paths can work when the offer is clearly Medicare Advantage and consent is captured for that offer. \"Medicare\" mush that also collects ACA and Medigap will get rejected or cut after recording review.",
          "What gets approved: traffic that can hit geo, hours, and product filters, with campaign-specific consent and no fake government positioning. What doesn't: incentivized junk, non-senior click farms, and pages that promise benefits no appointed plan includes. Payout terms and tracking sit on the campaign, not in a public rate table. If you can sustain clean senior call paths, the application is on /publishers. Buyers still come first on this site, and the brief they sign is what your traffic will be judged against.",
          "Don't park AEP volume on an FE or Medigap offer because the audience is old. Buyers will hear the wrong product in the first sentence and the path will get cut. If you're unsure whether your creative would survive a CMS-flavored review, say so in the application instead of finding out on a recording in November.",
        ],
      },
      {
        heading: "Mistakes that burn Medicare Advantage spend",
        paragraphs: [
          "Buying year-round volume on an AEP brief. February callers need OEP logic. June callers need SEP logic. If you leave October creative running, you'll pay for people who cannot enroll in anything you're selling this month. Change the qualification when the calendar changes. That's an MA-specific failure, not a generic \"seasonality\" slide.",
          "Staffing MA with unappointed or AHIP-lapsed agents because \"it's still health insurance.\" It isn't. Carriers and CMS treat the enrollment conversation as its own regime. One bad recording can cost you more than a week of media. Split the queue. Sit licensed MA people on MA DIDs.",
          "Ignoring senior hours and concurrency. A 9 p.m. shared transfer to a tired junior agent is how you get short calls and complaints. A Monday AEP open with no cap is how you get eight holds and a beneficiary who calls the next number on the list. Match the clock to the demo. Cap to the licensed bench you actually have that week.",
          "Letting Medigap, PDP-only, and MA share a headline. The caller will say yes to \"Medicare.\" Your agent will spend four minutes untangling product. That's a creative and filter miss you can hear in the first sentence. Separate the offers. If you also buy Medigap, buy it as Medigap.",
          "Treating CMS rules as a landing-page footnote. Superlatives, government implication, benefit bait, and sloppy consent will show up in QA. We will cut sources that fail the brief. If your own page is the problem, fix your page before you raise caps. And don't ask for a compliance guarantee. Ask for a campaign that was built with the rules in the brief and monitored when sources drift.",
        ],
      },
      {
        heading: "How to brief a Medicare Advantage campaign",
        paragraphs: [
          "Send the operational truth, not a marketing wish. States and counties you can write this week. MAPD versus MA-only versus D-SNP. Carriers you're appointed with, even at a high level, so creative doesn't advertise a benefit set you can't offer. Hours your licensed agents actually sit. Exclusive versus shared. Duration or disposition rules. Language. Whether adult-child callers are okay if the beneficiary can join. AEP/OEP/SEP mix you want to buy, and when you want each live.",
          "Include the compliance overlay your shop already uses: required disclosures on the call path, prohibited phrases, recording rules, and what your legal team considers a valid inbound consent capture for this offer. Campaign-specific consent only works if you say what \"this offer\" is. \"Medicare leads\" is not a consent description.",
          "Tell us what a dead call looks like in your dispositions. Not on Medicare. Wrong county. Wants supplement only. No election period. Already enrolled this AEP with another agency. That list is how quality monitoring has teeth. Without it, everyone argues about minutes.",
          "If you want CPL, say what the lead event is (form, call request, partial application) and how fast your outbound licensed team dials. If you want qualified traffic into your funnel, send the destination rules and the creative constraints. If you want live transfers, send the answering number, overflow, and concurrency cap. Hybrid supply (in-house plus vetted publishers) gets aimed at that brief. It does not get aimed at a vibe.",
          "Start on /buyers if you want the model explained against your intake, or /contact if you already know the counties and hours. Bring the MA facts that only this vertical cares about: election period, CMS creative limits, licensed appointments, and senior call hours. We'll tell you if the buy is a fit before anyone turns traffic on.",
        ],
      },
    ],
  },
  "final-expense": {
    slug: "final-expense",
    lede:
      "Final expense callers are older, phone-first, and shopping a small whole-life face amount to cover a funeral, not a 20-year term for a mortgage. They decide faster than term-life shoppers because the product is simpler and the premium has to fit a Social Security budget. If you buy FE like it's life insurance with the age slider moved, you'll get the wrong health class, the wrong hours, and a lot of polite conversations that never app.",
    sections: [
      {
        heading: "Who's calling about burial and final expense coverage",
        paragraphs: [
          "The typical caller is in their 60s, 70s, or 80s, sometimes 50s on the younger edge of an FE book. They're asking about burial insurance, funeral coverage, or \"the kind that covers the plot and the service.\" Face amounts they have in mind are small compared with term life: often enough to bury someone without leaving a kid a bill, not enough to replace income. They want to know the monthly premium first. Cash value lectures lose them.",
          "A large share is phone-first on purpose. A 76-year-old with thick fingers and a flip phone is not finishing your five-field web form. They saw a number on TV, in the mail, or on a page their son opened, and they called it. If your buy assumes a digital-native shopper, you're in the wrong demographic. Live transfers exist in this vertical because the person is already on the handset.",
          "Adult children and grandchildren call too. They're trying to put coverage on a parent who \"won't deal with it.\" That's a different talk track: who owns the policy, who pays the premium, whose health gets underwritten, and whether the parent will get on the phone for the health questions. If you only train for the insured calling themselves, you'll stall on third-party calls that could still write if you handle the owner/insured split cleanly.",
          "Health is the quiet split inside the demo. Simplified-issue FE shoppers can answer a short yes/no list. Guaranteed-issue shoppers have the conditions that fail those questions and will accept graded benefits. Mix those without a filter and your GI agents waste time on people who could have had a better simplified product, while your simplified agents deliver the \"we can't take you\" speech to someone who needed GI from the first minute.",
          "What you should not expect is a 35-year-old shopping $500,000 of term because a \"life insurance\" headline was lazy. That's a life campaign leaking into FE. You'll hear it immediately: they want 20-year term, they want an online quote, they hang up when you say burial. Cut that creative. Don't force an FE agent to become a term broker on a pay-per-call clock.",
        ],
      },
      {
        heading: "CPL, pay per call, exclusive transfers, and traffic for FE",
        paragraphs: [
          "Cost per call is a natural fit because the buyer is already talking. Pay per call / cost per call bills when the conversation meets your rules: age band, state, hours, duration or disposition, product (simplified versus GI if you split them). Live or warm transfers put the senior on an FE agent's line after a short qualify. Exclusive transfers matter more than people admit on a \"small policy\" product. Shared FE means another agent may have just quoted $15,000 of whole life to the same person. The second pitch sounds like a scam even when it isn't.",
          "CPL works when you have a licensed outbound team that actually dials seniors on a schedule they answer. Mid-morning callbacks beat 8 p.m. robocall energy. The lead needs a real number, age or DOB, state, and campaign-specific consent for FE, not a generic \"insurance\" checkbox. If your outbound close rate on FE web leads is already known inside your shop, you can decide whether CPL or inbound transfers waste less licensed time. We won't invent that rate for you.",
          "Qualified traffic into your own FE funnel is for shops that already own a senior-friendly page and a click-to-call. Keep the page huge-button, short form, obvious phone number. Seniors bounce off clever UI. Traffic from in-house buying plus vetted publishers can fill that page if the offer stays burial/final expense and the age targeting is honest. Traffic is not a way to hide bad consent. Same TCPA-aware standard as calls.",
          "Pick models from how your agents close. FE applications can finish on the first call when health is clean and the premium fits. That's why inbound exclusive transfers are popular: the decision window is short. Term life often needs illustration, underwriting narrative, and a follow-up. FE often doesn't. If your process still requires a second call for every app, say so, and we'll weight CPL or scheduled callbacks instead of slamming live transfers into a team that always postpones.",
          "A qualified FE call is still not a placed policy. Graded benefits, premium sticker shock, kids who veto the purchase, and \"I'll talk to my daughter\" will all show up. Price the campaign like some conversations end in a no. If you need every transfer to issue, you don't want media. You want a miracle.",
        ],
      },
      {
        heading: "Age bands, face amounts, and the other filters that matter",
        paragraphs: [
          "Age bands are the FE filter. A 52-year-old and an 81-year-old are not the same product, the same underwriting path, or the same talk track. Many FE books live in a 50-to-85 range with different carrier sweet spots inside it. If your appointed GI product starts at 50 and your simplified issue prices out at 80, write the bands separately. Dumping 45-to-90 on one DID is how you buy uninsurable calls and angry \"you're too young for burial insurance\" recordings.",
          "State licensing is obvious and still missed when a national FE number hits a state you don't write. Funeral costs and product rules vary. Some states are heavier GI. Some have replacement and senior-sales overlays that change the script. Geo-filter to licensed, appointed states. County-level is less critical than in MA, but urban versus rural can change average face amount and whether a child is on the call.",
          "Face-amount range belongs in the brief if your carriers cap low. Callers who think they want $50,000 of whole life may need a different life product. Callers who want $2,000 may not meet a carrier minimum. You don't need a hard IVR for every dollar, but the offer creative should talk like FE: burial, funeral, final expenses, small whole life. Creative that yells \"$1 million life insurance\" will not send you FE shoppers.",
          "Hours should follow an older, phone-first day. Late morning and early afternoon again do a lot of the work. Right after lunch can be fine. Late night is a quality problem more often than a hidden goldmine. Seniors also nap, go to church, and have doctor Tuesdays. Your concurrency cap can be smaller than a term-life floor because average handle time is shorter, but wrap time still exists. Don't set FE concurrency like a call center running warranty transfers.",
          "Exclusive versus shared should match how you pitch. FE is a trust sale on a small premium. Two agencies quoting the same $10,000 policy in one afternoon feels like pressure. Exclusive costs more and usually fits shops that close on the first or second call. Shared can work for a large GI floor that accepts competition and a cheaper cost per call. Be honest about which one you are.",
        ],
      },
      {
        heading: "Qualification that matches simplified issue and guaranteed issue",
        paragraphs: [
          "Qualify for age, state, and that they want burial/final expense coverage, not a 20-year term quote. A short IVR or screener can confirm age band and state without making an 80-year-old enter a 12-digit policy number. If they fail the age band, don't transfer \"just in case.\" Your agent will still be kind, and you will still pay.",
          "If you split simplified issue and GI, the health fork has to happen somewhere. Some buyers do a two-question screen (hospitalized recently, certain conditions). Some transfer everyone and let the agent triage. The first saves licensed time. The second avoids seniors hanging up on a health IVR. There's no universal right answer. There is a wrong one: pretending the two products are identical so you can buy cheaper mixed traffic.",
          "Third-party callers need a qualify question: are you the person to be insured, or calling for a parent? If for a parent, can they get on the phone? Policies still need the insured's health answers and usually their consent. Transfers where a grandchild wants a quote with no parent available will eat duration. Decide if those are billable callbacks or disqualified, and write it down.",
          "Dispositions should be FE-specific. Too young / too old. Wants term or IUL. Already has coverage and is replacing (replacement scripts are their own compliance pile). Premium objection before any health question. GI needed but you don't write GI in that state. Those tags tell you whether media is off-product or your shelf is too narrow.",
          "Consent and recording rules still apply. Campaign-specific consent for final expense, TCPA-aware handling of the number you stored, and a clean identification of who is on the line. Senior products attract extra scrutiny on pressure tactics. Qualification should never sound like a scare about dying this week. That's a creative problem you'll hear in QA.",
        ],
      },
      {
        heading: "Quality on a product where the caller will stay on the line anyway",
        paragraphs: [
          "Seniors stay on the phone. Duration floors that work in other verticals will not save you here. A six-minute FE call can be a wrong-product term shopper being polite. Quality is whether the person was in band, in state, asking about burial/final expense, and able to take an app if health fits. Source-level review of recordings will show you the publishers who send lonely people who wanted to talk, not to buy. Cut those paths. Kindness is not a billable intent signal.",
          "Listen for pressure and scare creative: fake funeral-home partnerships, countdown-to-death language, \"the government will take your house.\" That traffic can still be old and in-band. It still poisons close rates and complaint risk. Quality-monitored FE means watching creative and intro language, not just ZIP codes. RidgeRise treats FE as its own campaign with its own consent and source cutoffs, on hybrid in-house plus vetted-publisher supply. We don't guarantee issue rates and we don't sell zero-risk compliance.",
          "Wrong-number and caretaker-phone issues show up more in this demo. The lead number is a daughter's cell. The insured is hard of hearing. Build dispositions for \"wrong party\" and \"can't complete health questions on this call.\" Don't fight every one as invalid media. Do cut sources that systematically send numbers that never reach the insured.",
          "Chargebacks should follow the written rules: off-age, off-geo, mute dumps, below duration if you set one, obviously wrong product. Don't invent a \"they didn't sound old\" dispute standard. Age comes from the qualify, not from a reviewer's guess.",
          "Your agents' talk speed is part of quality you control. Fast term-life closers often talk over FE clients. If your FE close rate is bad on otherwise clean transfers, listen to your side before you blame the media. Slow down. Repeat the premium. Let them get a child on the line. Media can't fix a rushed pitch.",
        ],
      },
      {
        heading: "Seasonality is quieter than Medicare, but it isn't flat",
        paragraphs: [
          "Final expense does not have an AEP cliff. That's the point. People die, families argue about funerals, and TV runs senior ads all year. You can staff a steadier floor than an MA shop. Treat that as an operational gift, not an excuse to ignore the calendar.",
          "You will still see bumps. Tax-refund season can loosen a monthly premium decision. New Year \"get my affairs in order\" spikes are real enough that January isn't a clone of August. Flu season and hospital stays send GI-leaning callers. Around the holidays, adult children visit parents and suddenly want the burial policy handled before they fly home. That's a third-party-call week. Staff talk tracks for it.",
          "Media cost and competition move when other senior products are loud. During AEP, some publishers and some in-house buyers shift budget toward MA. FE can get cheaper or noisier depending on who is still bidding the senior demo. If your FE creative sits next to Medicare ads, expect more product confusion in October through December. Tighten the offer language then, even if your FE hours stay the same.",
          "Weather and local events matter less than in roofing, more than people think. After a high-profile funeral in a community, inbound can tick up. You can't buy that on purpose. You can avoid overreacting to a two-day blip as if the campaign broke.",
          "Plan caps as a gentle curve, not an MA-style spike. Keep licensed FE agents on a year-round schedule that matches senior hours. Use AEP weeks to watch contamination from Medicare creative, not to turn FE off unless your floor is the same people writing MA. Mixed queues in November are how FE callers get an Advantage pitch.",
        ],
      },
      {
        heading: "Why these decisions close faster than term life (and why that still isn't a sale)",
        paragraphs: [
          "Term life shoppers argue about laddering, conversion, and whether $500,000 is enough. Underwriting can mean exams, labs, and weeks. Final expense is a small face amount, often simplified or guaranteed issue, with a monthly premium the caller can compare to a grocery bill. The decision is \"can I afford $47 a month to keep my kids from paying the funeral home.\" That's a shorter path. Your agents should be trained for a first-call app, not a two-week nurture like an IUL case.",
          "Faster does not mean automatic. Graded benefit explanations slow GI calls down. Replacement of an existing small policy adds forms. A daughter who wants to think about it will think about it. Build your duration expectations around a complete premium quote and health questions, not around a signature every time. Paying cost per call on FE because \"they close fast\" is a reason to staff for completion, not a reason to skip qualification.",
          "Face amount psychology is specific. Callers often underestimate funeral costs or overestimate what a $5,000 policy does. Agents who upsell hard into bigger whole life on an FE transfer create chargeback-looking recordings even when the call was valid. Keep the product in the FE lane unless the caller clearly asks for more coverage and you have a licensed path for it. Mixing term upsells on FE campaigns contaminates media and talk tracks.",
          "Premium-to-age is the math that actually kills deals. An 84-year-old GI quote can shock someone who called because a TV ad said \"affordable.\" Creative that hides age-banded pricing will send you those calls. Honest age targeting and honest \"rates based on age\" language save licensed time. You cannot filter for \"can afford it\" perfectly. You can stop buying 30-year-olds and stop advertising fantasy premiums.",
        ],
      },
      {
        heading: "Buyer types that actually write final expense",
        paragraphs: [
          "Final expense specialists and senior-life agencies are the obvious fit. You live in small-face whole life. You know which carriers like which age bands. Your agents aren't bored by a $10,000 app. IMO downlines that run dedicated FE pods belong here too. The campaign should match the pod, not the IMO's entire life shelf.",
          "Mixed life shops can buy FE if they split the queue. A term producer taking FE transfers will over-explain and under-close. If FE is a real book for you, give it people who like the demo. If it's a leftover, you'll hate the recordings and blame the leads.",
          "Call centers with licensed FE seats and a GI/simplified split can take higher concurrency if wrap times stay short. Call centers that bounce FE to whoever is free will sound chaotic to an 80-year-old. Seniors notice chaos. They hang up and keep the TV number handy for tomorrow.",
          "Poor fit: shops that wanted term or IUL volume, shops with no senior hours coverage, shops that only want web leads because they don't like talking to old people on the phone. Say that last part out loud if it's true. Don't buy live FE transfers to avoid the phone. That's the product.",
        ],
      },
      {
        heading: "If you publish senior or protection traffic",
        paragraphs: [
          "If you run senior, burial, or protection audiences on search, native, social, or call paths, FE is a year-round offer when quality holds. Buyers want age-true traffic, FE-specific consent, and creative that doesn't pretend this is term life. Incentivized \"free burial\" junk and non-senior clicks get cut. Tracking and payouts are campaign-specific; we don't post invented rates here.",
          "Apply on /publishers with the traffic type and the age targeting you actually use. The buyer brief still wins. If your path can't honor age bands and hours, it's not an FE path.",
          "Age misrepresentation is the fast way off the campaign. If your traffic is 45-year-olds on a burial headline, it isn't final expense. Keep the call path short. Seniors hang up on long IVRs, and those hang-ups still look like your traffic problem.",
        ],
      },
      {
        heading: "Mistakes that are specific to final expense",
        paragraphs: [
          "Buying FE with term-life creative and hoping the agent \"sorts it out.\" They will sort it into a no-sale and a wasted minute. The caller asked for a 20-year term. Your product is a $15,000 whole life with graded GI sitting on the shelf. Separate the campaigns. Life insurance is not one marketplace.",
          "Skipping age bands because volume looks nicer as one number. You'll pay for 48-year-olds and 91-year-olds your carriers won't touch. FE underwriting is age-banded on purpose. Your media should be too.",
          "Using a web-form CPL as your only path into a phone-first demo. Some seniors will complete a huge-button form. Many will not. If your shop closes on the phone, buy the phone. Keep CPL for the slice that prefers a callback, with hours they actually answer.",
          "Shared transfers on a trust-heavy, small-premium sale without admitting the second-pitch problem. If your close needs a calm exclusive conversation, pay for exclusive. If you run a GI factory that can handle overlap, shared can be fine. Pretending there's no difference shows up in your \"they already have a quote\" dispositions.",
          "Scare tactics and fake urgency in a vertical full of older adults. That's a complaint generator. It's also how you get sources that look old enough on paper and still ruin the book. Quality review should kill those paths even when duration looks pretty.",
        ],
      },
      {
        heading: "How to brief a final expense campaign",
        paragraphs: [
          "Give age bands with hard floors and ceilings, licensed states, simplified versus GI (or mixed, if you really mean mixed), hours that match when your FE agents sit, exclusive versus shared, and what you consider a qualified conversation. Add language. Add whether third-party (child/grandchild) callers are accepted if the insured can join. Add face-amount range if your carriers are picky.",
          "Send prohibited creative themes your compliance team already hates: government implication, funeral-home bait if you aren't that, death-countdown copy. Campaign-specific consent should say final expense or burial coverage, not \"life.\" TCPA-aware handling of stored numbers should match how you outbound CPL, if you buy CPL.",
          "Dispositions: too young, too old, wants term, GI needed/not offered, insured not on the line, replacement only, premium hang-up before health questions. That's the list we'll use when a source starts to drift.",
          "If you also write MA, tell us whether the same phone team will touch both. Mixed November queues need extra creative separation so FE callers don't get an Advantage pitch. If the teams are split, we can run both without tripping over each other.",
          "Talk through the brief on /buyers or send the age bands and hours on /contact. RidgeRise will map CPL, cost per call, live transfers, or qualified traffic against that FE-specific sheet. Hybrid supply only turns on after the age bands and product split are real, not after someone says \"just send senior leads.\"",
        ],
      },
    ],
  },
  "personal-injury": {
    slug: "personal-injury",
    lede:
      "A personal injury call is worth something when the injury, the timeline, and the lawyer situation line up with a case your firm will actually sign. Statute of limitations, injury type, and a retained-counsel screen are the filters that keep you from paying for unsignable talk, and shared transfers are how you pitch someone who already has an attorney on the other line. Buy PI like it's a cheap insurance lead and you'll light money on fire with polite conversations that never retain.",
    sections: [
      {
        heading: "Who's calling a PI intake line",
        paragraphs: [
          "The useful caller was hurt, thinks someone else is at fault, and wants a lawyer now. Motor vehicle accidents are the volume engine in most PI books: rear-ends, left turns, commercial trucks, rideshare. Premises (slip, trip, negligent security), workplace injuries with a third-party angle, dog bites, and the occasional med-mal or product case show up depending on how you buy. They are not one queue. A trucking case with a week of hospital time is not a parking-lot fender bender with a sore neck and no treatment.",
          "Timing is part of who they are. Someone who wrecked yesterday and is calling from the ER waiting room is a different intake than someone who wrecked 20 months ago, stopped treating, and just saw a billboard. Both can be real. Only one is signable in a state with a two-year statute if you're already close to the bar. \"Injured person\" is not a qualifier. Injured how, when, and with what treatment is.",
          "You'll also get the already-represented. They want a second opinion, they're unhappy with their lawyer, or they don't remember they signed. In most PI campaigns those are dead on arrival unless your firm has a written policy for replacing counsel. The retained-counsel screen exists because PI case value is high enough that another firm already fought to sign them. Asking \"do you already have a lawyer on this accident\" is not optional small talk.",
          "Family members call. A spouse in the hospital. A parent of a hurt teenager. Decide whether those are qualified if the injured person can join or sign. Some firms want only the injured adult. Some will take a spouse with authority. Write it down or your intake team will improvise, and improvisation on a recorded legal line is how you get complaints.",
          "What you should not treat as PI: mass tort docket shoppers (\"I took this drug,\" \"I had this mesh\"), workers' comp-only callers with no third party, property-damage-only auto claims with no injury, and criminal defense. Legal is not one vertical. If your creative says \"accident lawyer\" and your landing page also collects Roundup, you'll hear it on the call. Split the offers.",
        ],
      },
      {
        heading: "Why exclusive transfers dominate, and where CPL still fits",
        paragraphs: [
          "PI firms pay for signed cases, not for conversations. Exclusive live transfers are the default for a reason: the first firm that treats the caller like a client often wins the sign-up. A shared PI call is a race. The other shop may already be texting a contract. If your intake model is a 15-minute sign-up conversation, exclusive is usually the only model that isn't masochism. Warm transfers after a retained-counsel and injury-type screen put a screened person on your intake paralegal or attorney line.",
          "Cost per call / pay per call should bill against a written qualify: injury type you accept, time since incident versus your statute rules, not already retained, geo your licenses cover, hours your intake is live. Duration floors catch hang-ups. They do not catch \"I already hired someone in the first minute.\" Dispositions have to carry that weight.",
          "CPL in PI is a form or chat lead with accident details, then your team outbound. It can work if you dial fast. Accident victims talk to the first competent human who calls back. A CPL that sits until morning in a competitive metro is often already signed. If you buy CPL, staff nights and weekends for auto, or admit you're only chasing premises and slower cases. Qualified traffic into a funnel you own is the same race with extra steps. Some legal marketers want that control. The consent and the speed still have to be real.",
          "RidgeRise sells these models from hybrid supply: in-house media buying plus screened publishers, quality-monitored against your case criteria. We will not quote you a signed-case rate, an average fee, or a \"guaranteed retain.\" One signed trucking case can justify a lot of dead air. A pile of unsigned soft-tissue calls can look busy and still lose money. Your economics are yours. The media job is to hit the screen you wrote.",
          "Live transfer does not mean the person will sign. They'll comparison-shop firms. They'll get nervous about lawsuits. Their spouse will say no. Buy calls like intake still has to do the job.",
        ],
      },
      {
        heading: "Injury type, geo, and hours that protect case value",
        paragraphs: [
          "Injury type is the first split. Auto vs premises vs med mal vs workplace/third party vs other. Inside auto, some firms want treatment already started. Some will take day-of-accident with pain and a promise to treat. Some exclude low-speed, no-police-report, no-visible-injury. If you take commercial truck and rideshare at different values than private auto, those should be different campaigns or at least different tags. Dumping \"any accident\" on a med-mal firm is how you buy noise.",
          "Geo is license and venue, not a DMA vanity map. You need states (and sometimes counties) where your firm can file or has local counsel agreements you actually use. A Florida firm buying New York auto calls needs a real NY relationship, not optimism. Venue shopping fantasies do not belong in the brief. City-level filters help when your TV brand only converts in the metros you advertise.",
          "Hours for PI are not senior hours. Accidents happen in rush hour and on Saturday night. If your intake closes at 5 p.m. local, you will miss a slice of the best auto calls or you'll take them as CPL voicemail and lose the race. Overnight coverage, even a small on-call intake, changes what you can buy. Premises and older injuries can live inside business hours. Fresh auto often cannot.",
          "Concurrency caps protect attorney and intake time. A PI sign-up is not a two-minute FE pitch. If you have two intake people, you do not want five exclusive live transfers at once. Overflow to a recorded line or a scheduled callback only if your policy still treats that as a serious attempt. Many firms should lower media caps before they add overflow junk.",
          "Language, commercial-vehicle flags, and treatment-status filters are how specialized firms stay sane. Spanish auto in specific metros is a staffing plan. 18-wheeler campaigns should not be the same DID as parking-lot bumpers. \"Have you seen a doctor\" changes value for shops that won't sign untreated soft tissue. Put it in the screen if it's a real rule, not a preference you mention in week three.",
        ],
      },
      {
        heading: "Statute of limitations and the retained-counsel screen",
        paragraphs: [
          "Every state clocks PI filing deadlines differently. Many personal injury statutes run two or three years from the accident. Some are shorter. Med mal and claims against public entities can be much shorter and full of notice rules. Your campaign doesn't need a law-school IVR. It does need a date-of-incident question and a cutoff your lawyers already use. \"Hurt in the last few years\" is how you pay for time-barred files that intake still has to reject.",
          "Near-statute cases are a policy decision. Some firms will sprint a filing. Most intake teams should not take a wreck from 23 months ago in a 24-month state unless a lawyer said yes. Put a numeric cutoff in the qualify (for example, incident within X months) that matches your practice, not a blog post. We will not invent the legal deadline for your state in this guide. Your counsel already knows it. Use that number.",
          "Retained counsel is the other PI-specific kill question. \"Do you already have an attorney for this injury?\" If yes, most buyers disqualify immediately. If your firm does take second-opinion or discharged-counsel cases, that's a different campaign with different scripts and different risk. Don't mix it into the main auto buy. You'll train publishers to send represented shoppers and then get mad about it.",
          "Prior representation includes \"I talked to a lawyer yesterday and I'm thinking.\" That's not always retained. Your screener should distinguish signed versus shopping. Intake can still lose those. They're more signable than someone who already has a contract out. Write the distinction so QA isn't guessing.",
          "These two screens are why PI copy cannot be cloned from insurance. Auto insurance asks about coverage and vehicles. PI asks whether the case still exists as a case. If your brief skips SOL and retained counsel, you're buying sympathy calls.",
        ],
      },
      {
        heading: "Qualification before a high-value transfer hits intake",
        paragraphs: [
          "A qualified PI transfer, for most firms, is: injured (not PD-only), injury type you accept, incident date inside your statute window, not retained, in your licensed geos, calling during intake hours, and willing to talk now. Police report, at-fault admission, and treatment can be extra filters or just intake questions. The more you stuff into IVR, the more hurt people hang up. The less you ask, the more unsigned junk you pay for. Pick the three that actually predict a reject in your shop and put those before the transfer.",
          "Live screeners often beat long IVRs on PI. A human can hear \"I already have a lawyer\" and stop. A human can hear \"my back hurts from a wreck last Tuesday\" and move. Keep the screener script short and recorded. Campaign-specific consent for this PI offer belongs on the path that generated the call. TCPA-aware storage of the number matters if you follow up. This is not a promise of zero legal risk. It's how you avoid running legal intake on a mystery checkbox from another vertical.",
          "Dispositions should read like a litigation screen. Time-barred. Already retained. Wrong injury type. No injury / PD only. Off geo. Workers' comp only. Mass tort / product, not PI. Minor without a parent. Those labels let you kill a publisher who is quietly sending drug-injury calls onto your auto DID.",
          "Minors, fatalities, and catastrophic injuries may need a different routing even inside PI. Some firms want those on a senior intake attorney immediately. Don't let them sit in a generalist queue behind a bumper-tap. If you buy a catastrophic or trucking campaign, staff it like one.",
          "Never let the screener give legal advice. Qualify facts. Transfer. Your licensed people do the case evaluation. Media qualification is a filter, not a consult.",
        ],
      },
      {
        heading: "Quality when one signed case carries the month",
        paragraphs: [
          "PI quality is unsigned-case waste, not average handle time. Listen to recordings for retained-counsel misses, old incidents, and creative that promised a check, not a lawyer. Source-level cutoffs matter because one bad publisher can flood you with already-signed shoppers while duration still looks fine. Review faster than you would on a $40 insurance CPL. The unit economics are different.",
          "Chaser energy is a PI-specific quality problem. Callers who were pulled from crash reports or hospital-area spam will sound hunted. Some firms won't touch that demo. If your policy forbids certain generation methods, put the prohibition in the brief so supply can be filtered. Hybrid in-house plus vetted publishers still needs that rule in writing. \"Vetted\" is not a magic word. It's a process of cutting people who fail it.",
          "Fake urgency and \"insurance companies hate this\" creative can still send real injured people. It also sends people who want a loophole, not representation. Watch close reasons. If intake is losing on \"I thought you'd just get me money without a lawsuit,\" the ad is the problem.",
          "Dispute windows should include the PI kills: retained, time-barred, no injury, wrong type, off-hours if excluded. Don't dispute \"didn't sign.\" Signing is your job. We monitor whether the call should have been transferred under your rules. That's the line.",
          "Answer rate is brutal in this vertical. Miss a fresh auto transfer and another firm gets it. Staff the phones. Cap concurrency. If you can't answer, don't buy exclusive live transfers at night. Buy a model that matches the bench you have.",
        ],
      },
      {
        heading: "Seasonality, weather, and news without treating PI like roofing",
        paragraphs: [
          "Auto PI volume follows miles driven, weather, and weekends more than a neat quarterly chart. First rain after a dry spell, first ice, holiday travel weeks: more wrecks, more calls. Summer motorcycle, if you take those. You don't need a meteorology department. You do need the ability to raise caps on a bad weather week and not leave intake at Friday staffing.",
          "Premises can tick up after snow and ice (slips) or after local news about a property. Med mal and slower PI don't follow the same clock. If you mix them on one campaign, you won't know why Tuesday was busy. Separate what you can.",
          "News stories about verdicts sometimes create looky-loos who were not hurt. That's more of a mass-tort pattern, but PI billboards after a famous crash can draw unrelated callers. Keep qualification tight when your brand is loud. Volume after a Super Bowl ad is not the same as volume after a pileup on I-95.",
          "Court calendars affect your intake capacity more than consumer demand. Trial weeks, your own TV flights, and competitor flights all change how fast you must dial CPL. Media should know when your intake is in trial mode and half-staffed. Lower the cap. Don't discover it on a recording of a hold that lasted until the caller hired someone else.",
          "There is no PI equivalent of AEP. Anyone selling you \"PI season\" as a single national event is recycling insurance language. Plan weather and staffing. Ignore fake calendars.",
        ],
      },
      {
        heading: "Who should buy PI calls (and who should not)",
        paragraphs: [
          "PI law firms with real intake coverage in the states they want are the core buyer. Intake partners and answering services that sign up for a firm can buy if the retain rules are the firm's rules. Legal marketers running exclusive transfer campaigns for a firm belong in the brief as the operational contact, with the firm still owning case criteria.",
          "Firms that only want catastrophic trucking should not buy general auto to \"see.\" You'll hate 90% of the calls. Firms that want volume soft-tissue in a big metro can buy a wider injury screen and must staff for it. Match the buy to the docket you actually litigate.",
          "Poor fit: firms with no after-hours plan buying night auto; firms that won't take exclusive pricing but also won't accept shared competition; shops that wanted mass tort inventory and said PI because the words \"legal calls\" felt close enough. Also poor fit: anyone who needs every call to become a signed case. That's not a media product.",
          "If you're an insurance buyer reading this page, you're in the wrong brief. PI callers are not shopping a policy. They're shopping a lawyer. Different consent, different screens, different hours.",
        ],
      },
      {
        heading: "If you publish accident-intent traffic",
        paragraphs: [
          "Publishers who can run local accident-intent search or call paths, with scripts that ask injury, timing, and counsel status, are the ones PI buyers keep. Loose \"legal help\" traffic dies in QA. Campaign-specific consent for this firm's PI offer is required. We won't invent payouts. If your path can hold a qualify without coaching callers to lie about representation, start on /publishers.",
          "Buyers still set the case rules. Your job is to hit them, not to argue that a represented caller is \"still interested.\"",
          "Local intent beats national accident-lawyer spray. A firm in Atlanta does not want a wreck in Oregon unless they said they do. If you can't hold geo plus injury type, timing, and counsel status, this isn't a PI path.",
        ],
      },
      {
        heading: "Mistakes that waste PI budget",
        paragraphs: [
          "Skipping the retained-counsel question because it \"hurts conversion\" on the media side. It hurts because it removes people you cannot sign. Paying for them is the expensive version of a high conversion rate. Ask it. Disqualify. Move on.",
          "Skipping statute timing. Intake will still spend ten minutes being kind to a time-barred caller. That's attorney-time theft. Put a date cutoff in the screen that matches your states.",
          "Buying shared PI transfers while running a slow sign-up. The other firm sent the contract before your hold music ended. If you need a conversation, buy exclusive and cap concurrency so you can actually have it.",
          "Mixing mass tort, workers' comp-only, and PI on one number. You'll poison dispositions and you'll train AI-sounding reports that say \"legal quality is down\" when you really bought the wrong lawsuit type. Injury type is the product.",
          "Judging the campaign on call count week one instead of signed files and reject reasons. PI is lumpy. A quiet week and a signed trucking case can beat a loud week of untreated bumper taps. Read the dispositions. Then change filters. Then change spend.",
        ],
      },
      {
        heading: "How to brief a personal injury campaign",
        paragraphs: [
          "Write the case: injury types in, injury types out, incident-date cutoff by state if they differ, retained-counsel rule, geos you can file in, hours intake answers, exclusive versus shared, language, and whether family callers qualify. Add treatment requirements if you have them. Add commercial auto / rideshare / motorcycle as in or out. Add catastrophic routing if it exists.",
          "Send the qualify script you want on the transfer path. Shorter is better if the three PI kills are in it: type, timing, counsel. Add campaign-specific consent language your malpractice carrier and marketing counsel already like. TCPA-aware follow-up rules if CPL or missed-call outbound is in play. Don't ask us to certify legal risk away. Real process, written.",
          "Name the dead dispositions you'll actually code. Already retained. Too old under SOL. PD only. Wrong type. Off geo. That's how we monitor sources on hybrid supply.",
          "If you want qualified traffic into your own intake form, send the form fields and the speed-to-call plan. If you want live transfers, send the answering path and the cap. If you want both, say which hours belong to which model.",
          "Use /buyers to talk models against your intake, or /contact when the injury list and SOL cutoffs are already on paper. Bring the PI-only facts: injury type, statute window, retained-counsel screen, exclusive transfer need. That's the brief that keeps high case value from turning into a pile of unsignable talk time.",
        ],
      },
    ],
  },
};
