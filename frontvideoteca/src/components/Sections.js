import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/user";

const Sections = () => {
  const { usuario } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(addUser({}));
  };

  return (
    <div>
      <h5>Hola {usuario}</h5>
      <a href="#">
        <p onClick={handleLogout}>logout</p>
      </a>

      <Link to="/api/peliculas/listPeliculas">
        <button type="submit" className="btn btn-primary">
          Listar Peliculas
        </button>
      </Link>
    </div>
  );
};
export default Sections;
