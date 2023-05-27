import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Delete from "../assets/x.png";
import HidePasswordIcon from "../assets/hide-password.svg";
import ShowPasswordIcon from "../assets/show-password.svg";
export function Login() {
    const [inputUserValue, setInputUserValue] = useState("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleInputUserChange = (event) => {
        setInputUserValue(event.target.value);
    };
    const UserDeleteClick = () => {
        setInputUserValue("");
    };
    const handleInputPasswordChange = (event) => {
        setInputPasswordValue(event.target.value);
    };
    const PasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const LoginButton = () => {
        navigate("/user");
    };
    return (
        <main className="main_container_login">
            <section className="section_text_login">
                <h1 data-aos="fade-right" 
                    data-aos-duration="600"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-once="true">
                    Inicia sesión con tu cuenta de DermAI
                </h1>
                <p 
                    data-aos="fade-right" 
                    data-aos-duration="800"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-once="true">
                    Si no tienes cuenta puedes<br/><Link to="/registrarse" className={location.pathname === '/registrarse' ? 'selected' : ''}>Registrarte aqui!</Link></p>
            </section>
            <section className="section_form_login">
                <h2 data-aos="zoom-up"  data-aos-duration="1000" data-aos-once="true">Bienvenido de nuevo</h2>
                <div className="container_input_User">
                    <input
                        value={inputUserValue}
                        onChange={handleInputUserChange}
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-once="true"
                        placeholder="Usuario"
                        type="text"
                        name=""
                        id="input_User_login"
                    />
                    {inputUserValue.length > 0 && (
                        <picture onClick={UserDeleteClick}>
                            <img id="delete-icon" src={Delete} alt="borrar contenido del search" />
                        </picture>
                    )}
                </div>
                <div className="container_input_password">
                    <input
                        value={inputPasswordValue}
                        onChange={handleInputPasswordChange}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-once="true"
                        placeholder="Contraseña"
                        type={showPassword ? "text" : "password"}
                        name=""
                        id="input_password_login"
                    />
                    {inputPasswordValue.length > 0 && (
                        <img
                            onClick={PasswordToggle}
                            id="toggle-password-icon"
                            src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
                            alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                        />
                    )}
                </div>
                <Link data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-once="true">
                    Recuperar contraseña?
                </Link>
                <button onClick={LoginButton}>Entrar</button>
            </section>
        </main>
    );
}
