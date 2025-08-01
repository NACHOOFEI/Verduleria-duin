import { useState } from "react";
export function VerdurasCard({ producto, agregarCarrito }) {
  const [contador, setContador] = useState(0);
  function handleClickR() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }
  function handleClickS() {
    setContador(contador + 1);
  }
  return (
    <>
      <div className="col-12 col-md-3 mt-1">
        <div className={`card mt-1`}>
          <div className="card-header">
            <h6>{producto.descripcion}</h6>
            <small>{contador}</small>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <button
                  onClick={() => {
                    if (contador === 0) {
                      alert("ingrese cantidad");
                      return;
                    }
                    agregarCarrito(producto, contador);
                    setContador(0);
                  }}
                >
                  agregar
                </button>
                <button onClick={handleClickR}>-</button>
                <button onClick={handleClickS}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
