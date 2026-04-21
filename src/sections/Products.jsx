import { productData } from "../data/product";
import { Link } from "react-router-dom";
import { FaLeaf, FaSeedling, FaTractor, FaArrowRight } from "react-icons/fa";

function Products() {
  const productCategories = [
    { title: "Grains and Cereals", icon: FaSeedling },
    { title: "Fruits and Vegetables", icon: FaLeaf },
    { title: "Spices and Herbs", icon: FaLeaf },
    { title: "Pulses and Legumes", icon: FaSeedling },
    { title: "Nuts and Seeds", icon: FaSeedling },
    { title: "Cattle & Animals Feed", icon: FaTractor },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f6fef9] via-white to-white py-14 sm:py-20 overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-400/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500">
          Products
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We Offer A Wide Range Of Agricultural Products Including:
        </p>

        {/* Categories */}
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {productCategories.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="group relative rounded-xl p-[1px] bg-gradient-to-br from-green-200/40 via-emerald-200/30 to-lime-200/40 hover:shadow-lg transition duration-500"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 group-hover:bg-white transition duration-500 cursor-pointer">
                
                <span className="w-9 h-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <Icon size={14} />
                </span>

                <span className="font-medium text-gray-800 group-hover:text-green-700 transition">
                  {title}
                </span>

              </div>
            </li>
          ))}
        </ul>

        {/* Products Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {productData.map((item) => (
            <Link to={`/products/${item.slug}`} key={item.id} className="group block">
              
              <div className="relative rounded-2xl overflow-visible cursor-pointer transition-all duration-500 ease-out will-change-transform group-hover:scale-105 group-hover:-translate-y-1">

                {/* Premium Glow Border */}
                <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-green-300 via-emerald-400 to-lime-300 opacity-0 group-hover:opacity-80 blur-lg transition duration-500"></div>

                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/30 transition duration-500">

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 sm:h-[230px] object-cover transition duration-700 ease-out group-hover:scale-110 brightness-95 group-hover:brightness-105"
                  />

                  {/* Light Sweep */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -left-[120%] top-0 h-full w-[45%] bg-white/15 blur-xl rotate-12 group-hover:left-[120%] transition-all duration-1000 ease-out"></div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent group-hover:via-black/35 transition duration-500"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">

                    <p className="text-white text-lg font-semibold tracking-wide opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 ease-out">
                      {item.name}
                    </p>

                    <span className="text-white/90 text-sm flex items-center gap-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition delay-100 duration-500 ease-out">
                      Explore
                      <FaArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>

                  </div>

                  {/* Inner Glow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-0 h-0 bg-gradient-to-r from-green-500/25 via-emerald-500/25 to-lime-500/25 rounded-full blur-2xl group-hover:w-[220%] group-hover:h-[220%] transition-all duration-700 ease-out"></div>
                  </div>

                </div>

                {/* Mobile/Tablet Product Name - Always Visible */}
                <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-4 py-4">
                  <p className="text-white text-sm font-semibold text-center line-clamp-2">
                    {item.name}
                  </p>
                </div>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;