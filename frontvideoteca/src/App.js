import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Usuario } from "./components/Usuario";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Sections from "./components/Sections";
import { useSelector } from "react-redux";
import store from "./redux/store";
import ListPeliculas from "./components/ListPeliculas";

function App() {
  const { usuario } = useSelector((state) => state.user);
  // const userLogin = useSelector((state) => state.user.usuario)
  return (
    <div>
      <h1>Bienvenido a nuestra Videoteca TMDB</h1>
      {usuario ? <Sections /> : ""}
      <Routes>
        <Route path="/api/user/login" element={<Login />}></Route>
        <Route path="/api/user/adduser" element={<Usuario />}></Route>
        <Route
          path="/api/peliculas/listPeliculas"
          element={<ListPeliculas />}
        />
        <Route path="/" element={!usuario ? <Header /> : ""} />
      </Routes>
    </div>
  );
}

export default App;
