export function ListaDeCompra({ lista, eliminar }) {
  return (
    <table>
      <tbody>
        {lista.map((producto) => (
          <tr key={producto.id}>
            <td>
              {producto.descripcion}: {producto.cantidad}
              {"  "}
              <button
                onClick={() => {
                  eliminar(producto.id);
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
