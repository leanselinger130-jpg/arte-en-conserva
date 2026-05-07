import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <Products />
    <About />
    <Footer />

    <main className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-900">
          Mermeladas Nathalie
        </h1>

        <p className="mt-4 text-lg text-orange-700">
          Artesanales • Sin conservantes • Hechas con amor
        </p>

        <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition">
          Ver productos
        </button>
      </div>
    </main>
    </>
  );
}