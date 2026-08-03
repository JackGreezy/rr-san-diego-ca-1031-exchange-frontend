import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ContactFormWrapper } from "@/app/contact/contact-form";
import site from "@/content/site.json";
import { locationsData, propertyTypesData } from "@/data";
import { SITE_URL } from "@/lib/constants";

const phoneHref = `tel:+1${site.phoneDigits}`;

const ownerSituations = [
  {
    title: "Planning a Property Sale",
    copy: "Start before the sale closes so the exchange structure, qualified intermediary, replacement criteria, and advisor questions can be handled in the right order.",
    href: "/services/capital-gains-on-rental-property",
  },
  {
    title: "Already Under Contract",
    copy: "There may still be time to protect the exchange. Call now so the closing date, intermediary setup, identification window, and next decisions can be reviewed quickly.",
    href: "/services/45-day-identification-strategy",
  },
  {
    title: "Selling Inherited Property",
    copy: "Organize ownership, basis questions, intended use, co-owner goals, and sale timing before a contract narrows the available choices.",
    href: "/services/inherited-property-capital-gains",
  },
  {
    title: "Done Managing Property",
    copy: "Compare another direct property with net-lease and passive DST alternatives when tenants, repairs, leasing, and capital projects no longer fit your life.",
    href: "/services/passive-real-estate-income",
  },
  {
    title: "Need Replacement Property",
    copy: "Build a practical search around your exchange equity, debt, income goals, desired control, management tolerance, location, and credible backup choices.",
    href: "/services/nnn-replacement-property-identification",
  },
  {
    title: "Want to Buy First",
    copy: "Explore reverse-exchange timing and financing questions when the right replacement opportunity appears before the current property is sold.",
    href: "/services/reverse-exchange-readiness-san-diego",
  },
];

const solutionCards = [
  {
    title: "Clarify the Sale",
    copy: "Bring the property, ownership, expected equity, debt, closing date, and reason for selling into one useful starting conversation.",
  },
  {
    title: "Assemble the Right Team",
    copy: "Connect the moving parts with the independent qualified intermediary, CPA, attorney, broker, lender, and other licensed professionals the transaction requires.",
  },
  {
    title: "Define the Replacement",
    copy: "Turn income, control, geography, financing, management burden, and closing probability into a written property brief.",
  },
  {
    title: "Find Primary and Backup Options",
    copy: "Review direct property, net-lease opportunities, passive alternatives, and realistic backups before the identification period becomes a crisis.",
  },
  {
    title: "Compare Ownership Paths",
    copy: "See how control, management, financing, liquidity, fees, and property-level risk differ before choosing a direction.",
  },
  {
    title: "Keep the Closing Moving",
    copy: "Make open items visible across title, diligence, financing, exchange documents, funding instructions, and the replacement closing.",
  },
];

const ownershipPaths = [
  {
    title: "Direct Real Estate",
    copy: "Keep control over the property, leasing, financing, improvements, and eventual sale while accepting the operating responsibility that comes with ownership.",
  },
  {
    title: "Net-Lease Property",
    copy: "Pursue income from a leased asset with responsibilities allocated by the lease. Tenant credit, lease language, building condition, and residual value still matter.",
  },
  {
    title: "DST Interests",
    copy: "Consider professionally managed, institutional-grade real estate when day-to-day landlord work is the problem. Sponsor, fees, leverage, liquidity, risks, eligibility, and suitability require careful review.",
  },
];

const exchangeStages = [
  {
    title: "Before the Property Sells",
    copy: "Review the planned sale, introduce the independent qualified intermediary, outline replacement goals, and identify questions for your tax and legal advisors.",
  },
  {
    title: "While Replacement Options Are Evaluated",
    copy: "Compare primary and backup candidates against the same criteria: income, debt, control, workload, diligence, risk, and probability of closing.",
  },
  {
    title: "Through Replacement Closing",
    copy: "Keep the exchange team aligned on title, financing, inspections, insurance, entity documents, funding directions, and unresolved advisor questions.",
  },
];

