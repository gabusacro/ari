export const metadata = {
  title: "Contact | Isla Capital",
  description: "Contact Isla Capital",
};

export default function ContactPage() {
  return (
    <article className="container-custom py-8 sm:py-section">
      <h1 className="font-serif text-2xl sm:text-h1 text-navy mb-block">Contact</h1>
      <section className="max-w-2xl mb-block">
        <p className="font-sans text-body-lg text-stone-text mb-6">
          For general inquiries, use the form below. We respond to messages in
          due course. We do not discuss trading, risk, or strategy by email.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-h3 text-navy mb-6">Send a message</h2>
        <form className="max-w-xl space-y-6" noValidate>
          <div>
            <label
              htmlFor="contact-name"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3"
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3"
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              className="w-full font-sans text-body text-stone-text bg-stone-light border border-stone-dark px-4 py-3"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block font-sans text-body-sm text-stone-text mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
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
