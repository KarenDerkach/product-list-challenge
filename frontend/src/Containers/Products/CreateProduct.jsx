import React from "react";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useDispatch} from "react-redux";
import {
  postProduct,
  postLabel,
 // deleteLabel
} from "../../react-redux/actions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import swal from "sweetalert";
import "./CreateProduct.css";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const labels = useSelector((state) => state.labels);
//  console.log("ETIQUETAS CREADAS", labels);

  const [newLabel, setNewLabel] = useState( []);
  const [input, setInput] = useState({
    name: "",
    label: [],
  });

  const [modal, setModal] = useState(false);
  const [change, setChange] = useState(false);


  //----------------------funciones ------------------------------------

  //almaceno el nombre del producto en el estado input.name y lo envio al reducer
  const handleChangeProduct = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //almaceno el nombre de la etiqueta en el estado newLabel.label y lo envio al reducer
  const handleChangeLabel = (e) => {
    setNewLabel(e.target.value);
  };

  // const handleDeleteLabel = (id) => {
  //   dispatch(deleteLabel(id));
  //   setChange(!change);
  // };

  //envio el producto junto a sus etiquetas  al store
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    if (input.name) {
      dispatch(postProduct(input));
      setInput({
        name: "",
        label: [],
      });
      swal("Producto creado!", "", "success");
      navigate("/");
    } else {
      swal("Error", "No se pudo crear el producto", "error");
    }
  };

  //envio la etiqueta al store
  const handleSubmitLabel = (e) => {
    e.preventDefault();
    // console.log("etiquta que llega a la accion de crear etiqueta", [newLabel]);
    dispatch(postLabel({label:[newLabel]}));

    setInput({
      ...input,
      label: [...input.label, newLabel],
    });
    setNewLabel([]);
    setChange(!change);
  };

  //--------------modal-----------------

  const mostrarModal = () => {
    setModal(!modal);
  };
  const ocultarModal = () => {
    setModal(!modal);
    navigate("/");
  };

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <Modal isOpen={mostrarModal}>
      <>
        <ModalHeader className="c-contTitle">
          <div>
            <h3 className="c-title">NUEVO PRODUCTO</h3>
          </div>
        </ModalHeader>
        <br />
        <ModalBody>
          <FormGroup onSubmit={(e) => handleSubmitProduct(e)}>
            <FormGroup>
              <label>Nombre: </label>
              <input
                type="text"
                name="name"
                value={input.name}
                placeholder="PJ: Jugo de Naranja"
                onChange={(e) => handleChangeProduct(e)}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <label>Etiqueta: </label>
              <input
                type="text"
                name="newLabel"
                value={newLabel}
                placeholder="PJ: Citricos"
                onChange={(e) => handleChangeLabel(e)}
              />
              <Button
                color="warning"
                onClick={handleSubmitLabel}
                className="c-btnAdd"
              >
                AGREGAR
              </Button>
            </FormGroup>
            <br />
            <FormGroup>
              <label>Etiquetas: </label>
              <div className="c-container">
                {/* Muestro los etiquetas creadas */}
                {input.label.map((elem) => (
                  <div key={elem} className="c-labels">
                    {" "}
                    <p>{elem}</p>
                    {/* <Button
                      color="warning"
                      size="sm"
                      onClick={() => handleDeleteLabel(elem)}
                      className="c-bntDelete"
                    >
                      X
                    </Button> */}
                  </div>
                ))}
              </div>
            </FormGroup>
          </FormGroup>
          <ModalFooter>
            <Button color="success" onClick={handleSubmitProduct}>
              Crear Producto
            </Button>
            <Button color="secondary" onClick={ocultarModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalBody>
      </>
    </Modal>
  );
}
