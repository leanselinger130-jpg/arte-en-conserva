// ProductCard.tsx
export interface ProductCardProps {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

export function ProductCard({ nombre, precio, descripcion, imagen }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 w-[320px] transition-transform hover:scale-[1.02]">
      <img 
          src={imagen}
          alt={nombre}
          className="h-52 w-full object-cover rounded-2xl mb-4" // Corregido: 2xl
      />
      <h3 className="text-2xl font-bold text-orange-900">{nombre}</h3>
      <p className="text-orange-700 mt-2">{descripcion}</p>
      <p className="text-xl font-semibold text-orange-800 mt-4">${precio}</p>
      <button className="mt-5 w-full bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition">
        Ver producto
      </button>
    </div>
  );
}