export type OnboardingStep = {
  num: string;
  title: string;
  body: string;
  icon: string;
  mint: boolean;
};

type OnboardingJourneyProps = {
  headingId: string;
  eyebrow: string;
  heading: string;
  subhead: string;
  steps: readonly OnboardingStep[];
};

export function OnboardingJourney({
  headingId,
  eyebrow,
  heading,
  subhead,
  steps,
}: OnboardingJourneyProps) {
  return (
    <section className="buy-flow" aria-labelledby={headingId}>
      <div className="buy-flow__layout">
        <div className="buy-flow__sticky">
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h2 id={headingId} className="section-title section-title--md">
            {heading}
          </h2>
          <p className="section-sub section-sub--sm">{subhead}</p>
          <ol className="buy-flow__toc" aria-hidden="true">
            {steps.map((step, index) => (
              <li
                key={step.num}
                className={`buy-flow__toc-item${index === 0 ? " is-active" : ""}`}
                data-step={step.num}
              >
                <span>{step.num}</span>
                <em>{step.title}</em>
              </li>
            ))}
          </ol>
        </div>

        <div className="buy-flow__board">
          <div className="buy-flow__rail" aria-hidden="true">
            <span className="buy-flow__rail-track" />
            <span className="buy-flow__rail-fill" />
          </div>
          <ol className="buy-flow__steps">
            {steps.map((step, index) => (
              <li
                key={step.num}
                className={`buy-flow__step${step.mint ? " buy-flow__step--mint" : ""}${index === 0 ? " is-active" : ""}`}
                data-step={step.num}
              >
                <span className="buy-flow__node" aria-hidden="true">
                  {step.num}
                </span>
                <article
                  className="buy-flow__card"
                  tabIndex={0}
                  onFocus={(event) => {
                    event.currentTarget.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    });
                  }}
                >
                  <span className="buy-flow__icon" aria-hidden="true">
                    <img src={step.icon} alt="" width={30} height={30} />
                  </span>
                  <div className="buy-flow__card-copy">
                    <span className="buy-flow__n">Step {step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
