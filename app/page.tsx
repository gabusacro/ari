import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://islacapital.com.ph/wp-content/uploads/2026/01/BG.png";

/* Three Pillars icons — bar chart + arrow, shield + check, target + arrow */
function IconBarChart() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-current"
      aria-hidden
    >
      <rect x="10" y="26" width="8" height="14" rx="1" fill="currentColor" />
      <rect x="20" y="18" width="8" height="22" rx="1" fill="currentColor" />
      <rect x="30" y="10" width="8" height="30" rx="1" fill="currentColor" />
      <path d="M24 4l4 6h-3v6h-2v-6h-3l4-6z" fill="currentColor" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-current"
      aria-hidden
    >
      <path
        d="M24 4L8 10v10c0 11 8 20 16 24 8-4 16-13 16-24V10L24 4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 24l6 6 12-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-current"
      aria-hidden
    >
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="6" fill="currentColor" />
      <path d="M24 6l-4 10h3v4h2v-4h3L24 6z" fill="currentColor" />
    </svg>
  );
}

const pillars = [
  {
    icon: IconBarChart,
    title: "Guiding Top Traders",
    description:
      "We select, guide, and oversee talented proprietary traders, providing them with robust tools and execution guidelines.",
  },
  {
    icon: IconShieldCheck,
    title: "Managing Risk",
    description:
      "We enforce rigorous risk oversight to ensure funding and capital allocation are balanced and focused on preserving capital.",
  },
  {
    icon: IconTarget,
    title: "Maximizing Performance",
    description:
      "We focus on sustainable and consistent profitability through a methodical and data-driven trading approach.",
  },
];

/* Our Edge section — bold style to match Three Pillars (shield+check, mountain/bars, magnifying+chart) */
function EdgeIconRisk() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-gold"
      aria-hidden
    >
      <path
        d="M20 4L6 10v9c0 9 6 17 14 20 8-3 14-11 14-20v-9L20 4z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 20l4 4 8-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function EdgeIconStrategies() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-gold"
      aria-hidden
    >
      {/* Bold mountain/three peaks — filled bars like Pillars bar chart */}
      <rect x="8" y="22" width="7" height="12" rx="1" fill="currentColor" />
      <rect x="16.5" y="14" width="7" height="20" rx="1" fill="currentColor" />
      <rect x="25" y="6" width="7" height="28" rx="1" fill="currentColor" />
    </svg>
  );
}

