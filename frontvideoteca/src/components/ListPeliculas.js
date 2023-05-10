import { React, useEffect, useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const ListPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [vistas, setVistas] = useState(false);
  const [info, setInfor] = useState(false);
  const [urls, setUrl] = useState(
    "https://api.themoviedb.org/3/discover/movie?api_key=45487d7530b9a32f1234012f8cb58526"
  );
  const usuarioLog = useSelector((state) => state.user);

  const key = "45487d7530b9a32f1234012f8cb58526";
  const pathBase = "https://image.tmdb.org/t/p/w200/";

  const inputBuscar = useInput();

  useEffect(
    (id) => {
      setInfor(false);
      axios
        .get(urls)
        .then((pelis) => {
          setPeliculas(pelis.data.results);
        })
        .catch((error) => console.log(error));
    },
    [urls]
  );

  const handleInfo = (pelicula) => {
    const urlbuscar = `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US`;
    console.log(urlbuscar);
    axios
      .get(urlbuscar)
      .then((pelis) => {
        setPeliculas([]);
        setPeliculas([pelis.data]);
        setInfor(true);
        //console.log([pelis.data]);
      })
      .catch((error) => console.log(error));
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setInfor(false);
    const urlbuscar = `https://api.themoviedb.org/3/search/movie?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US&query=${inputBuscar.value}&page=1&include_adult=false`;
    axios
      .get(urlbuscar)
      .then((pelis) => {
        setPeliculas(pelis.data.results);
        console.log(pelis.data.results);
      })
      .catch((error) => console.log(error));
  };

  //https://api.themoviedb.org/3/search/movie?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US&query=top%20gun&page=1&include_adult=false
  //"https://api.themoviedb.org/3/movie/758323?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US"
  // buscar Personas https://api.themoviedb.org/3/search/person?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US&query=${inputBuscar.value}&page=1&include_adult=false

  const HandleVista = (e) => {
    console.log(e.target.id);
    setVistas(!vistas);
    setUrl(e.target.id);
  };

  const handleFavorito = (e) => {
    axios
      .post("http://localhost:5000/api/peliculas/favoritos", {
        peliculas: e.title,
        id: usuarioLog.id,
      })
      .then((res) => {
        console.log(res.data);
        //res.status(200).send(console.log("Registro insertado"));
      })

      .catch((err) => console.log(e));
  };

  return (
    <div>
      <h1>ListPeliculas</h1>
      <div className="p-3 mb-2 bg-secondary">
        <br />
        <form onSubmit={handleBuscar} id="form">
          <input
            className="form-control form-control-sm w-50"
            type="text"
            name="buscar"
            placeholder="Ingrese nombre de pelicula"
            {...inputBuscar}
          ></input>
          <br />
          <button
            type="submit"
            className="btn btn-primary m-2"
            id="buscarpelicula"
          >
            Buscador
          </button>
        </form>
        <br />

        <div>
          <button
            type="button"
            className="btn btn-success m-1"
            id="https://api.themoviedb.org/3/movie/popular?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US&page=1"
            onClick={HandleVista}
          >
            Populares
          </button>
          <button
            type="button"
            className="btn btn-success m-1"
            id="https://api.themoviedb.org/3/movie/top_rated?api_key=45487d7530b9a32f1234012f8cb58526&language=en-US&page=1"
            onClick={HandleVista}
          >
            Top 10
          </button>
          <button
            type="button"
            className="btn btn-success m-1"
            id="https://api.themoviedb.org/3/movie/upcoming?api_key=45487d7530b9a32f1234012f8cb58526&language=en-USpage=1"
            onClick={HandleVista}
          >
            Aventura
          </button>
        </div>
      </div>

      {peliculas.map((pelicula) => {
        return (
          <div key={pelicula.id} className="row justify-content-center ">
            <div className="col-5 ">
              <h5 className="text-center">{pelicula.title}</h5>
              <img
                className="rounded mx-auto d-block"
                src={pathBase + pelicula.poster_path}
                alt={pelicula.poster_path}
                onClick={() => handleInfo(pelicula)}
              />

              <button
                className="btn btn-warning m-1"
                onClick={() => handleFavorito(pelicula)}
              >
                Agregar como Favoritos
              </button>
            </div>

            {info ? (
              <div className="col-7 rounded mx-auto d-block text-bg-secondary">
                <h2>Detalles de la Pelicula</h2>
                <br />
                <p>
                  <strong>OverWiew </strong> : {pelicula.overview}
                </p>
                <p>
                  <strong>Duracion : </strong> {pelicula.runtime} minutos
                </p>
                <p>
                  <strong>Año : </strong> {pelicula.release_date} minutos
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListPeliculas;
