// components/EnquiryTab.jsx
function EnquiryTab({ onClick }) {
  return (
    <div className="absolute right-0 top-1/4 z-20 hidden sm:block">
      <button
        onClick={onClick}
        className="cursor-pointer bg-[#509624] text-white flex flex-col items-center py-4 px-2 rounded-l-md shadow-md hover:bg-green-700 transition"
      >
        {["E", "N", "Q", "U", "I", "R", "Y"].map((char, index) => (
          <span key={index} className="text-[10px] md:text-xs font-bold">
            {char}
          </span>
        ))}
      </button>
    </div>
  );
}

export default EnquiryTab;