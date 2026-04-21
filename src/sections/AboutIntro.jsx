import {
  FaAward,
  FaHandshake,
  FaGlobe,
  FaShieldAlt,
  FaLeaf,
  FaShippingFast,
} from "react-icons/fa";

function AboutIntro() {
  const highlights = [
    {
      title: "Trusted Quality",
      desc: "Strict quality checks across every shipment.",
      icon: FaAward,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Reliable Partnerships",
      desc: "Built on transparent and long-term collaboration.",
      icon: FaHandshake,
      color: "from-lime-500 to-green-600",
    },
    {
      title: "Global Operations",
      desc: "Efficient sourcing and delivery across markets.",
      icon: FaGlobe,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const trustSignals = [
    { label: "Quality Assurance", icon: FaShieldAlt },
    { label: "Farm-to-Market Focus", icon: FaLeaf },
    { label: "Fast Global Logistics", icon: FaShippingFast },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white py-14 sm:py-20">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_45%)]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto w-fit rounded-full border border-green-200 bg-white/80 px-4 py-1.5 text-xs sm:text-sm tracking-[0.14em] text-green-700 shadow-sm backdrop-blur">
          ABOUT RUN AGRO OVERSEAS
        </div>

        <h2 className="mt-5 text-center text-3xl md:text-5xl font-semibold text-green-700 leading-tight">
          Your Trusted Partner In Global Trade
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <div className="rounded-2xl border border-green-100 bg-white/90 backdrop-blur p-6 sm:p-8 shadow-lg text-left">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              At Run Agro Overseas, we specialize in providing top-notch import and export services,
              connecting businesses worldwide with high-quality agricultural products.
              Our commitment to excellence, reliability, and customer satisfaction has positioned us
              as a leader in the global trading industry.
            </p>

            <h3 className="mt-8 text-2xl sm:text-3xl font-semibold text-green-700">
              Who We Are
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg">
              Run Agro Overseas is a dynamic import and export company dedicated to fostering international trade.
              With years of experience and a network of trusted partners, we ensure seamless delivery of products
              that meet the highest standards of quality and safety.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {trustSignals.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-green-100/70 px-3 py-2 text-xs sm:text-sm font-medium text-green-800"
                >
                  <Icon className="text-green-700" size={13} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 text-left">
            {highlights.map(({ title, desc, icon: Icon, color }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden bg-white/90 backdrop-blur border border-green-100 rounded-xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-500"
                style={{ animation: "fadeInUp 700ms ease-out forwards", animationDelay: `${index * 140}ms`, opacity: 0 }}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color}`}></div>
                <span className="w-11 h-11 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  <Icon />
                </span>
                <h4 className="mt-3 font-semibold text-gray-900">{title}</h4>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default AboutIntro;