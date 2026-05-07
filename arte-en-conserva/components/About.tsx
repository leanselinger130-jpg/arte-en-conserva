export default function About() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <div className="h-[450px] bg-orange-100 rounded-3xl"></div>
        </div>

        <div>
          <p className="uppercase tracking-widest text-orange-600 font-semibold">
            Nuestra historia
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mt-4">
            Hecho artesanalmente,
            con dedicación real
          </h2>

          <p className="mt-6 text-orange-800 text-lg leading-relaxed">
            Mermeladas Nathalie nace del amor por los sabores caseros,
            utilizando frutas seleccionadas y procesos artesanales
            para lograr productos naturales y auténticos.
          </p>

          <p className="mt-4 text-orange-700 leading-relaxed">
            Cada frasco representa una producción cuidada,
            sin conservantes y con el objetivo de mantener
            el sabor real de cada fruta.
          </p>
        </div>
      </div>
    </section>
  );
}