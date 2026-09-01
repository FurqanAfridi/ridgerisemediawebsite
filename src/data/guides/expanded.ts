import type { VerticalGuide } from "../vertical-guide-types";

/** Guides for verticals added after the original catalog. */
export const expandedGuides: Record<string, VerticalGuide> = {
  "workers-compensation": {
    slug: "workers-compensation",
    lede:
      "Workers' compensation callers need a work-related injury, coverage that actually applies, and a clear answer on whether they already have counsel. State rules and claim timing change what a firm will sign. Buy exclusive or shared transfers with hours that match intake, not a generic legal dump that mixes PI, SSDI, and workplace claims on one number.",
    sections: [
      {
        heading: "Who's calling about a workplace injury",
        paragraphs: [
          "The useful caller got hurt on the job, or while doing work for an employer, and wants help with a claim, a denial, or medical treatment that stalled. Construction, warehouse, healthcare, delivery, and office slip cases show up depending on how you buy. They are not the same as a third-party PI auto wreck. Comp is often no-fault against the employer. Third-party liability is a different product if your firm also runs that docket.",
          "Timing matters. Someone who hurt their back yesterday and is calling from urgent care is different from someone whose claim was denied six months ago and whose temporary benefits just stopped. Both can be real. Only some firms want both. Write the claim-status split: new injury, open claim, denied, settled and unhappy, or already represented.",
          "You'll get people who were fired after reporting an injury, people whose employer is pushing them back to light duty they cannot do, and people who never filed and are scared of retaliation. Those are intake facts, not slogans. If your firm does not take retaliatory discharge or only takes accepted claims, say so before the transfer.",
          "Family members call. Spouses of injured workers. Adult children. Decide whether they qualify if the injured worker can join. Write it. Improvising on a recorded legal line creates complaints.",
          "What does not belong on a workers' comp campaign: PD-only auto, criminal defense, SSDI-only with no work injury, and mass tort product shoppers. If your creative says 'hurt at work' and your landing page also collects car wrecks, you will hear the mix on the recording.",
        ],
      },
      {
        heading: "Models: cost per call, CPL, transfers, and traffic",
        paragraphs: [
          "Exclusive live transfers are common because the first firm that explains the process often wins the engagement letter. Shared workers' comp calls are a race, and the caller may already be mid-packet with another shop. If your intake needs a long fact pattern, exclusive usually fits better.",
          "Cost per call / pay per call should bill against written rules: work-related injury, state you cover, not already retained for this claim, hours your intake answers, and any claim-status filters. Duration floors catch hang-ups. Dispositions catch 'already have a lawyer' and 'not work related.'",
          "CPL works when your team outbound dials fast after a form with employer, injury date, and claim status. A workers' comp CPL that sits overnight in a competitive metro is often already signed. Staff the dialer or buy live transfers.",
          "Qualified traffic into a firm-owned page is fine when the page screens work injury vs personal injury and captures consent for this offer. A generic 'injury lawyer' page that mixes dockets will poison dispositions.",
          "RidgeRise runs these models from in-house media plus vetted publishers, quality-monitored against your brief. We will not invent signed-case rates or average fees. A qualified transfer is not a retained client.",
        ],
      },
      {
        heading: "State rules, employer coverage, and filters that matter",
        paragraphs: [
          "Workers' comp is state law. Your geo filter is the states (and sometimes counties) where your firm files or has local counsel you actually use. A Texas firm buying New York warehouse calls needs a real NY path, not optimism.",
          "Employer coverage and whether the employer is a non-subscriber (in states where that exists) can change the theory of the case. If you only want traditional carrier claims, screen for that. If you take non-subscriber negligence, make it a tagged campaign.",
          "Hours for acute injuries are not banker's hours. Night and weekend injuries happen. If intake closes at 5, you miss a slice or you take CPL voicemail and lose the race. Denied-claim and older-file volume can live inside business hours.",
          "Concurrency caps protect attorney time. A workers' comp intake is not a two-minute final expense pitch. Cap live transfers to what your team can answer without dumping callers into a dead hold queue.",
          "Language and industry filters help specialized firms. Spanish construction metros need staffing. Healthcare needle-stick campaigns should not share a DID with office slip-and-fall if your talk tracks differ.",
        ],
      },
      {
        heading: "Qualification before the transfer",
        paragraphs: [
          "A working screen: work-related injury, approximate date, state of employment or injury, whether they already have a lawyer for this claim, and whether the call is during intake hours. Employer name and claim number can wait for intake if asking kills the call.",
          "Retained-counsel is a kill for most buyers. 'I talked to someone yesterday' is not the same as signed. Train the screener to distinguish shopping vs retained.",
          "Not work-related is a kill. Weekend home projects, fights in the parking lot that were not arising out of employment, and clear personal errands do not belong on a comp campaign. When in doubt, your brief should say transfer or reject.",
          "Campaign-specific consent and TCPA-aware follow-up belong on the path that generated the call. We run quality-monitored, compliance-conscious processes. We will not certify zero legal risk.",
          "Never let the screener give legal advice. Qualify facts. Transfer. Licensed people evaluate the claim.",
        ],
      },
      {
        heading: "Quality monitoring and disputes",
        paragraphs: [
          "Listen for retained misses, non-work injuries, wrong state, and creative that promised a check instead of a lawyer. Source-level cutoffs matter because one publisher can flood you with already-signed shoppers while duration still looks fine.",
          "Dispute invalids that match the brief: wrong geo, already retained, not work-related, off-hours if excluded, duplicates inside your window. Do not dispute 'didn't sign.' Signing is intake's job.",
          "Hybrid supply stays usable when in-house cells and publishers get the same cut rules. Averages hide a bad path. Review by source.",
          "Answer rate is unforgiving on fresh injuries. If you cannot staff nights, do not buy exclusive night transfers. Match the model to the bench.",
        ],
      },
      {
        heading: "Who buys and how to brief",
        paragraphs: [
          "Workers' comp firms, plaintiff shops with a comp desk, and legal intake partners with state coverage. Poor fit: PI-only firms hoping 'legal calls' fill the gap, or buyers who need every call to become a signed file.",
          "Brief: states, claim-status filters, retained-counsel rule, industry in/out, hours, concurrency, exclusive vs shared, duration, language, invalid list. Send a recording of a call you were happy to pay for.",
          "Publishers: workplace injury and local legal intent with a clean work-related screen. No PI auto dump onto a comp DID.",
          "Start on /buyers for models or /contact with the state list and claim-status rules. A qualified workers' comp call is not a settled claim.",
        ],
      },
    ],
  },

  "disability-ssdi": {
    slug: "disability-ssdi",
    lede:
      "SSDI and disability callers often need help with denials, appeals, or first filings. Qualification usually includes claim status, prior representation, and whether they can still work. Buy CPL or cost per call with those screens written before volume scales, because a generic 'disability benefits' dump will fill your queue with curiosity and already-represented files.",
    sections: [
      {
        heading: "Who's on a disability intake call",
        paragraphs: [
          "The useful caller cannot work at substantial gainful activity levels, has a medical story that can be documented, and wants help applying, appealing, or restarting a stalled claim. Many already have a denial letter. Some are filing for the first time after a long illness. Some were cut off after a continuing disability review.",
          "Claim status is the product split. Initial application, reconsideration, hearing level, Appeals Council, federal court, and SSI vs SSDI mix are different work for your advocates. If you only take hearing-level files, do not buy 'any disability' media.",
          "You'll get caregivers and adult children calling for a parent. Decide whether that qualifies if the claimant can join or sign. Write the rule. Same for people who are still working part-time and do not understand SGA. That may be a reject for your shop.",
          "What does not belong: short-term private disability insurance shopping, workers' comp-only with no SSDI angle (unless you want that dual path), and 'I want free money' curiosity with no medical condition. Split the offer from PI and from Medicare Advantage.",
        ],
      },
      {
        heading: "CPL, cost per call, and transfers",
        paragraphs: [
          "Cost per call fits when advocates can take a criteria-heavy conversation now. Exclusive transfers are common because the claimant will often sign the first organized firm. Shared can work on awareness waves but expect messier inventory.",
          "CPL is normal: form with claim status, prior representation, contact, then rapid outbound. Speed still matters, especially after a denial letter. If your packet takes days, say so and do not buy live transfers you cannot complete.",
          "Qualified traffic into a claim-status-specific landing page beats a generic 'disability help' page that mixes ten situations into one CRM.",
          "RidgeRise can run CPL, cost per call, live/warm transfers, exclusive or shared, and traffic from hybrid supply. A qualified disability call is not an approved award. SSA and your case review decide what survives.",
        ],
      },
      {
        heading: "Filters that protect advocate time",
        paragraphs: [
          "Claim status, prior representation for this claim, age band if you have one, state if your practice is limited, language, and hours. Hours in disability can skew daytime because many callers are home and watching daytime media. Evening still matters when TV runs late.",
          "Working vs not working is a core screen for many buyers. If they are working above your threshold, reject or route to a different product.",
          "Medical condition lists matter if you specialize (mental health, orthopedic, cancer). If you take most impairments, keep the list short on the IVR or you will hang up the people you want.",
          "Concurrency caps matter because disability intakes are long. Do not buy five exclusive transfers onto two advocates.",
        ],
      },
      {
        heading: "Qualification and consent",
        paragraphs: [
          "Ask claim status, whether they already have a representative for this SSDI/SSI claim, whether they are currently working, and whether they can talk now. That is enough for most transfers.",
          "Prior representation must be claim-specific. A PI lawyer for a wreck is not an SSDI advocate. A signed SSDI fee agreement usually is a kill unless you buy second-look inventory on purpose.",
          "Campaign-specific consent for disability help is not a debt-settlement checkbox. TCPA-aware processes, quality monitoring, no courtroom guarantee.",
        ],
      },
      {
        heading: "Quality, seasonality, and briefing",
        paragraphs: [
          "Watch for coaching ('say you cannot walk even if…'), already-represented dumps, and wrong claim level. Cut sources that drift. Listen to recordings by source.",
          "Denial waves and hearing backlog news can spike volume. Caps should follow advocate capacity, not ad flight size.",
          "Who buys: disability advocates and SSDI-focused legal intake. Poor fit: firms that wanted PI and said 'disability' because it sounded legal.",
          "Brief claim levels, prior-rep rule, work screen, states, hours, exclusive vs shared, duration, invalids. Use /buyers or /contact. Bring the claim-status sheet.",
        ],
      },
    ],
  },

  bankruptcy: {
    slug: "bankruptcy",
    lede:
      "Bankruptcy callers are exploring Chapter 7 or Chapter 13 options under real debt pressure. Debt load, prior filings, and state matter more than raw volume. Filter for chapter fit and exclusive vs shared so attorneys are not competing on the same distressed caller with three other firms the same afternoon.",
    sections: [
      {
        heading: "Who's calling about bankruptcy",
        paragraphs: [
          "The useful caller has unsecured debt, wage garnishment risk, foreclosure pressure, or medical bills they cannot pay, and they want to know if bankruptcy is an option. They can often name a debt range and whether they have been sued. Curiosity about 'debt relief' without a real balance is a different product, often debt settlement, not bankruptcy counsel.",
          "Chapter 7 vs Chapter 13 intent shows up early if you ask. Someone who wants to keep a house and catch up arrears is not the same file as someone who wants to wipe credit cards and has little equity. If your firm only files one chapter in a market, screen for it.",
          "You'll get people who already filed, people who hired a petition preparer, and people who have a lawyer and are shopping a second opinion. Prior filing and prior counsel are filters, not afterthoughts.",
          "Do not mix tax relief, debt settlement, and bankruptcy on one DID unless your intake is trained to fork. The talk tracks and the ethics rules are not the same.",
        ],
      },
      {
        heading: "Buying models and filters",
        paragraphs: [
          "Exclusive transfers protect firms that need a calm consultation. Shared can fill leftover capacity but expect shoppers. Cost per call should follow written qualify: debt situation, chapter interest if you split, state, not retained, hours.",
          "CPL works for consultation requests with debt range and state. Speed-to-lead still matters when garnishment is active.",
          "Filters: state of residence, debt type mix if you care, prior bankruptcy within your lookback, income/household if you screen means-test issues at a high level, language, exclusive vs shared, hours.",
          "RidgeRise supplies hybrid volume with quality monitoring. A qualified bankruptcy call is not a filed petition.",
        ],
      },
      {
        heading: "Qualification, quality, and briefing",
        paragraphs: [
          "Screen for state, rough debt picture, prior filing if relevant, retained counsel, and willingness to talk to an attorney now. Do not complete a full means test in the IVR.",
          "Watch sources for debt-settlement bait that dumps settlement shoppers onto bankruptcy attorneys. Cut those paths. Dispositions should label wrong product, already retained, prior filing kill, off geo.",
          "Seasonality is quieter than insurance AEP, but tax season, post-holiday debt, and layoff waves move volume. Cap to attorney consult capacity.",
          "Brief states, chapters you file, prior-filing rule, hours, concurrency, exclusive vs shared, invalids. /buyers for models, /contact with the chapter map.",
        ],
      },
    ],
  },

  "renters-insurance": {
    slug: "renters-insurance",
    lede:
      "Renters call when a lease requires proof of insurance, after a loss, or when a roommate situation changes. Age, state, and occupancy filters keep agents on quote-ready conversations. Buy CPL or cost per call when renters demand is strong enough to staff, and do not dump renters into a homeowners queue.",
    sections: [
      {
        heading: "Who's shopping renters coverage",
        paragraphs: [
          "Lease-requirement callers need a certificate or proof fast. Move-in dates are real deadlines. Soft shoppers comparing $15 policies are real too, but they behave differently on the phone. Split urgency if your agents handle both.",
          "Loss-driven callers had theft, water damage from upstairs, or a fire in the building. They want contents and liability explained. They may also be angry at a landlord. Keep the talk track on the policy, not the dispute.",
          "Roommate and student traffic is common. Decide whether the named insured must be on the lease, whether roommates can share, and whether parents calling for a student qualify. Write it into the brief.",
          "Own-vs-rent is the non-negotiable screen. Homeowners transferred into renters waste licensed time. Renters transferred into HO-3 do the same in reverse.",
        ],
      },
      {
        heading: "Models, filters, and qualification",
        paragraphs: [
          "Cost per call fits high-velocity renters desks. CPL fits form-to-callback with ZIP, move-in date, and occupancy. Exclusive vs shared depends on whether your quote takes two minutes or twenty.",
          "Filters: state, age band if carriers care, occupancy (student, roommate, family), move-in window, hours, concurrency. Geo at ZIP helps when your markets are picky on theft rings.",
          "IVR: rent vs own, state/ZIP, need proof by date if urgent. Reject homeowners if this campaign is renters-only.",
          "TCPA-aware consent for this renters offer. Quality-monitored sources. No guarantee every quote binds.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch for homeowners leakage, commercial occupancy, and fake move-in dates. Cut sources that drift. Duration on renters can be short and still good if the certificate issued.",
          "Who buys: carriers and multi-line agencies writing renters. Publishers: moving, apartment, and local-intent traffic tied to lease or ZIP.",
          "Brief states, occupancy rules, proof-of-insurance urgency handling, hours, exclusive vs shared. /buyers or /contact.",
        ],
      },
    ],
  },

  "commercial-auto-insurance": {
    slug: "commercial-auto-insurance",
    lede:
      "Commercial auto callers are business owners shopping fleet and commercial vehicle coverage, not personal auto with a work sticker. Fleet size, vehicle type, and state licensing change what a qualified call looks like. Filter commercial vs personal so agents are not quoting the wrong product.",
    sections: [
      {
        heading: "Who's calling for commercial auto",
        paragraphs: [
          "Owner-operators, small fleets, contractors with work trucks, delivery businesses, and companies adding drivers. They need scheduled autos, hired/non-owned, or a fleet policy. A personal auto shopper who 'sometimes uses the car for work' is usually the wrong queue unless you sell that endorsement path on purpose.",
          "Fleet size splits the desk. One to three units is a different conversation than fifteen. Radius, cargo, and driver MVR appetite change markets. If you only write light commercial, say so.",
          "You'll get people shopping after a non-renewal, a rate hike, a new contract that requires higher limits, or a DOT-related need. Intent is high. Underwriting still decides.",
          "Keep this campaign off personal auto DIDs. The IVR should ask business use / commercial vehicles early.",
        ],
      },
      {
        heading: "Models and filters",
        paragraphs: [
          "Cost per call and live transfers fit agencies with commercial producers on the board. CPL fits when you want VIN/list collection before a callback. Shared commercial auto is often painful because the file is complex and shopped.",
          "Filters: state licensing, fleet size band, vehicle types (light truck vs heavy), radius, new venture vs established, hours when commercial producers work. Overnight commercial auto into a personal lines night team is how you burn transfers.",
          "Qualification: commercial vs personal, approximate unit count, state, currently insured or not. Do not try to underwrite the whole risk in IVR.",
          "RidgeRise hybrid supply with source monitoring. A qualified commercial auto call is not a bound policy.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch personal-auto leakage and 'I need SR-22 on my personal car' dumps. Dispositions should label wrong product, too many units, wrong radius, unlicensed state.",
          "Brief: states, fleet bands, vehicle classes, producer hours, exclusive vs shared, invalids. /buyers or /contact with the appetite sheet.",
        ],
      },
    ],
  },

  "personal-loans": {
    slug: "personal-loans",
    lede:
      "Personal loan callers are shopping installment options for consolidation, expenses, or a specific purchase. Credit band, loan purpose, and state decide whether a caller is fundable. Filter hard so closers are not talking to people they cannot place.",
    sections: [
      {
        heading: "Who's shopping a personal loan",
        paragraphs: [
          "Debt consolidation, unexpected bills, home projects, and 'I need cash this week' all show up. Purpose changes pricing and compliance talk tracks. A consolidation shopper is not the same as a vacation loan if your lenders care.",
          "Credit band is the gate. Deep subprime, near-prime, and prime are different books. If your lenders floor at a score band, put it in qualification. Soft credit curiosity with no path to fund is expensive talk time.",
          "You'll get people who want a business loan, an auto loan, or a mortgage cash-out labeled as personal. Fork or reject. Wrong product destroys close rate and trainer morale.",
          "State licensing and lender coverage map the geo. National spray into states you cannot fund is wasted media.",
        ],
      },
      {
        heading: "Models, filters, qualification",
        paragraphs: [
          "CPL is common with application-style forms. Cost per call fits phone-first lenders and brokers. Exclusive helps when the pitch includes soft-pull expectations. Shared works for high-velocity broker rooms that can compete.",
          "Filters: credit band, purpose, loan amount range, state, employment if required, hours, concurrency, exclusive vs shared.",
          "Qualify purpose, state, rough credit self-report or band, amount range. Do not collect full SSN in a sketchy IVR. Application data belongs in a controlled path.",
          "TCPA-aware, campaign-specific consent for lending offers. No guaranteed approval language. A qualified call is not a funded loan.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Cut sources that send mortgage or MCA shoppers into personal loan. Watch for incentive traffic that fails funding. Dispute wrong state, below credit floor, wrong purpose if defined.",
          "Brief lender coverage, credit floors, purposes in/out, amount bands, hours. /buyers or /contact.",
        ],
      },
    ],
  },

  "credit-repair": {
    slug: "credit-repair",
    lede:
      "Credit repair callers usually want dispute help, score goals, and pricing explained on the phone. State compliance and exclusive vs shared routing protect closer capacity. Write qualification into the brief so soft credit curiosity does not fill the queue.",
    sections: [
      {
        heading: "Who's calling for credit repair",
        paragraphs: [
          "People with collections, charge-offs, late pays, or identity-theft messes who want a plan and a price. Some are shopping before a mortgage or auto purchase. Timing to a lending event changes urgency.",
          "Curiosity callers who want a 'quick score boost' with no tradelines and no patience for process will burn closers. Screen for willingness to engage a multi-month process if that is your model.",
          "State restrictions matter. Some states heavily regulate credit repair contracts and fees. Geo is not optional.",
          "Keep this off debt-settlement and personal-loan DIDs unless your room is trained to fork. The offer and the consent language differ.",
        ],
      },
      {
        heading: "Models and filters",
        paragraphs: [
          "Cost per call and warm transfers fit phone closers. CPL fits education-plus-callback funnels. Exclusive often fits long pitches. Shared fills volume but expect shoppers.",
          "Filters: state, score band or issue type if you specialize, hours, language, exclusive vs shared, concurrency.",
          "Qualify state, primary credit issues, and that they want repair services (not a loan). Campaign-specific consent. Compliance-conscious, not a legal guarantee.",
          "A qualified credit repair call is not a score guarantee and not an enrolled client until your process says so.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch loan-bait creative that dumps fundability shoppers onto repair closers. Cut it. Dispositions: wrong state, wants a loan only, already contracted elsewhere if that is a kill.",
          "Brief states you can enroll, talk-track limits, hours, exclusive vs shared. /buyers or /contact.",
        ],
      },
    ],
  },

  plumbing: {
    slug: "plumbing",
    lede:
      "Plumbing callers need repair or replacement: emergency leaks, clogged lines, water heaters, and remodel work. Emergency vs scheduled changes ticket size and talk track. Geo and homeownership filters keep techs on jobs they can run. Cap concurrency so your board is not overloaded while calls keep landing after hours.",
    sections: [
      {
        heading: "Who's calling a plumber",
        paragraphs: [
          "Emergency: active leak, no hot water, sewage backup, burst pipe. These callers want someone today. Scheduled: water heater replacement quotes, fixture installs, remodel rough-in. Mixing both on one untrained setter creates bad ETAs and angry homeowners.",
          "Homeownership matters for bigger jobs. Renters call about leaks too. Decide whether you take landlord-approved work or reject rentals.",
          "You'll get HOA and multi-unit calls that need different dispatch. If you only do single-family, filter.",
          "Keep plumbing off HVAC and water-mitigation DIDs unless you truly run a bundled home desk with a fork.",
        ],
      },
      {
        heading: "Models and filters",
        paragraphs: [
          "Pay per call fits emergency dispatch. CPL fits quote-request for replacements. Live transfers should pass emergency vs scheduled, ZIP, and owner/renter.",
          "Filters: service ZIP, emergency hours vs day crew, job types in/out (camera, repipe, slab), concurrency tied to trucks, exclusive vs shared.",
          "Qualification: ZIP in footprint, emergency or schedule, brief issue type, owner if required. Do not diagnose the whole house in IVR.",
          "A qualified plumbing call is not a completed job. Weather and water-main seasons spike volume. Cap to trucks.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Cut out-of-area and wrong-trade dumps (electrician, HVAC only). Dispute off-geo and renter-when-owner-required.",
          "Brief footprint, emergency coverage hours, job types, truck caps. /buyers or /contact.",
        ],
      },
    ],
  },

  windows: {
    slug: "windows",
    lede:
      "Window and door replacement callers want quotes for energy, comfort, or curb appeal projects. Homeownership, project size, and geo decide whether a call becomes an in-home estimate. Filter exclusive vs shared based on setter capacity before you scale.",
    sections: [
      {
        heading: "Who's requesting window quotes",
        paragraphs: [
          "Homeowners replacing fogged glass, drafty doubles, or a full elevation. Some want one bay. Some want the house. Project size changes setter talk track and closer calendar.",
          "Storm and insurance-adjacent window calls appear after weather. If you do not work insurance jobs, filter claim intent. If you do, screen claim status.",
          "Renters and 'I'm just pricing for a landlord' should match your policy. Owner-occupied is the usual gate.",
          "Do not mix roofing storm intent and windows on one campaign unless your storefront truly sells both with one screen.",
        ],
      },
      {
        heading: "Models, filters, quality",
        paragraphs: [
          "Cost per call and warm transfers into setters who book in-home estimates. CPL for photo-upload quote funnels. Exclusive fits long in-home sales cycles.",
          "Filters: ZIP footprint, owner, approximate window count band, storey limits, hours, concurrency to estimate slots.",
          "Qualify owner, ZIP, project scope band, timeline. A qualified call is not a signed contract.",
          "Brief footprint, product (vinyl, fiberglass, doors), estimate capacity. /buyers or /contact.",
        ],
      },
    ],
  },

  "water-damage": {
    slug: "water-damage",
    lede:
      "Water damage restoration callers need help after leaks, storms, and floods. Urgency is high. Geo, homeownership, and insurance-claim intent are the usual filters. Buyers who ignore response-time capacity overspend on calls they cannot dispatch. Match hours and concurrency to crew availability.",
    sections: [
      {
        heading: "Who's calling for water restoration",
        paragraphs: [
          "Active water: supply line break, upstairs overflow, storm intrusion, sewage backup. They want extraction and drying now. Category of water (clean vs sewage) changes crew and price. If you do not do black water, screen it.",
          "Insurance vs cash jobs behave differently. Claim intent, adjuster status, and deductible conversations belong in qualification when you can get them without killing the call.",
          "Commercial vs residential: if you only do homes, filter. Multi-unit can be a different dispatch plan.",
          "Keep this separate from plumbing repair-only unless you want a fork: stop the water vs remediate the house.",
        ],
      },
      {
        heading: "Models and filters",
        paragraphs: [
          "Pay per call / live transfer is the natural model for emergencies. CPL works for non-emergency moisture and quote follow-up. Shared emergency calls are brutal. Exclusive or tight caps usually fit better.",
          "Filters: ZIP drive-time, residential vs commercial, water category if you exclude sewage, insurance vs cash if you split, 24/7 vs day hours, concurrency to crews and trucks.",
          "Qualify: active water or recent event, ZIP, owner/authorized, insurance intent if needed. A qualified call is not a paid claim.",
          "Storm surge weeks need expandable caps and a plan to tighten after. Soft weeks after a spike are normal, do not burn good sources.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Cut dry 'I might have a little humidity' curiosity if you only buy emergencies. Cut out-of-area. Listen for misrepresentation of response time in publisher intros.",
          "Brief footprint, categories you run, hours, crew caps, insurance rules. /buyers or /contact.",
        ],
      },
    ],
  },

  "trade-schools": {
    slug: "trade-schools",
    lede:
      "Trade school callers explore HVAC, electrical, welding, CDL, allied health certificates, and other vocational programs. Enrollment teams need program and geo filters so transfers match what the school can start. CPL and cost-per-call both work when qualification happens before the handoff.",
    sections: [
      {
        heading: "Who's calling about trade programs",
        paragraphs: [
          "Career changers, recent grads, and working adults who want a shorter path than a four-year degree. They ask about program length, start dates, cost, and job outcomes. Keep outcome claims honest. Your creative and your advisors must match.",
          "Program match is everything. An HVAC shopper transferred into medical billing will feel baited. Map ad groups and IVR options to real programs with seats.",
          "Geo and campus radius matter for in-person labs. Online theory plus local labs still has a map. State authorization matters for distance components.",
          "Diploma/GED and age gates belong in the screen if required. Third-party parents calling need a rule.",
        ],
      },
      {
        heading: "Models, filters, qualification",
        paragraphs: [
          "Live transfers fit short-cycle trades with staffed advisors. CPL fits info sessions and application starts. Exclusive vs shared: shared is common; speed-to-lead wins.",
          "Filters: program list, modality, geo/radius, next start window, diploma/GED, age, hours, concurrency to advisors, duplicate window across campuses.",
          "Qualify program bucket, start window, geo, student on the line. Do not run a full FAFSA in IVR.",
          "A qualified trade-school call is not a seated start. Aid, documents, and orientation still sit on your side.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Cut sources that cannot hold a program screen. Pause full cohorts instead of retargeting into leftovers. TCPA-aware, campaign-specific consent, no guaranteed job placement claims.",
          "Brief program map, starts, geo, gates, hours. /buyers or /contact with the catalog that is actually starting.",
        ],
      },
    ],
  },

  "online-education": {
    slug: "online-education",
    lede:
      "Online education callers shop degree and certificate programs they can take remotely. They want program fit, pacing, and financing explained on the phone. Filter by program type and geo/authorization so enrollment advisors only take transfers they can start.",
    sections: [
      {
        heading: "Who's shopping online programs",
        paragraphs: [
          "Working adults, parents, and career advancers who need flexible pacing. They compare transfer credits, term length, and tuition. Some are shopping multiple schools the same week. Speed and honesty matter.",
          "Program and level splits: undergrad, grad, certificate, bootcamp-style. Dumping all into one 'online' queue trains advisors to mis-pitch.",
          "State authorization and where the student sits while studying are compliance and ops facts. Stale geo lists create avoidable invalids.",
          "Keep campus-only programs off this campaign unless you have a true fork.",
        ],
      },
      {
        heading: "Models and filters",
        paragraphs: [
          "CPL is common for longer-cycle degrees. Cost per call / warm transfers fit when advisors can start an application conversation live. Traffic into program-specific pages beats homepage dumps.",
          "Filters: program list, level, authorized states, start dates, diploma/GED, hours matching remote advisors across time zones if needed, exclusive vs shared, duplicates.",
          "Qualify program, state, start window, student on the line. Campaign-specific consent. No 'free college' bait.",
          "A qualified online education call is not an enrolled student.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch program bait-and-switch and unauthorized-state leakage. Cut drifting sources. Measure early signals (match, appointment keep, application start) before week-two seats.",
          "Brief authorization list, programs starting, advisor hours, gates. /buyers or /contact with a current state list, not last year's PDF.",
        ],
      },
    ],
  },
};
