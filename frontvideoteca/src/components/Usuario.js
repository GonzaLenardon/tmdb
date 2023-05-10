import axios from "axios";
import useInput from "../hooks/useInput";
import Footer from "./Footer";
//import { useNavigate } from "react-router-dom";

export const Usuario = () => {
  const usuario = useInput();
  const email = useInput();
  const password = useInput();
  //  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/signup", {
        usuario: usuario.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        res.status(200).send(console.log("Registro insertado"));
        //      navigator("/");
      })

      .catch((err) => console.log(e));
  }

  return (
    <div className="container text-center bg-primary p-2 text-dark bg-opacity-50">
      <form onSubmit={handleSubmit}>
        <h2>Nuevo Usuario</h2>
        <input
          className="form-control form-control-sm"
          type="text"
          name="Nombre"
          placeholder="Ingrese su Usuario"
          {...usuario}
        ></input>
        <br />
        <input
          className="form-control form-control-sm"
          type="text"
          name="email"
          placeholder="Ingrese su email"
          {...email}
        ></input>
        <br />
        <input
          className="form-control form-control-sm"
          type="text"
          name="password"
          placeholder="Ingrese su password"
          {...password}
        ></input>
        <br />
        <button type="submit" className="btn btn-primary">
          Nuevo Usuario
        </button>
      </form>
      <Footer />
    </div>
  );
};
