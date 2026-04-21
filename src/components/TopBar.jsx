import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaSkype } from "react-icons/fa";

function TopBar() {
  const socialItems = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaSkype, label: "Skype", href: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/918120121700" },
  ];

  return (
    <div className="bg-gray-100 text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-green-700 text-xs sm:text-sm">
          <a href="tel:+918120121700" className="flex items-center gap-2 hover:text-green-900 transition">
            <FaPhoneAlt className="text-xs" />
            +91 8120121700
          </a>

          <a href="mailto:runagrooverseas@gmail.com" className="hidden md:flex items-center gap-2 break-all hover:text-green-900 transition">
            <FaEnvelope className="text-xs" />
            runagrooverseas@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 text-[#509624] text-base sm:text-lg">
          {socialItems.map((item) =>
            item.href === "#" ? (
              <button key={item.label} type="button" aria-label={item.label} className="hover:opacity-80">
                <item.icon />
              </button>
            ) : (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="hover:opacity-80">
                <item.icon />
              </a>
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default TopBar;

