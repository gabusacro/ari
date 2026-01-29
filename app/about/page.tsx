export const metadata = {
  title: "About Us | Isla Capital",
  description: "About Isla Capital",
};

export default function AboutPage() {
  return (
    <article className="container-custom py-8 sm:py-section">
      <h1 className="font-serif text-2xl sm:text-h1 text-navy mb-block">About Us</h1>
      <section className="max-w-2xl">
        <p className="font-sans text-body-lg text-stone-text mb-6">
          Isla Capital is a private proprietary trading firm. We operate with a
          focus on disciplined execution, structured risk management, and
          performance oversight.
        </p>
        <p className="font-sans text-body text-stone-text">
          Our team combines experience in trading, risk, and operations. We do
          not manage external client capital; we trade proprietary capital under
          our own framework and policies.
        </p>
      </section>
    </article>
  );
}
