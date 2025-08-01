import { useState } from "react";

export function ListaDeCompra({ lista, eliminar }) {
  const [showDialog, setShowDialog] = useState(false);
  const [selectProd, setSelectedProd] = useState();

  const onHandleOpenDialog = (id) => {
    setSelectedProd(id);
    setShowDialog(true);
  };

  function eli() {
    eliminar(selectProd);
    setShowDialog(false); // cerrar después de eliminar
  }

  return (
    <>
      <table>
        <tbody>
          {lista.map((producto) => (
            <tr key={producto.id}>
              <td>
                {producto.descripcion}: {producto.cantidad}{" "}
                <button onClick={() => onHandleOpenDialog(producto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDialog && <EliminarProd set={setShowDialog} eliminar={eli} />}
    </>
  );
}

function EliminarProd({ set, eliminar }) {
  return (
    <div>
      <p>¿Estás seguro de que querés eliminar el producto?</p>
      <button onClick={eliminar}>Aceptar</button>
      <button onClick={() => set(false)}>Cancelar</button>
    </div>
  );
}