function EdgeIconOversight() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-gold"
      aria-hidden
    >
      {/* Magnifying glass lens — bold stroke; bar chart fully inside with margin */}
      <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth="3" fill="none" />
      {/* Bar chart inside lens — smaller, no overlap with circle edge */}
      <rect x="11" y="14" width="2.5" height="5" rx="0.5" fill="currentColor" />
      <rect x="14.25" y="11" width="2.5" height="8" rx="0.5" fill="currentColor" />
      <rect x="17.5" y="8" width="2.5" height="11" rx="0.5" fill="currentColor" />
      {/* Handle — bold stroke */}
      <path
        d="M23 23l9 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const edgeItems = [
  {
    icon: EdgeIconRisk,
    title: "Structured Risk Management",
    description:
      "We provide balanced risk management strategies that ensure traders execute safely and sustainably.",
  },
  {
    icon: EdgeIconStrategies,
    title: "Uncorrelated Strategies",
    description:
      "Our approach emphasizes diversification, ensuring traders deploy strategies that are uncorrelated with markets.",
  },
  {
    icon: EdgeIconOversight,
    title: "Performance Oversight",
    description:
      "We provide the strategic process, views, and continuous support to maximize trader performance.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — left-aligned, no logo in body */}
      <section className="relative w-full min-h-[24rem] h-[28rem] sm:h-[36rem] flex items-center overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 bg-navy-dark opacity-80 z-[1]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 container-custom py-6 sm:py-10 text-center md:text-left">
          <div className="relative max-w-2xl mx-auto md:mx-0">
            <h1 className="font-serif font-normal text-2xl sm:text-h1 md:text-display tracking-wide mb-3 sm:mb-5 hover:font-bold transition-[font-weight] duration-150">
              <span className="text-stone-light">PROP TRADING.</span>{" "}
              <span className="text-gradient-hero">SMARTER.</span>
            </h1>
            <p className="font-sans text-body sm:text-body-lg text-stone-light mb-3 max-w-lg mx-auto md:mx-0">
              Guiding Traders, Managing Risk,
              <br />
              Maximizing Performance.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 sm:mt-8 justify-center md:justify-start">
              <Link
                href="/approach"
                className="inline-flex items-center justify-center gap-2 font-sans text-body sm:text-body-lg font-semibold text-white btn-gradient px-8 sm:px-10 py-3.5 hover-fade no-underline uppercase tracking-wide rounded-xl min-h-[48px] min-w-[12rem] sm:min-w-[14rem]"
              >
                Our Approach
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second section — DISCIPLINED SUCCESS */}
      <section className="container-custom pt-12 pb-4 sm:pt-16 sm:pb-6">
        <h2 className="font-serif font-semibold text-xl sm:text-h2 text-navy mb-5 text-center max-w-3xl mx-auto tracking-wide hover:font-bold transition-[font-weight] duration-150 whitespace-nowrap">
          DISCIPLINED SUCCESS IN PROPRIETARY TRADING
        </h2>
        <p className="font-sans text-body sm:text-body-lg text-stone-text max-w-3xl mx-auto text-center leading-relaxed">
          Isla Capital is a leading proprietary trading firm specializing in
          guiding and nurturing skilled traders. We are committed to
          disciplined success, unwavering risk management, and sustainable
          profitability.
        </p>
        <div className="mt-6 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-gradient-to-r from-gold/60 to-gold/30" aria-hidden />
        </div>
      </section>

      {/* Three Pillars — balanced spacing (cards + button) */}
      <section className="container-custom pt-6 pb-8 sm:pt-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col items-center bg-stone-light rounded-card-lg shadow-card card-lift p-6 sm:p-7"
            >
              <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-stone-light mx-auto">
                <Icon />
              </div>
              <h3 className="font-serif text-h3 text-navy mb-3 tracking-tight font-semibold text-center group-hover:font-bold transition-[font-weight] duration-150">{title}</h3>
              <p className="font-sans text-body text-stone-text leading-relaxed m-0 flex-1 text-center">
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/approach"
            className="inline-block font-sans text-body font-medium text-white btn-gradient px-6 py-3 hover-fade no-underline uppercase tracking-wide rounded-xl min-h-[44px] w-fit"
          >
            Learn About Our Approach
          </Link>
        </div>
      </section>

      {/* Our Edge — enhanced icons; left block vertically centered on desktop; centered on mobile */}
      <section className="bg-navy py-6 sm:py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-h1 text-[#c9b896] tracking-wide mb-block uppercase hover:font-bold transition-[font-weight] duration-150">
                Our Edge
              </h2>
              <p className="font-sans text-body sm:text-body-lg text-stone-light max-w-md leading-relaxed lg:max-w-none mx-auto lg:mx-0">
                Isla Capital sets itself apart with superior risk management,
                trader development, and disciplined execution. We provide the
                right tools and culture to thrive in proprietary trading.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 lg:col-span-7 list-none m-0 p-0">
              {edgeItems.map(({ icon: Icon, title, description }) => (
                <li key={title}>
                  <article className="group relative flex flex-col lg:flex-row gap-4 sm:gap-5 items-center lg:items-start text-center lg:text-left rounded-card-lg bg-navy-light/80 border border-white/10 p-5 sm:p-6 shadow-card-dark transition-shadow duration-200 hover:shadow-card-dark-hover">
                    <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-navy flex items-center justify-center border border-navy-light [&_svg]:w-full [&_svg]:h-full">
                      <Icon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-h4 text-[#c9b896] mb-2 uppercase tracking-wide group-hover:font-bold transition-[font-weight] duration-150">
                        {title}
                      </h3>
                      <p className="font-sans text-body text-stone-light m-0 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
