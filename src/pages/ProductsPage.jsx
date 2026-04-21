import { productData } from "../data/product";
import bannerImg from "../assets/export.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBoxes, FaGlobeAsia, FaLeaf, FaShieldAlt } from "react-icons/fa";

function ProductsPage() {
  return (
    <section className="bg-gradient-to-b from-green-50/60 via-white to-green-50/50">
      <div className="relative w-full h-56 sm:h-72 md:h-[340px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
          <div className="text-white max-w-2xl animate-[fadeIn_.6s_ease]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-3 py-1 text-xs sm:text-sm">
              <FaLeaf className="text-green-300" />
              Premium Agro Portfolio
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Products
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-100">
              Explore our export-grade agricultural catalog curated for global markets.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaBoxes />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Total Products</p>
                <p className="text-lg font-semibold text-gray-800">{productData.length}+ Items</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaGlobeAsia />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Market Reach</p>
                <p className="text-lg font-semibold text-gray-800">Global Export Ready</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-green-100 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <FaShieldAlt />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Quality</p>
                <p className="text-lg font-semibold text-gray-800">Verified Standards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Our Product Range</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Agricultural products, grains, spices, seeds, and value-added exports.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {productData.map((item) => (
            <Link
              to={`/products/${item.slug}`}
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-green-100 bg-white shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 sm:h-[230px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-90" />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-white text-lg font-semibold">
                  {item.name}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-sm text-green-200 group-hover:text-white transition">
                  View Details
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;