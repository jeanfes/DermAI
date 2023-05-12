import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loadingscreen } from "./components/loadingscreen/loadingscreen.jsx";
import { Home } from "./pages/home.jsx";
import { Login } from "./pages/login.jsx";
import { Signup } from "./pages/signup.jsx";
import Logo from "./assets/dermai.jpg";
import './App.css';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loadingscreen />
      ) : (
        <div className="contenido">
          <header className="index-header_container">
            <picture className="logo_container">
              <img src={Logo}></img>
              <p>DermAI</p>
            </picture>
            <ul className="nav-container">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>Inicio</Link>
              </li>
              <li>
                <Link to="/Entrar" className={location.pathname === '/Entrar' ? 'selected' : ''}>Entrar</Link>
              </li>
              <li>
                <Link to="/Registrarse" id="button_login" className={location.pathname === '/Registrarse' ? 'selected' : ''}>Registrarse</Link>
              </li>
            </ul>
          </header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Entrar" element={<Login />} />
            <Route path="/Registrarse" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
