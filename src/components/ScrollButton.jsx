import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition z-50"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollButton;