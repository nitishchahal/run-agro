import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function EnquiryModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Requirement is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", form);

      // reset form (optional)
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 animate-fadeIn">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition"
        >
          <FaTimes size={18} />
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Enquiry Form
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-4">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border ${
                errors.name ? "border-red-500" : "border-white/20"
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border ${
                errors.email ? "border-red-500" : "border-white/20"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border ${
                errors.phone ? "border-red-500" : "border-white/20"
              }`}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Requirement..."
              className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border ${
                errors.message ? "border-red-500" : "border-white/20"
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 bg-[#509624] hover:bg-green-700 text-white py-3 rounded-lg font-semibold tracking-wide transition hover:scale-105"
          >
            SUBMIT ENQUIRY
          </button>

        </form>
      </div>
    </div>
  );
}

export default EnquiryModal;