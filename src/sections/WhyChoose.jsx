import { FaShieldAlt, FaUsers, FaGlobeAmericas, FaUserCheck } from "react-icons/fa";

function WhyChoose() {
  const reasons = [
    {
      title: "Expertise",
      description:
        "With deep industry knowledge and experience, we provide expert guidance and support.",
      icon: FaUserCheck,
    },
    {
      title: "Quality Assurance",
      description:
        "We are committed to delivering only the highest quality products and services.",
      icon: FaShieldAlt,
    },
    {
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We work closely with you to understand your needs.",
      icon: FaUsers,
    },
    {
      title: "Global Reach",
      description:
        "Our extensive network allows us to operate efficiently across international borders.",
      icon: FaGlobeAmericas,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-12 sm:py-16">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-green-700">
          Why Choose Run Agro Overseas?
        </h2>

        {/* Points */}
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {reasons.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group bg-white rounded-xl border border-green-100 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                  <Icon />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-gray-700 leading-relaxed text-sm">{description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}

export default WhyChoose;