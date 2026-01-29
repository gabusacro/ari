export const metadata = {
  title: "Traders | Isla Capital",
  description: "Isla Capital traders",
};

export default function TradingPage() {
  return (
    <article className="container-custom py-8 sm:py-section">
      <h1 className="font-serif text-2xl sm:text-h1 text-navy mb-block">Traders</h1>
      <section className="max-w-2xl">
        <p className="font-sans text-body-lg text-stone-text mb-6">
          We trade proprietary capital only. Our activities are governed by
          internal risk and compliance policies. We do not offer trading
          services or managed accounts to third parties.
        </p>
        <p className="font-sans text-body text-stone-text">
          Strategy selection, sizing, and exit rules are set within our
          framework. Performance is tracked and reviewed against our own
          benchmarks and limits. All trading is conducted in-house.
        </p>
      </section>
    </article>
  );
}
