"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: "all", name: "All" },
  { id: "training", name: "Training Sessions" },
  { id: "lab", name: "Lab & Infrastructure" },
  { id: "events", name: "Events & Workshops" },
  { id: "placements", name: "Placement Drives" },
];

const galleryItems = [
  {
    id: 1,
    category: "training",
    title: "Construction Engineering Lab",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    category: "training",
    title: "Software Development Class",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    category: "lab",
    title: "PLC Training Lab",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    category: "events",
    title: "Annual Convocation 2023",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    category: "placements",
    title: "Campus Placement Drive",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    category: "lab",
    title: "Computer Lab",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    category: "training",
    title: "DevOps Workshop",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    category: "events",
    title: "Industry Expert Session",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    category: "training",
    title: "Site Survey Training",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    category: "placements",
    title: "Students at L&T",
    image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    category: "lab",
    title: "Electrical Systems Lab",
    image: "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    category: "events",
    title: "Alumni Meet 2023",
    image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const closeModal = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  const selectedItem = galleryItems.find((item) => item.id === selectedImage);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Our Gallery
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">Campus Life at Test Academy</h1>
            <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
              A glimpse of our training sessions, labs, events, and placement drives
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="aspect-square">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-white/70 capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 text-white hover:text-orange-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <div className="max-w-5xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat rounded-xl"
                style={{
                  backgroundImage: `url(${selectedItem.image})`,
                  width: "80vw",
                  height: "60vh",
                  maxHeight: "500px",
                }}
              />
              <div className="text-center text-white mt-4">
                <p className="font-semibold">{selectedItem.title}</p>
                <p className="text-sm text-white/70 capitalize">{selectedItem.category}</p>
              </div>
            </div>

            <button
              className="absolute right-4 text-white hover:text-orange-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          </div>
        )}

        {/* Virtual Tour CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to See More?
            </h2>
            <p className="text-gray-600 mb-8">
              Visit our campus for a free tour and see our world-class facilities
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact?demo=true"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Schedule Campus Visit
              </a>
              <a
                href="/apply"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
