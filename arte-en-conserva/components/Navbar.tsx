export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-orange-800">
        Nathalie
      </h1>

      <div className="hidden md:flex gap-6 text-orange-700 font-medium">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}