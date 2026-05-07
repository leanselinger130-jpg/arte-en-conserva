export default function Hero() {
  return (
   
    <section className="min-h-[90vh] bg-orange-50 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-orange-700 font-semibold tracking-widest uppercase">
          Artesanal • Natural • Casero
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-orange-900 mt-6 leading-tight">
          Mermeladas hechas
          <br />
          con fruta real
        </h1>

        <p className="text-orange-800 text-xl mt-6 max-w-2xl mx-auto">
          Sabores artesanales elaborados sin conservantes,
          respetando el sabor natural de cada fruta.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl hover:bg-orange-700 transition">
            Ver productos
          </button>

          <button className="border border-orange-700 text-orange-700 px-8 py-4 rounded-2xl hover:bg-orange-100 transition">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}