// UPDATED ProductDetail.jsx (with reusable EnquiryModal)

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productData } from "../data/product";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLeaf,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";
import EnquiryModal from "../components/EnquiryModal";

function ProductDetail() {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-green-700">
          Product not found
        </h2>
        <p className="mt-3 text-gray-600">
          The product you are looking for is unavailable.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-white hover:bg-green-700 transition"
        >
          <FaArrowLeft className="text-xs" />
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-green-50/50 via-white to-green-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition"
          >
            <FaArrowLeft className="text-xs" />
            Back to Products
          </Link>

          <div className="mt-5 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            
            {/* Image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl border border-green-100 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 sm:h-80 lg:h-[440px] object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-green-700">
                  <FaShieldAlt className="text-[11px]" />
                  Quality Assured
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-green-700">
                  <FaTruck className="text-[11px]" />
                  Global Export
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-5 sm:p-7 animate-[fadeIn_.5s_ease]">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs uppercase tracking-wider text-green-700">
                <FaLeaf className="text-[11px]" />
                Premium Product
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-green-700 leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-green-100 bg-green-50/60 p-3">
                  <p className="text-xs uppercase tracking-wider text-green-700">
                    Product Type
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    Agricultural Export
                  </p>
                </div>
                <div className="rounded-xl border border-green-100 bg-green-50/60 p-3">
                  <p className="text-xs uppercase tracking-wider text-green-700">
                    Compliance
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    International Standards
                  </p>
                </div>
              </div>

              {/* 🔥 UPDATED BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer mt-6 inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition hover:shadow-lg hover:shadow-green-300/40 hover:scale-[1.03]"
              >
                Enquire Now
              </button>

            </div>
          </div>

          {/* Features */}
          <div className="mt-10 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-5 sm:mb-6">
              Key Features
            </h2>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {product.features?.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-green-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-green-200 transition"
                >
                  <h3 className="text-lg font-semibold text-green-700 flex items-start gap-2">
                    <FaCheckCircle className="mt-1 text-green-500 shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 SAME REUSABLE MODAL */}
      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default ProductDetail;