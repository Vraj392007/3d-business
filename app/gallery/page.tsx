"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 🔹 Gallery Data
const projects = [
  {
    title: "Luxury Villa Exterior",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Modern Interior",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    title: "Product Render",
    category: "Product",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
  },
  {
    title: "Industrial Model",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581090700227-1e8c0e3b5d94",
  },
  {
    title: "Creative Workspace",
    category: "Product",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    title: "Futuristic Scene",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
  },
];

const filters = ["All", "Architecture", "Product", "Industrial"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <main className="min-h-screen pt-28 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient">
          3D Business Gallery
        </h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Filter and explore our professional 3D visualization projects.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full border transition ${
              active === f
                ? "bg-indigo-600 border-indigo-400 text-white"
                : "border-slate-600 text-slate-300 hover:border-indigo-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
            className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 backdrop-blur shadow-2xl cursor-pointer"
            onClick={() => setLightbox(item.image)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition p-6 flex flex-col justify-end">
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-600 w-fit mb-2">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-300">
                Click to view fullscreen
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightbox}
            alt="Preview"
            width={1400}
            height={900}
            className="max-h-[90vh] w-auto rounded-xl shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}
