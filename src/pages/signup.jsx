import { Link } from "react-router-dom";
import React, { useState } from "react";
import Delete from "../assets/x.png";
import HidePasswordIcon from "../assets/hide-password.svg";
import ShowPasswordIcon from "../assets/show-password.svg";
import "../styles/signup.css";
export function Signup() {
    const [inputUserValue, setInputUserValue] = useState("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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
    return (
        <main className="main_container_signup">
                        <section className="section_text_signup">
                <h1 data-aos="fade-right" 
                    data-aos-duration="800"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-once="true">
                    Registrate para acceder a nuestros servicios
                </h1>
                <p 
                    data-aos="fade-right" 
                    data-aos-duration="800"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-once="true">
                    Si ya tienes cuenta puedes<br/><Link to="/entrar" className={location.pathname === '/entrar' ? 'selected' : ''}>Iniciar sesion aqui!</Link></p>
            </section>
            <section className="section_form_signup">
                <h2 data-aos="zoom-up"  data-aos-duration="1000" data-aos-once="true">Bienvenido</h2>
                <div className="container_input_name">
                    <input
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-once="true"
                        placeholder="Nombre"
                        type="text"
                        name=""
                        id="input_User_signup"
                    />
                    <input
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-once="true"
                        placeholder="Apellido"
                        type="text"
                        name=""
                        id="input_User_signup"
                    />
                </div>
                <div className="container_input_User">
                    <input
                        value={inputUserValue}
                        onChange={handleInputUserChange}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-once="true"
                        placeholder="Usuario"
                        type="text"
                        name=""
                        id="input_User_signup"
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
                        id="input_password_signup"
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
                <div className="container_birth_gender">
                    <select 
                    name="select_gender" 
                    id="select_gender"
                    type="date"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-once="true"
                    defaultValue="men"
                    >
                        <option value="men">Hombre</option>
                        <option value="women">Mujer</option>
                        <option value="non-binary">No binario</option>
                    </select>
                    <input 
                    type="date" 
                    name=""
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-once="true" 
                    id="input_birth" />
                </div>
                <Link data-aos="fade-left" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-once="true">
                    Algun problema?
                </Link>
                <button>Registrarse</button>
            </section>
        </main>
    )
}