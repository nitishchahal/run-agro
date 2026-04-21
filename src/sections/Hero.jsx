// UPDATED Hero.jsx (clean usage)
import { useState } from "react";
import bgVideo from "../assets/bg-video.mp4";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../components/EnquiryModal";
import EnquiryTab from "../components/EnquiryTab";

function Hero() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[70vh] md:h-screen w-full overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 sm:pt-20 sm:pb-16">
          
          <span className="px-4 py-1.5 rounded-full border border-white/40 text-white/90 text-xs sm:text-sm tracking-wider bg-white/10 backdrop-blur mb-5 animate-pulse">
            PREMIUM IMPORT & EXPORT SOLUTIONS
          </span>

          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium max-w-5xl leading-tight">
            Run Agro Overseas – Bridging The World Through Quality Trade
          </h1>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 px-8 sm:px-10 py-3 bg-[#509624] hover:bg-green-700 text-white font-bold text-sm tracking-widest transition rounded-sm shadow-lg hover:scale-105 flex items-center gap-2"
          >
            PRODUCTS
            <FaArrowRight size={12} />
          </button>
        </div>

        {/* Reusable Enquiry Tab */}
        <EnquiryTab onClick={() => setOpen(true)} />

        {/* WhatsApp */}
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 animate-bounce">
          <a
            href="https://wa.me/918120121700"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14"
          >
            <FaWhatsapp className="text-white text-3xl" />
          </a>
        </div>
      </section>

      {/* Reusable Modal */}
      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Hero;