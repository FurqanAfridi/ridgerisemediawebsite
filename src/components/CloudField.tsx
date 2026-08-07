/** Stronger cloud canopy — still sparse, more presence */
const CLOUDS = [
  {
    className: "cloud cloud--far",
    style: {
      top: "-2%",
      left: "-6%",
      width: "min(480px, 52vw)",
      opacity: 0.72,
    },
  },
  {
    className: "cloud cloud--mid",
    style: {
      top: "-3%",
      right: "-8%",
      width: "min(440px, 48vw)",
      opacity: 0.78,
    },
  },
  {
    className: "cloud cloud--near cloud--header",
    style: {
      top: "-6%",
      left: "calc(50% - min(340px, 38vw))",
      width: "min(680px, 76vw)",
      opacity: 0.85,
    },
  },
  {
    className: "cloud cloud--near",
    style: {
      top: "8%",
      left: "12%",
      width: "min(280px, 34vw)",
      opacity: 0.55,
    },
  },
] as const;

export function CloudField() {
  return (
    <div className="sky-layer" aria-hidden="true">
      <div className="sky-layer__haze sky-layer__haze--top" />
      <div className="sky-layer__haze sky-layer__haze--mist" />
      <div className="cloud-field">
        {CLOUDS.map((cloud, i) => (
          <div key={i} className={cloud.className} style={cloud.style}>
            <span className="cloud__body" />
            <span className="cloud__soft" />
          </div>
        ))}
      </div>
    </div>
  );
}
