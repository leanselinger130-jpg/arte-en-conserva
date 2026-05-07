export default function Footer() {
  return (
    <footer className="bg-orange-900 text-orange-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        <div>
          <h3 className="text-3xl font-bold">
            Mermeladas Nathalie
          </h3>

          <p className="mt-4 text-orange-200 max-w-sm">
            Producción artesanal de mermeladas naturales,
            elaboradas sin conservantes y con frutas seleccionadas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-4">
            Contacto
          </h4>

          <div className="space-y-2 text-orange-200">
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>La Plata, Buenos Aires</p>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-800 mt-12 pt-6 text-center text-orange-300">
        © 2026 Mermeladas Nathalie
      </div>
    </footer>
  );
}