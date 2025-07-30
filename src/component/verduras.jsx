import { VerdurasCard } from "./verduras-card";
export function Verduras({ verduras, agregar }) {
  return (
    <div className="row">
      {verduras?.map((producto, index) => (
        <VerdurasCard
          key={index}
          producto={producto}
          agregarCarrito={agregar}
        />
      ))}
    </div>
  );
}
