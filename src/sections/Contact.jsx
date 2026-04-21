import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaHeadset,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhone,
  FaShieldAlt,
  FaTwitter,
  FaUserAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const socialIcons = [
    { name: "Facebook", icon: FaFacebookF, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/918120121700" },
  ];

  const trustPoints = [
    { label: "Fast Response", icon: FaHeadset },
    { label: "Secure Communication", icon: FaShieldAlt },
    { label: "Global Trade Support", icon: FaGlobe },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Invalid email";
    if (!form.phone.trim()) nextErrors.phone = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.phone)) nextErrors.phone = "Enter valid 10-digit number";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted ✅");
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-green-50/40 py-14 sm:py-20">
      <div className="absolute -top-20 -left-16 w-64 h-64 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-[0.12em] text-green-700 backdrop-blur shadow-sm">
            <FaPaperPlane size={12} />
            LET&apos;S CONNECT
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl text-green-700 font-semibold leading-tight">Contact Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Ready to take your business to the next level? Get in touch with us today to learn more about how we can assist.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white/95 backdrop-blur p-6 sm:p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-2xl transition duration-500"
          >
            <div className="flex items-center gap-2 text-green-700 font-semibold">
              <FaPaperPlane />
              Send us a message
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 font-medium">Name</label>
                <div className="mt-2 relative">
                  <FaUserAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" size={13} />
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-50/70 focus:outline-none focus:ring-2 focus:ring-green-600 transition ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">Phone</label>
                <div className="mt-2 relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" size={13} />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-50/70 focus:outline-none focus:ring-2 focus:ring-green-600 transition ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Email</label>
              <div className="mt-2 relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" size={13} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-50/70 focus:outline-none focus:ring-2 focus:ring-green-600 transition ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your requirement"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={`mt-2 w-full p-3 border rounded-lg bg-gray-50/70 focus:outline-none focus:ring-2 focus:ring-green-600 transition ${
                  errors.message ? "border-red-500" : "border-gray-200"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="border border-gray-200 p-3 flex items-center gap-3 rounded-lg w-fit bg-white">
              <input type="checkbox" />
              <span className="text-sm">I&apos;m not a robot</span>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition hover:scale-105 shadow-md font-medium"
            >
              Submit
              <FaPaperPlane size={12} />
            </button>
          </form>

          <div className="rounded-2xl border border-green-100 bg-white/90 backdrop-blur p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl text-green-700 font-semibold mb-3">Get In Touch With Us</h3>
            <p className="text-gray-600">
              Our team is ready to help you with sourcing, export, and end-to-end trade assistance.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {trustPoints.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-green-100/70 px-3 py-2 text-xs sm:text-sm font-medium text-green-800"
                >
                  <Icon size={12} />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-lg text-green-600">
              {socialIcons.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={name}
                  className="w-11 h-11 rounded-full border border-green-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:-translate-y-1 transition duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <hr className="my-7 border-green-100" />

            <div className="space-y-4 text-gray-700">
              <div className="group flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition duration-300">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                  <FaHome size={15} />
                </span>
                <p>
                  40, Vidhya Nagar Mangrul Road,
                  <br />
                  Khargone (M.P.), India 451001
                </p>
              </div>

              <div className="group flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition duration-300">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                  <FaEnvelope size={14} />
                </span>
                <div className="break-all">
                  <p><a href="mailto:runagrooverseas@gmail.com" className="hover:text-green-700">runagrooverseas@gmail.com</a></p>
                  <p><a href="mailto:info@runagrooverseas.com" className="hover:text-green-700">info@runagrooverseas.com</a></p>
                </div>
              </div>

              <div className="group flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition duration-300">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                  <FaPhone size={14} />
                </span>
                <p><a href="tel:+918120121700" className="hover:text-green-700">+91 8120 121 700</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
