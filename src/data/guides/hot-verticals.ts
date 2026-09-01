import type { VerticalGuide } from "../vertical-guide-types";

/** Long-form guides for Hot RidgeRise verticals and other catalog gaps. */
export const hotVerticalGuides: Record<string, VerticalGuide> = {
  "ssi-signed-retainer": {
    slug: "ssi-signed-retainer",
    lede:
      "SSI signed-retainer callers need help with Supplemental Security Income claims, denials, and appeals when representation requires a retainer-ready file. Qualification usually includes claim status, prior counsel, income and asset screens, and whether the caller meets your firm's retainer criteria. Buy CPL or cost per call with those rules in writing before volume scales, because a generic disability dump will mix SSDI-only shoppers, curiosity traffic, and already-represented claimants on one board.",
    sections: [
      {
        heading: "Who's calling about SSI representation",
        paragraphs: [
          "The useful caller is pursuing or defending an SSI claim and wants a lawyer or advocate who can take the case on a retainer or contingency structure your firm actually offers. Many have a denial letter. Some are filing for the first time and do not know whether SSI or SSDI applies. Some were cut off after a redetermination or a change in living arrangement.",
          "SSI is needs-based. Income, resources, living situation, and household composition matter as much as medical severity. A caller who clearly exceeds resource limits may not be an SSI file even if they sound disabled. Your brief should say whether non-SSI disability calls are a fork, a reject, or a separate campaign.",
          "Retainer-ready does not mean signed on the first call. It means the caller meets your firm's intake criteria for engagement: claim status you handle, geo you cover, not already represented for this claim, and willingness to proceed under your fee agreement. Write what 'retainer-ready' means operationally so qualifiers and publishers do not guess.",
          "Family members call. Parents for adult children. Spouses. Decide whether third-party callers qualify if the claimant can join live. SSI files often involve vulnerable callers; train screeners to be patient without giving legal advice.",
        ],
      },
      {
        heading: "SSI vs SSDI and why product split matters",
        paragraphs: [
          "SSI and SSDI share a disability story but different funding rules. A campaign labeled 'disability' without a product fork will send SSDI-only callers to an SSI retainer desk and vice versa. If you buy SSI signed retainer volume, the IVR or live qualifier should confirm SSI intent or eligibility path, not just 'can't work.'",
          "Concurrent claims happen. Some callers do not know which program they applied for. Your intake may need a short triage. That triage belongs in the brief, not improvised on a recorded line.",
          "Appeals levels differ by program and timing. Initial application, reconsideration, ALJ hearing, and federal court are different work. If you only take hearing-level SSI files, say so before media runs.",
          "Keep personal injury, workers' comp, and generic 'get benefits fast' creative off this DID. Wrong product destroys close rate and creates TCPA complaints when the offer does not match the landing page.",
        ],
      },
      {
        heading: "Models: cost per call, CPL, transfers, and traffic",
        paragraphs: [
          "Exclusive live transfers fit firms that need a full fact pattern before retainer paperwork goes out. Shared disability calls are often already shopping advocates. If your retainer process takes twenty minutes, shared will hurt you unless your closers are built for speed.",
          "Cost per call and pay per call should bill against written rules: SSI intent or eligibility path, state you cover, claim status in/out, not already retained, hours your intake answers, and duration floors that match a real consult—not a wrong-number hang-up.",
          "CPL works when your team outbound dials fast after a form with claim status, state, and contact path. A disability CPL that sits overnight in a competitive metro is often already signed elsewhere. Staff the dialer or buy live transfers.",
          "Qualified traffic into a firm-owned page is fine when the page screens SSI vs SSDI and captures campaign-specific consent. RidgeRise runs in-house media buying plus screened partners with quality monitoring against your brief. A qualified call is not a signed retainer.",
        ],
      },
      {
        heading: "Filters, qualification, and compliance",
        paragraphs: [
          "Geo is the states where you are licensed or have co-counsel you actually use. National spray into states you cannot file in wastes media and creates angry callers.",
          "Claim status filters: new application, denied, pending reconsideration, hearing scheduled, already represented. Retained-counsel is usually a kill. 'I talked to someone' is not the same as signed—train screeners to ask clearly.",
          "Income and resource questions are sensitive. Decide how much the IVR collects vs intake. Never promise approval, payment amounts, or back-pay figures in publisher creative.",
          "TCPA-aware, campaign-specific consent for this legal offer. Compliance-conscious processes with recording review where applicable. We will not certify zero legal risk.",
        ],
      },
      {
        heading: "Quality monitoring and how to brief",
        paragraphs: [
          "Listen for SSDI-only dumps, wrong state, already retained misses, and creative that promises a check instead of representation. Source-level cutoffs matter because one publisher can flood retained shoppers while duration still looks fine.",
          "Dispute invalids that match the brief: wrong program, wrong geo, retained, off-hours if excluded, duplicates inside your window. Do not dispute 'didn't sign.' Signing is intake's job.",
          "Who buys: SSI and disability advocates, legal intake partners with retainer workflows, and firms with dedicated SSI desks. Publishers: benefits and disability-intent traffic with a clean SSI screen.",
          "Brief: states, claim-status map, retainer criteria, retained rule, hours, concurrency, exclusive vs shared, duration, invalid list. Start on /buyers or /contact with a sample call you were happy to pay for.",
        ],
      },
    ],
  },

  "hospital-indemnity": {
    slug: "hospital-indemnity",
    lede:
      "Hospital indemnity callers shop supplemental coverage that pays cash benefits for hospital stays, admissions, and related events—not major medical replacement. Age, state licensing, and product type decide whether a licensed agent can place the policy. Buy CPL or cost per call with those filters before you scale, and keep major-medical-only agents off a hospital indemnity queue.",
    sections: [
      {
        heading: "Who's shopping hospital indemnity",
        paragraphs: [
          "Callers often already have Medicare, employer coverage, or an ACA plan. They want gap protection for copays, deductibles, and per-day hospital benefits. Some are seniors comparing Medicare supplement alternatives. Some are working adults who saw a hospital bill and want catastrophic cushion.",
          "Intent is usually educational first: what triggers a benefit, pre-existing limitations, waiting periods, and price. Phone-first shoppers want a licensed agent to explain benefit tiers, not a rate table that assumes they know indemnity from major medical.",
          "Confusion with short-term medical, accident-only, and critical illness is common. If your desk only sells hospital indemnity, fork or reject the others early. Wrong-product transfers burn licensed time.",
          "You'll hear caregivers calling for parents. Decide whether the policy owner must be on the line and how you handle third-party authorization.",
        ],
      },
      {
        heading: "Medicare, under-65, and product routing",
        paragraphs: [
          "Hospital indemnity sits in different conversations for Medicare eligibles vs under-65 worksite and individual buyers. Creative and IVR should not promise 'free health insurance.' Supplemental hospital benefits are the honest frame.",
          "If you also sell Medicare Advantage or ACA, decide whether hospital indemnity is a cross-sell after qualification or a standalone campaign. Mixing without a fork creates compliance and close-rate problems.",
          "State licensing and carrier appointments map geo. A national dump into states you cannot write is wasted spend. Hours should match when licensed agents are on the board.",
          "Senior call patterns favor mornings and early evenings. Match concurrency to agent capacity so hold time does not kill connect quality.",
        ],
      },
      {
        heading: "Models and billable rules",
        paragraphs: [
          "Cost per call and live transfers fit phone-first agencies with licensed health producers. CPL fits form-to-callback when speed-to-lead is under five minutes. Exclusive vs shared depends on how long your benefit explanation takes.",
          "Billable rules should include: age band in/out, state licensed, product intent (hospital indemnity vs major medical), duration floor, and disposition criteria for wrong product or unlicensed state.",
          "Qualified traffic into a compliant landing page works when your page explains supplemental benefits clearly and captures consent for this offer. RidgeRise can run traffic alongside calls with source-level monitoring.",
          "Pricing belongs on a call against your target cost per sale assumptions. We will not invent rate tables or close rates on this page.",
        ],
      },
      {
        heading: "Qualification before transfer",
        paragraphs: [
          "A practical screen: state, age band, currently insured or not, shopping hospital indemnity specifically, and whether they need a licensed agent now vs literature later.",
          "Reject or fork major-medical-only shoppers if this campaign is indemnity-only. Reject Medicare shoppers if you only write under-65, unless that is your brief.",
          "Pre-existing and waiting-period questions belong in agent talk tracks, not IVR guarantees. Screeners qualify intent; agents explain policy terms.",
          "Campaign-specific consent and TCPA-aware follow-up on the path that generated the call.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch for ACA and MA bait-and-switch creative. Cut sources that dump major-medical quote seekers onto indemnity agents. Review recordings for misleading 'government benefit' language.",
          "Who buys: health agencies, senior-focused call centers, and brokers with supplemental health authority. Publishers: senior, health education, and benefits-intent traffic with clear supplemental positioning.",
          "Brief: states, age bands, product split, hours, concurrency, exclusive vs shared, duration, invalid list. /buyers or /contact with your appointment map.",
        ],
      },
    ],
  },

  "pest-control": {
    slug: "pest-control",
    lede:
      "Pest control callers want termites, rodents, bed bugs, or general extermination handled on a timeline they can trust. Local intent, homeownership, and pest type decide whether a call becomes a booked service. Buy pay per call or CPL with geo and capacity filters matched to your trucks, because national spray into markets you do not serve is the fastest way to burn a pest campaign.",
    sections: [
      {
        heading: "Who's calling a pest control company",
        paragraphs: [
          "Emergency callers saw roaches, rodents, wasps, or bed bugs and want someone today or tomorrow. Inspection callers want a termite letter for a refinance or sale. Prevention shoppers want quarterly service quotes. Each path needs a different talk track and truck type.",
          "Homeownership matters for termite treatment and whole-structure work. Renters call about unit infestations—decide whether you need landlord approval or you reject rentals.",
          "Multi-family and commercial accounts appear on the same numbers as residential if creative is broad. If you only run residential trucks, filter commercial and property-manager calls early.",
          "Seasonality moves ants, mosquitoes, and rodent pressure by region. Cap volume to dispatch capacity when weather spikes, then tighten sources instead of letting ETAs slip.",
        ],
      },
      {
        heading: "Geo, pest type, and routing",
        paragraphs: [
          "Pest control is hyper-local. ZIP or county footprints beat state-level buying. A source that looks fine statewide may be a dump of out-of-area clicks from cheap display.",
          "Pest type splits routes: termite/WDO inspections, bed bug heat jobs, general pest, wildlife. If you subcontract wildlife, say so in qualification. Do not promise same-day bed bug if your nearest crew is two days out.",
          "Hours should match dispatch, not just sales. Overnight pest emergencies happen; if you only book 9–5, reject after-hours or buy CPL for morning callback.",
          "Concurrency caps protect technicians. A pest inspection is not a two-minute final expense pitch. Match live transfer volume to open appointment slots.",
        ],
      },
      {
        heading: "Models: pay per call, CPL, and transfers",
        paragraphs: [
          "Pay per call and live transfers fit dispatch-heavy operations with someone answering live. CPL fits quote-request funnels when speed-to-lead is measured in minutes, not hours.",
          "Billable rules: in-footprint ZIP, pest category if you split, owner/renter policy, duration floor, emergency vs quote intent if priced differently.",
          "Exclusive vs shared: shared local service calls get shopped. Exclusive costs more but protects your setter from a three-way quote race.",
          "RidgeRise runs in-house media plus screened partners. A qualified pest control call is not a completed treatment.",
        ],
      },
      {
        heading: "Qualification and compliance",
        paragraphs: [
          "IVR or live screen: ZIP, pest type bucket, emergency vs schedule, owner if required, and whether the issue is active now.",
          "Do not diagnose species in IVR beyond buckets. Technicians confirm on site.",
          "Campaign-specific consent for calls and texts about this service offer. TCPA-aware processes; compliance-conscious, not a legal guarantee.",
          "Reject wrong trade (lawn only, plumbing) and out-of-area before transfer when possible.",
        ],
      },
      {
        heading: "Quality monitoring and briefing",
        paragraphs: [
          "Cut sources with high out-of-geo rate or commercial leakage when you buy residential. Listen for ETA promises publishers make that dispatch cannot keep.",
          "Dispute off-geo, wrong pest category if excluded, renter-when-owner-required, and duplicate windows per your brief.",
          "Who buys: local pest operators, regional brands, and home-services networks with routed dispatch. Publishers: local search, social, and home-intent traffic with ZIP targeting.",
          "Brief: footprint map, pest types in/out, emergency hours, truck caps, exclusive vs shared. /buyers or /contact.",
        ],
      },
    ],
  },

  "final-expense-inbounds": {
    slug: "final-expense-inbounds",
    lede:
      "Final expense inbound callers dial ready to talk about burial, cremation, and smaller face-amount whole life—not term life or large face policies. Age bands, state licensing, and exclusive vs shared routing protect senior agents from junk and three-way shops. Buy inbound and live transfers on cost per call with duration and disposition rules written before volume scales.",
    sections: [
      {
        heading: "Who's on a final expense inbound call",
        paragraphs: [
          "Callers are typically 50–85, phone-first, and deciding on coverage for funeral costs and family peace of mind. Many compare a few carriers the same week. Some call after a family death made costs real. Some respond to mail or digital creative about burial expense.",
          "Inbound intent is hotter than raw lead forms because the caller chose to dial. That does not mean every inbound is fundable. Health questions, face amount limits, and state licensing still gate the sale.",
          "Confusion with Medicare, ACA, and mortgage protection is common on shared numbers. If this campaign is final expense only, fork or reject health insurance intent immediately.",
          "Caregivers and adult children call for parents. Decide whether the insured must be on the line to proceed.",
        ],
      },
      {
        heading: "Inbound vs transfer vs CPL",
        paragraphs: [
          "Pure inbound calls hit your DID from paid search, social, or partner paths. Live transfers add a qualification layer before the agent connects. CPL feeds a dialer queue. Inbound and transfers cost more but usually convert faster when agents are staffed.",
          "Exclusive inbound protects agents from the same senior shopping three FE shops in an afternoon. Shared inbound is a volume play for high-velocity rooms that can compete on price and speed.",
          "Duration floors should match a real FE pitch, not a wrong-number bounce. Buffer time between transfers helps agents wrap notes without stacking seniors on hold.",
          "Warm transfers with a short intro outperform cold dumps when agents need health questions upfront.",
        ],
      },
      {
        heading: "Age, health, and state filters",
        paragraphs: [
          "Age band is the primary gate. Carriers differ on issue ages and graded vs level benefit. Put accepted ages in the brief, not 'seniors.'",
          "Health tiers matter. Guaranteed issue, graded, and simplified issue are different products. If you only write simplified issue, screen graded shoppers out before transfer.",
          "Geo follows state licensing and carrier appointments. FE is phone-heavy but not license-free. Match hours to when licensed agents answer.",
          "Concurrency caps prevent seniors from sitting in hold queues—a fast way to kill close rate on inbound you paid for.",
        ],
      },
      {
        heading: "Compliance and creative standards",
        paragraphs: [
          "Senior-focused creative attracts regulatory attention. Avoid government-benefit implication, guaranteed acceptance without conditions, and cash-gift framing that sounds like a public program.",
          "TCPA-aware consent on the path that generated the call. Recording review where applicable. Campaign-specific rules per offer.",
          "Screeners must not guarantee approval or quote premiums without licensed agents. Qualify age, state, intent, and health bucket if allowed.",
          "A qualified final expense inbound is not an issued policy.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch Medicare leakage, under-age curiosity, and shared-number shopping on recordings. Cut publishers that drift creative away from burial expense.",
          "Dispute wrong age band, wrong state, Medicare-only intent if excluded, and retained-agent scenarios per your rules.",
          "Who buys: FE specialists, senior life agencies, and call centers with licensed FE floors. Publishers: senior search, native, and call-path offers with compliant FE positioning.",
          "Brief: age map, health tiers, states, exclusive vs shared, hours, duration, invalid list. /buyers or /contact.",
        ],
      },
    ],
  },

  "bathroom-remodel": {
    slug: "bathroom-remodel",
    lede:
      "Bathroom remodel callers want tub-to-shower conversions, walk-in tubs, tile, vanities, and full bath refreshes—not a whole-home renovation unless you sell that. Homeownership, project scope, and geo decide whether a call becomes an in-home estimate. Buy cost per call or CPL with ZIP-level filters and setter capacity caps before you scale walk-in tub offers nationally.",
    sections: [
      {
        heading: "Who's requesting a bathroom remodel",
        paragraphs: [
          "Aging-in-place callers want walk-in tubs, grab bars, and curbless showers. Value shoppers want a cosmetic refresh before sale. Damage-driven callers had a leak, mold, or failed tile and need remediation plus rebuild.",
          "Project scope changes the setter script. One wet area vs full gut remodel vs multi-bath whole home are different tickets and different crews. Qualify scope band before the in-home visit.",
          "Homeownership is the usual gate. Renters and 'landlord will pay' calls need a policy. HOAs and condo rules can block certain exterior venting or structural work—know if that matters in your markets.",
          "Keep roofing, kitchen-only, and generic handyman traffic off this campaign unless you truly run a bundled remodel desk with a fork.",
        ],
      },
      {
        heading: "Geo, financing, and appointment capacity",
        paragraphs: [
          "Remodel is drive-time business. ZIP or county footprints with realistic drive-time caps beat state-wide spray. A cheap source sending rural jobs three hours from your showroom burns setters.",
          "Financing questions appear early on higher-ticket bath conversions. Decide whether setters can discuss financing generally or must defer to in-home. Never promise approval in publisher creative.",
          "In-home estimate slots are the bottleneck. Cap concurrent live transfers to open calendar blocks. Selling more appointments than closers can run creates no-shows and bad reviews.",
          "Seasonality and weather matter less than trades like roofing, but tax-refund and spring remodel windows move volume. Plan caps around crew availability.",
        ],
      },
      {
        heading: "Models and billable rules",
        paragraphs: [
          "Cost per call and warm transfers into setters who book in-home estimates. CPL for photo-upload or virtual quote funnels when speed-to-lead is tight.",
          "Billable: owner-occupied if required, ZIP in footprint, scope band in/out (walk-in tub vs full remodel), duration floor, disposition for wrong trade.",
          "Exclusive fits long in-home sales cycles. Shared fills boards when setters can compete on speed and financing story.",
          "RidgeRise hybrid supply with source monitoring. A qualified bath call is not a signed contract.",
        ],
      },
      {
        heading: "Qualification before the visit",
        paragraphs: [
          "Screen: owner vs renter, ZIP, project type bucket, timeline (urgent vs shopping), and whether both decision-makers can attend estimate if you require that.",
          "Reject kitchen-only, exterior-only, and commercial when residential bath is the campaign.",
          "Do not quote installed price in IVR. Range language belongs to licensed sales process on the phone or in home.",
          "TCPA-aware consent for this remodel offer on the generating path.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Cut out-of-area and wrong-scope sources. Listen for unrealistic same-day install promises in publisher intros.",
          "Dispute off-geo, renter-when-owner-required, and scope outside brief.",
          "Who buys: bath remodel specialists, walk-in tub dealers, and regional remodel brands with setter teams. Publishers: home improvement intent with ZIP targeting.",
          "Brief: footprint, scope map, financing talk-track limits, estimate capacity, hours, exclusive vs shared. /buyers or /contact.",
        ],
      },
    ],
  },

  pharmacy: {
    slug: "pharmacy",
    lede:
      "Pharmacy and prescription-benefit callers ask about medication costs, discount cards, Medicare Part D, PAP programs, and supplemental health products tied to pharmacy spend. Product type and state licensing decide whether a licensed agent can help. Buy CPL or cost per call with tight product forks so health agents are not explaining unrelated insurance lines on one number.",
    sections: [
      {
        heading: "Who's calling on pharmacy-related offers",
        paragraphs: [
          "Seniors compare Part D plans during AEP and when formularies change mid-year. Under-65 callers want discount programs, cash-pay options, or help affording brand drugs. Some respond to creative about 'prescription benefits' without knowing which product they need.",
          "Intent ranges from education to immediate enrollment. A caller who wants a single coupon is different from a caller choosing a Part D plan during AEP. Split urgency and product when you can.",
          "Caregivers call for parents managing multiple medications. Decide whether the beneficiary must join and how you document authorization.",
          "Keep final expense, ACA-only, and personal injury off pharmacy DIDs unless your floor is built to fork cleanly.",
        ],
      },
      {
        heading: "Part D, discount cards, and supplemental paths",
        paragraphs: [
          "Medicare Part D requires licensed agents during defined enrollment windows and SEP rules. Discount card programs may not. Mixing them on one campaign without IVR forks creates compliance risk and angry callers.",
          "Hospital indemnity and cancer plans sometimes ride alongside pharmacy creative. If you do not sell those products, reject early.",
          "State licensing still applies to Medicare products. Geo filters follow appointments, not optimism.",
          "Creative must not imply Social Security or CMS endorsement. Senior pharmacy offers attract scrutiny—keep copy factual.",
        ],
      },
      {
        heading: "Models and filters",
        paragraphs: [
          "Cost per call fits licensed Medicare floors during AEP/OEP. CPL fits discount-card and callback programs with fast dial rules.",
          "Filters: state, age band, product bucket (Part D vs discount vs supplemental), enrollment window if applicable, hours, concurrency.",
          "Billable duration should reflect a real benefits conversation, not a misroute hang-up.",
          "Qualified traffic works when landing pages explain the product plainly and capture consent. RidgeRise monitors sources against your brief.",
        ],
      },
      {
        heading: "Qualification and compliance",
        paragraphs: [
          "Screen: state, age, product intent, whether they have Medicare A/B if selling Part D, and whether they want a licensed agent now.",
          "Do not collect PHI in a non-HIPAA IVR. Medication lists belong in controlled intake systems.",
          "TCPA-aware, campaign-specific consent. Compliance-conscious processes; not a guarantee of regulatory outcomes.",
          "A qualified pharmacy-benefit call is not an enrolled plan or active card until your process completes.",
        ],
      },
      {
        heading: "Quality and briefing",
        paragraphs: [
          "Watch for FE and ACA bait creative on pharmacy campaigns. Cut sources with high wrong-product dispositions.",
          "Dispute wrong state, wrong product, outside enrollment window if excluded, and duplicate rules per brief.",
          "Who buys: health agencies, Medicare call centers, and benefit enrollment teams. Publishers: senior health and prescription-cost intent with clear product labels.",
          "Brief: product map, states, age bands, windows, hours, exclusive vs shared. /buyers or /contact.",
        ],
      },
    ],
  },
};
