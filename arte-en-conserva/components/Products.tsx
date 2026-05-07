// Products.tsx
import { ProductCard } from "./ProductCard"; // Importación con llaves

const productos = [
  // ... otros productos ...
  {
    nombre: "Naranja",
    precio: 4800,
    descripcion: "Equilibrio perfecto entre dulce y cítrico.",
    imagen: "/imagen/naranja.jpg", // Corregido: no usar la de durazno
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-orange-100 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-orange-900 text-center">Nuestros sabores</h2>
        <div className="flex flex-wrap gap-8 justify-center mt-14">
          {productos.map((producto) => (
            <ProductCard key={producto.nombre} {...producto} />
          ))}
        </div>
      </div>
    </section>
  );
}