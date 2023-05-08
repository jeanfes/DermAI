import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loadingscreen } from "./components/loadingscreen/loadingscreen.jsx";
import { Home } from "./pages/home.jsx";
import { Login } from "./pages/login.jsx";
import { Signin } from "./pages/signin.jsx";
import Logo from "./assets/dermai.jpg";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Home");
  function handleOptionClick(option) {
      setSelectedOption(option);
  }
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
                <Link to="/"><p className={selectedOption === 'Home' ? 'selected' : ''} onClick={() => handleOptionClick('Home')}>Inicio</p></Link>
              </li>
              <li>
                <Link to="/Entrar"><p className={selectedOption === 'About' ? 'selected' : ''} onClick={() => handleOptionClick('About')}>Entrar</p></Link>
              </li>
              <li>
                  <Link to="/Registrarse" id="button_login" className={selectedOption === 'Contact' ? '' : ''} onClick={() => handleOptionClick('Contact')}><p>Registrarse</p></Link>
              </li>
            </ul>
          </header>
          <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Entrar" element={<Login/>}/>
            <Route path="/Registrarse" element={<Signin/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          </>
        </div>
      )}
    </>
  )
}

export default App
