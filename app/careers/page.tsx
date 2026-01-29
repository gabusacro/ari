export const metadata = {
  title: "Careers | Isla Capital",
  description: "Careers at Isla Capital",
};

export default function CareersPage() {
  return (
    <article className="container-custom py-8 sm:py-section">
      <h1 className="font-serif text-2xl sm:text-h1 text-navy mb-block">Careers</h1>
      <section className="max-w-2xl mb-block">
        <p className="font-sans text-body-lg text-stone-text mb-6">
          We hire for roles in trading, risk, and operations. Open positions
          are listed when available. Applications are reviewed by our team.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-h3 text-navy mb-6">Apply</h2>
        <form className="max-w-xl space-y-6" noValidate>
          <div>
            <label
              htmlFor="careers-name"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Name
            </label>
            <input
              id="careers-name"
              type="text"
              name="name"
              required
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3"
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="careers-email"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Email
            </label>
            <input
              id="careers-email"
              type="email"
              name="email"
              required
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3"
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="careers-position"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Position of interest
            </label>
            <input
              id="careers-position"
              type="text"
              name="position"
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3"
            />
          </div>
          <div>
            <label
              htmlFor="careers-message"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Message
            </label>
            <textarea
              id="careers-message"
              name="message"
              rows={4}
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3 resize-y"
            />
          </div>
          <button
            type="button"
            className="font-sans text-body-sm font-medium text-white btn-gradient px-6 py-3 hover-fade rounded-sm min-h-[44px]"
          >
            Submit
          </button>
        </form>
      </section>
    </article>
  );
}
