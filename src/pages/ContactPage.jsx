import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRegClock,
  FaHeadset,
} from "react-icons/fa";
import { useState } from "react";
import contactBanner from "../assets/import.jpg";

function ContactPage() {
const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
});

const [errors, setErrors] = useState({});

  const socialItems = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918120121700" },
  ];

  const validate = () => {
  let newErrors = {};

  if (!form.name.trim()) newErrors.name = "First name is required";
  if (!form.email.trim()) newErrors.email = "Email is required";
  if (!form.phone.trim()) newErrors.phone = "Mobile number is required";
  if (!form.message.trim()) newErrors.message = "Message is required";
  if (!form.agree) newErrors.agree = "Please confirm you're not a robot";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {
    console.log("Form Submitted:", form);
  }
};

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setForm({
    ...form,
    [name]: type === "checkbox" ? checked : value,
  });
};

  return (
    <section className="bg-gradient-to-b from-green-50/60 via-white to-green-50/50">
      <div className="relative w-full h-64 sm:h-80 md:h-[360px] overflow-hidden">
        <img
          src={contactBanner}
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/25" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
          <div className="text-white max-w-2xl animate-[fadeIn_.6s_ease]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs sm:text-sm">
              <FaHeadset className="text-green-300" />
              We Are Here To Help
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Contact Us
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-200 max-w-xl">
              Connect with Run Agro Overseas for export enquiries, partnership discussions,
              and product details. Our team responds quickly and professionally.
            </p>

            <a
              href="#contact-form"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 px-5 py-3 text-sm sm:text-base font-medium transition"
            >
              <FaPaperPlane className="text-xs" />
              Send a Message
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Call Anytime</p>
                <a href="tel:+918120121700" className="text-sm sm:text-base font-semibold text-gray-800 hover:text-green-700 transition">
                  +91 8120 121 700
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaEnvelope />
              </span>
              <div className="break-all">
                <p className="text-xs uppercase tracking-wider text-gray-500">Email Support</p>
                <a href="mailto:runagrooverseas@gmail.com" className="text-sm sm:text-base font-semibold text-gray-800 hover:text-green-700 transition">
                  runagrooverseas@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaRegClock />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Business Hours</p>
                <p className="text-sm sm:text-base font-semibold text-gray-800">Mon - Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-5 gap-8 md:gap-10">
          <form
            id="contact-form"
            className="lg:col-span-3 rounded-2xl border border-green-100 bg-white p-6 sm:p-8 shadow-lg animate-[fadeIn_.5s_ease]"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-700">Send Your Enquiry</h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Fill in your details and our team will get back to you shortly.
            </p>

            <div className="mt-8 space-y-5">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                    errors.name
                      ? "border-red-400 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-green-500 focus:bg-white"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-red-600 text-sm font-medium flex items-center gap-1">
                    <span>●</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                    errors.email
                      ? "border-red-400 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-green-500 focus:bg-white"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-red-600 text-sm font-medium flex items-center gap-1">
                    <span>●</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none ${
                    errors.phone
                      ? "border-red-400 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-green-500 focus:bg-white"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-red-600 text-sm font-medium flex items-center gap-1">
                    <span>●</span> {errors.phone}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition focus:outline-none resize-none ${
                    errors.message
                      ? "border-red-400 bg-red-50 focus:border-red-500"
                      : "border-gray-200 bg-gray-50 focus:border-green-500 focus:bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-red-600 text-sm font-medium flex items-center gap-1">
                    <span>●</span> {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Checkbox */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 w-5 h-5 accent-green-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700 pt-0.5">I'm not a robot and accept the terms</span>
            </div>
            {errors.agree && (
              <p className="mt-2 text-red-600 text-sm font-medium flex items-center gap-1">
                <span>●</span> {errors.agree}
              </p>
            )}

            <button
              type="submit"
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-3.5 text-white font-semibold hover:bg-green-700 transition hover:shadow-lg hover:shadow-green-200/50 active:scale-95"
            >
              <FaPaperPlane className="text-sm" />
              Submit Enquiry
            </button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-green-100 bg-white p-5 sm:p-6 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700">Get Social</h3>
              <p className="mt-2 text-sm text-gray-600">Follow us and stay connected with updates.</p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialItems.map((item) =>
                  item.href === "#" ? (
                    <button
                      key={item.label}
                      type="button"
                      aria-label={item.label}
                      className="h-11 w-11 rounded-full bg-green-50 border border-green-100 text-green-700 hover:bg-green-600 hover:text-white transition"
                    >
                      <item.icon className="mx-auto" />
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="h-11 w-11 rounded-full bg-green-50 border border-green-100 text-green-700 hover:bg-green-600 hover:text-white transition flex items-center justify-center"
                    >
                      <item.icon />
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white p-5 sm:p-6 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700">Office Address</h3>
              <div className="mt-4 flex items-start gap-3 text-gray-700">
                <FaMapMarkedAlt className="mt-1 text-green-600" />
                <p className="leading-relaxed">
                  40, Vidhya Nagar Mangrul Road,
                  <br />
                  Khargone (M.P.), India 451001
                </p>
              </div>
              <div className="mt-4 flex items-start gap-3 text-gray-700 break-all">
                <FaEnvelope className="mt-1 text-green-600" />
                <div>
                  <a href="mailto:runagrooverseas@gmail.com" className="hover:text-green-700 transition">runagrooverseas@gmail.com</a>
                  <br />
                  <a href="mailto:info@runagrooverseas.com" className="hover:text-green-700 transition">info@runagrooverseas.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-green-700 text-white text-center py-3 px-4 font-medium text-sm sm:text-base">
          <FaMapMarkerAlt className="inline mr-2" />
          VIEW US ON THE MAP
        </div>

        <iframe
          title="map"
          src="https://www.google.com/maps?q=Khargone%20Madhya%20Pradesh&output=embed"
          className="w-full h-72 sm:h-80 md:h-[400px] border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;