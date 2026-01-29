export const metadata = {
  title: "Our Approach | Isla Capital",
  description: "Isla Capital approach",
};

export default function ApproachPage() {
  return (
    <article className="container-custom py-8 sm:py-section">
      <h1 className="font-serif text-2xl sm:text-h1 text-navy mb-block">Our Approach</h1>
      <section className="max-w-2xl mb-block">
        <p className="font-sans text-body-lg text-stone-text mb-6">
          We combine structured risk management with undercurrent strategies and
          continuous performance oversight. Execution and risk are integrated at
          every stage.
        </p>
        <p className="font-sans text-body text-stone-text">
          Our framework is documented and applied consistently. We do not
          outsource core risk or execution decisions. All trading and risk
          decisions are made in-house under clear governance.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-h3 text-navy mb-4">
          Risk and execution
        </h2>
        <p className="font-sans text-body text-stone-text">
          Limits, monitoring, and escalation are defined in advance. Positions
          and exposure are reviewed on a regular basis. Changes to the
          framework require approval through our internal process.
        </p>
      </section>
    </article>
  );
}