const faqEntries = [
  {
    question: "Can you help if this is my first 1031 exchange?",
    answer: "Yes. The first conversation can begin with the property you are selling, the likely closing date, what you want next, and which professionals are already involved. The goal is to make the process understandable and give each regulated professional the facts needed for their part of the transaction.",
  },
  {
    question: "What if my San Diego property is already under contract?",
    answer: "Call as soon as possible. A qualified intermediary generally needs to be in place before the relinquished-property sale closes. The contract, closing date, ownership, exchange documents, and replacement search should be reviewed immediately with the appropriate independent professionals.",
  },
  {
    question: "Can I exchange into property outside San Diego or California?",
    answer: "Replacement property can be evaluated in San Diego and nationwide. The right search depends on your equity, debt, desired income, management tolerance, market preferences, diligence requirements, and ability to close within the exchange timeline.",
  },
  {
    question: "Can a 1031 exchange help me leave active property management?",
    answer: "It can create an opportunity to compare another directly owned property with net-lease assets and professionally managed DST interests. Each path has different tradeoffs involving control, liquidity, financing, fees, tenant or sponsor risk, and ongoing responsibility.",
  },
  {
    question: "How do I request a list of available properties?",
    answer: "Use the short contact form or call 619-480-0216. Share the property being sold, expected timing, approximate exchange equity, debt needs, location preferences, and whether direct ownership, net lease, passive alternatives, or a combination should be considered.",
  },
  {
    question: "Is the initial 1031 exchange consultation free?",
    answer: "Yes. The initial exchange conversation and educational guidance are free. Tax, legal, qualified-intermediary, brokerage, lending, and securities work must be handled by the appropriate independent professionals.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.company,
  url: SITE_URL,
  telephone: site.phone,
  email: site.email,
  logo: `${SITE_URL}/1031-exchange-of-san-diego-ca-logo.png`,
  image: `${SITE_URL}/locations/san-diego-ca/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.mainCity,
    addressRegion: site.state,
    postalCode: "92121",
    addressCountry: "US",
  },
  areaServed: "United States",
  serviceType: [
    "1031 exchange solutions",
    "Replacement property planning",
    "Passive real estate education",
    "DST property information",
    "Net lease property search",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  const featuredProperties = propertyTypesData.slice(0, 6);
  const featuredLocations = locationsData.slice(0, 6);

  return (
    <>
      <main className="overflow-hidden bg-white text-gray-700">
        <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#0F2A3D] pt-28 md:min-h-[820px] md:items-center" id="hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/locations/san-diego-ca/hero.jpg"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
          >
            <source src="/san-diego-1031-hero.mp4" type="video/mp4" />
          </video>
          <Image
            src="/locations/san-diego-ca/hero.jpg"
            alt="San Diego coastline"
            fill
            priority
            sizes="100vw"
            className="object-cover md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071924]/95 via-[#0F2A3D]/78 to-[#0F2A3D]/25" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 md:px-8 md:pb-0">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/75 sm:text-sm">
                Selling investment property in San Diego?
              </p>
              <h1 className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Turnkey 1031 Exchange Solutions in San Diego
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
                Whether the sale is still being planned, already under contract, inherited, or driven by landlord fatigue, one call can help organize the exchange, replacement search, passive options, and the independent professionals needed to move forward.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2A3D] shadow-lg transition hover:bg-gray-100 sm:w-auto"
                >
                  Free Consultation: {site.phone}
                </a>
                <Link
                  href="/contact#contact-form"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/65 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0F2A3D] sm:w-auto"
                >
                  Start My Exchange
                </Link>
                <Link
                  href="/contact?request=properties#contact-form"
                  className="inline-flex min-h-12 w-full items-center justify-center px-3 py-3 text-sm font-semibold text-white underline decoration-white/40 underline-offset-8 transition hover:decoration-white sm:w-auto"
                >
                  Get a Free Property List
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
            <p className="max-w-3xl text-base leading-7 text-[#0F2A3D]">
              <strong>You do not need to know every 1031 rule before calling.</strong> Start with the property, the timing, and what you want life after the sale to look like.
            </p>
            <a href={phoneHref} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-[#0F2A3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A3D54]">
              Talk Through the Sale
            </a>
          </div>
        </section>

        <section className="bg-[#F6F8F9] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Start with your situation</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">Whatever is driving the sale, the exchange should solve the real problem.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {ownerSituations.map((item) => (
                <Link key={item.title} href={item.href} className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#0F2A3D]/30 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-[#0F2A3D]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{item.copy}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#0F2A3D]">See how we can help <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl sm:min-h-[560px]">
              <Image src="/locations/la-jolla-ca/hero.jpg" alt="Coastal San Diego investment property market" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A3D]/55 to-transparent" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">A better outcome after the sale</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">A San Diego property sale should solve something.</h2>
              <div className="mt-7 space-y-5 text-base leading-7 text-gray-600">
                <p>Some owners want another hands-on property. Others want steadier income, broader diversification, fewer tenant calls, or a clean exit from renovations and capital projects.</p>
                <p>The replacement search should begin with that objective—not a generic list of listings. We help turn the sale facts and owner priorities into a practical brief that can be used across direct real estate, net-lease property, and passive DST alternatives.</p>
                <p>That gives the owner, qualified intermediary, tax advisor, attorney, brokers, lenders, and licensed securities professionals a clearer transaction to evaluate.</p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?request=guide#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0F2A3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A3D54]">Get Free 1031 Information</Link>
                <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#0F2A3D] px-6 py-3 text-sm font-semibold text-[#0F2A3D] transition hover:bg-[#0F2A3D] hover:text-white">Call {site.phone}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F2A3D] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">One call. One organized plan.</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">Turnkey help from the planned sale through replacement closing.</h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-2 lg:grid-cols-3">
              {solutionCards.map((item) => (
                <div key={item.title} className="bg-[#0F2A3D] p-7 sm:p-8">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/70">{item.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2A3D] transition hover:bg-gray-100">Talk to a 1031 Exchange Specialist</a>
              <Link href="/contact#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2A3D]">Send the Sale Details</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#EDF2F4] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Move beyond tenants, toilets, and trash</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">Find income-focused real estate without day-to-day property management.</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">For eligible investors, a DST may provide access to professionally managed, institutional-grade property without personally handling tenants, maintenance, leasing, or renovations.</p>
              <ul className="mt-7 space-y-4 text-sm leading-6 text-[#0F2A3D]">
                <li className="flex gap-3"><span aria-hidden="true">—</span><span>No day-to-day landlord management</span></li>
                <li className="flex gap-3"><span aria-hidden="true">—</span><span>Institutional-quality real estate across property types and markets</span></li>
                <li className="flex gap-3"><span aria-hidden="true">—</span><span>Some current offerings may begin around a $100,000 investment</span></li>
                <li className="flex gap-3"><span aria-hidden="true">—</span><span>Options that can be compared alongside direct and net-lease ownership</span></li>
              </ul>
              <p className="mt-6 text-xs leading-5 text-gray-500">Availability, projected income, minimum investment, sponsor, fees, leverage, liquidity, risks, investor eligibility, and suitability vary by offering.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?request=properties#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0F2A3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A3D54]">See a Free Property List</Link>
                <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#0F2A3D] px-6 py-3 text-sm font-semibold text-[#0F2A3D] transition hover:bg-[#0F2A3D] hover:text-white">Call for Free Guidance</a>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl sm:min-h-[580px]">
              <Image src="/property-types/urgent-care-medical/urgent-care-medicine.jpg" alt="Professionally managed institutional real estate" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Compare the paths</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">The right replacement property depends on how you want to own.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {ownershipPaths.map((item) => (
                <article key={item.title} className="rounded-2xl border border-gray-200 p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold text-[#0F2A3D]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F6F8F9] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">How the exchange moves</p>
                <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">A clear path through a time-sensitive transaction.</h2>
                <p className="mt-6 text-base leading-7 text-gray-600">Every transaction is different. The work is easier when the next decisions are visible and the right people are involved before a deadline forces the issue.</p>
                <a href={phoneHref} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0F2A3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A3D54]">First Exchange? Call {site.phone}</a>
              </div>
              <div className="space-y-5">
                {exchangeStages.map((item) => (
                  <article key={item.title} className="rounded-2xl bg-white p-7 shadow-sm sm:p-8">
                    <h3 className="text-xl font-semibold text-[#0F2A3D]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Explore direct real estate</p>
                <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">Property types that may fit a replacement search.</h2>
              </div>
              <Link href="/property-types" className="text-sm font-semibold text-[#0F2A3D] underline underline-offset-8">View all property types</Link>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProperties.map((property) => (
                <Link key={property.slug} href={property.route} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={property.heroImage} alt={property.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#0F2A3D]">{property.name}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{property.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F2A3D] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Local conversation. Nationwide options.</p>
                <h2 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">Serving San Diego County owners wherever the replacement property leads.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/service-areas" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F2A3D]">View All Areas</Link>
                <Link href="/contact?request=properties#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0F2A3D] transition hover:bg-gray-100">Get a Free Property List</Link>
              </div>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredLocations.map((location) => (
                <Link key={location.slug} href={location.route} className="group relative min-h-72 overflow-hidden rounded-2xl">
                  <Image src={location.heroImage} alt={location.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071924] via-[#071924]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-2xl font-semibold text-white">{location.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{location.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">Questions owners ask first</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-[#0F2A3D] sm:text-5xl">1031 exchange questions, answered plainly.</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">If your question is specific to a planned sale, call for free exchange guidance.</p>
              <a href={phoneHref} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0F2A3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A3D54]">Call {site.phone}</a>
            </div>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqEntries.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-[#0F2A3D]">
                    {faq.question}
                    <span className="text-2xl font-light transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-6 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F2A3D] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Free 1031 exchange guidance</p>
              <h2 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">Tell us what you are selling and what you want next.</h2>
              <p className="mt-6 text-base leading-7 text-white/70">Use the short form for a consultation, a list of current properties, or free educational information. No polished exchange plan is required—start with the facts you know.</p>
              <a href={phoneHref} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F2A3D] transition hover:bg-gray-100">Call Now: {site.phone}</a>
            </div>
            <ContactFormWrapper />
          </div>
        </section>
      </main>

      <Script id="organization-schema" type="application/ld+json">{JSON.stringify(organizationSchema)}</Script>
      <Script id="faq-schema" type="application/ld+json">{JSON.stringify(faqSchema)}</Script>
    </>
  );
}
