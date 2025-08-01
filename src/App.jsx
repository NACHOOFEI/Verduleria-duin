import data from "./data/verduras.json";
import { Verduras } from "./component/verduras";
import { useState } from "react";
import { ListaDeCompra } from "./component/listaCompra";
import { ListCheck } from "lucide-react";
function App() {
  const [lista, setLista] = useState([]);

  const handleClickAgregar = (producto, cant) => {
    const p = lista.find((p) => p.id == producto.id);
    if (p != null) {
      const list = lista.filter((p) => p.id != producto.id);
      p.cantidad = p.cantidad + cant;
      setLista([...list, p]);
    } else {
      setLista([...lista, { ...producto, cantidad: cant }]);
    }
  };

  const handleClickEliminar = (id) => {
    setLista(lista.filter((l) => l.id !== id));
  };
  return (
    <>
      <div className="container-fluid">
        <header className="p-3 bg-success">
          <span className="display-6">
            Verduleria <ListCheck size={36} />
          </span>
          <ListaDeCompra lista={lista} eliminar={handleClickEliminar} />
        </header>
        <Verduras verduras={data} agregar={handleClickAgregar} />
      </div>
    </>
  );
}

export default App;
