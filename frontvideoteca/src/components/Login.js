import axios from "axios";
import useInput from "../hooks/useInput";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/user";
import { useState } from "react";

//import { useNavigate } from "react-router-dom";

export const Login = () => {
  const usuario = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const [nologin, setNologin] = useState(true);
  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      usuario: usuario.value,
      password: password.value,
    };

    axios
      .post("http://localhost:5000/user/login", user)
      .then((res) => {
        dispatch(addUser({ usuario: res.data.usuario, id: res.data.id }));
        navigator("/");
      })
      .catch((err) => {
        console.log(err);
        setNologin(false);
      });
  }

  return (
    <div className="container text-center bg-primary p-2 text-dark bg-opacity-50">
      <form onSubmit={handleSubmit}>
        <h2>Loggin User</h2>
        <input
          className="form-control form-control-sm"
          type="text"
          name="usuario"
          placeholder="Ingrese su Usuario"
          {...usuario}
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
          LogIn
        </button>
        {nologin ? (
          ""
        ) : (
          <h3>Asegurese de ingresar un usuario y password correcto</h3>
        )}
      </form>
      <Footer />
    </div>
  );
};
