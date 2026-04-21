function ScrollingBar() {
  return (
    <div className="sticky top-0 z-50 bg-gray-100 py-1 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="marquee-item flex gap-2 text-xs sm:text-sm">
                <span className="text-green-700 font-medium">
                  CALL US NOW @
                </span>
                <span className="highlight-phone cursor-pointer">
                  +918120121700
                </span>
                <span className="text-green-700 font-medium">
                  or EMAIL @
                </span>
                <span className="highlight-email cursor-pointer">
                  info@runagrooverseas.com
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBar;