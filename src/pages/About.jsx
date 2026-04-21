import aboutImg from "../assets/import.jpg";
import {
  FaAward,
  FaBuilding,
  FaBullseye,
  FaCheckCircle,
  FaGlobeAsia,
  FaLeaf,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

function About() {
  const aboutBlocks = [
    {
      title: "Who We Are",
      icon: FaUsers,
      content:
        "Run Agro Overseas is a leading name in the agricultural import and export industry, known for its exceptional commitment to quality, reliability, and customer satisfaction. Collaborating closely with CEOs and Product Managers in the agricultural sector, we specialize in exporting and importing a diverse range of high-quality agricultural products from India. Our expertise is backed by robust system architecture and stringent security measures, ensuring a seamless trade process that connects global markets with India’s abundant harvests.",
    },
    {
      title: "Our Certifications",
      icon: FaAward,
      content:
        "We are proudly certified by India’s “Agricultural and Processed Food Products Export Development Authority” (APEDA), which endorses our capability to export grains, spices, condiments, and a variety of other Indian products worldwide. This certification reflects our commitment to maintaining the highest standards of quality and safety.",
    },
    {
      title: "Our Infrastructure",
      icon: FaBuilding,
      content:
        "The core of our success lies in our superior infrastructure, equipped with cutting-edge technologies and modern facilities that adhere to international quality standards. This enables us to maintain strict quality control and deliver excellence consistently.",
    },
    {
      title: "Our Commitment to Quality",
      icon: FaShieldAlt,
      content:
        "At Run Agro Overseas, we believe that perfection is paramount. Our dedication to quality is reflected in every aspect of our operations—from sourcing and processing to packaging and delivery. We focus on delivering value-driven solutions while ensuring complete customer satisfaction.",
    },
    {
      title: "Sustainability and Reliability",
      icon: FaLeaf,
      content:
        "We actively export a wide range of food and coir products worldwide while aligning our services with sustainable development practices. Our efficiency and timely delivery make us a reliable partner in the global market.",
    },
    {
      title: "Our Vision",
      icon: FaBullseye,
      content:
        "Our vision is to serve our customers in the best possible manner by ensuring every shipment meets their expectations. As certified exporters in India, we deliver spices and agro-based products that comply with international physical and microbiological standards.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50/60 via-white to-green-50/50">
      <div className="relative w-full h-64 sm:h-80 md:h-[360px] overflow-hidden">
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/25" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
          <div className="text-white max-w-2xl animate-[fadeIn_.6s_ease]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs sm:text-sm">
              <FaGlobeAsia className="text-green-300" />
              Trusted Global Agro Exporter
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              About Us
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200 max-w-xl">
              Building reliable international trade bridges with quality products,
              strong compliance, and customer-first execution.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaAward />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Certification</p>
                <p className="text-base font-semibold text-gray-800">APEDA Recognized</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaCheckCircle />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Quality Control</p>
                <p className="text-base font-semibold text-gray-800">International Standards</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaGlobeAsia />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Global Reach</p>
                <p className="text-base font-semibold text-gray-800">Reliable International Trade</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-5 sm:gap-6">
          {aboutBlocks.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl border border-green-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-green-100 transition duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="h-11 w-11 shrink-0 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <block.icon />
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-green-700">
                    {block.title}
                  </h2>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {block.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;