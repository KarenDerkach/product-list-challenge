import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../../react-redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container } from "reactstrap";
import swal from "sweetalert";
import "./Products.css";

export default function Products() {
  const productsList = useSelector((state) => state.products);
  console.log("Lista de PRODUCTOS",productsList)
  const [change, setChange] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts());
    dispatch(deleteProduct());
  }, [dispatch, change]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    swal("Producto eliminado", "", "success");
    setChange(!change);

  };

  //--------------modal------------------
  const [modal, setModal] = React.useState(false);

  const mostrarModal = () => {
    setModal(!modal);
   navigate('/newproduct')
  };

  return (
    <>
      <Container className="p-container">
        <div className="p-title">
        <h1 >LISTA DE PRODUCTOS</h1>
        </div>
        <br />
        <br />
      
          <Button color="success" onClick={mostrarModal}>
            Nuevo Producto
          </Button>
      
        <br />
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Etiquetas</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {productsList.length > 0 ? (
              productsList.map((elem) => {
                return (
                  <tr>
                    <th scope="row" key={elem.id}>
                      {elem.name}
                    </th>{" "}
                    {"    "}
                    <td className="p-contEtiq">
                      {elem.label?.map((elem) => (
                        <div className="p-etiqueta">{elem.label}</div>
                      ))}
                    </td>
                    <td className="p-contBtn">
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(elem.id)}
                        className="p-btn"
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <td>No existen productos</td>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
