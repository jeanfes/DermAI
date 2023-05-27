import "./header.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../search/search.jsx";
import { UserDetail } from "../user-detail/user-detail.jsx"
import Bell from "../../assets/bell.png";
import Logo from "../../assets/dermai.jpg";
import Logout from "../../assets/icon-logout.png";
import Theme from "../../assets/icon-theme.png";
import Profile from "../../assets/icon-profile.png";
import Tranlation from "../../assets/icon-translation.png";
import Close from "../../assets/x.png";
import ImgUser from "../../assets/icon-userimg.png";
import IconPassword from "../../assets/icon-password.png";
import IconDocuments from "../../assets/icon-documents.png";
export function Header() {
    const [selectedOption, setSelectedOption] = useState(0);
    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };
    const [classNotifications, setClassNotifications] = useState("inactive");
    const [classProfile, setClassProfile] = useState("inactive");
    const [showUserData, setShowUserData] = useState(false);
    const refNotifications = useRef(null);
    const refProfile = useRef(null);
    const refBellicon = useRef(null);
    const refUsertext = useRef(null);
    const navigate = useNavigate();
    const handleShowUserData = () => {
        refProfile.current.classList.remove("onclick");
        refUsertext.current.classList.remove("color-white");
        setClassProfile("inactive");
        setShowUserData(!showUserData);
    };
    const handleHideUserData = (event) => {
        if (showUserData == true) {
            setClassProfile("inactive");
            setShowUserData(false);
        }
    };
    function toggleClassNotifications() {
        if (classNotifications === "inactive") {
            setClassNotifications("");
            setClassProfile("inactive");
            refNotifications.current.classList.add("onclick");
            refBellicon.current.classList.add("filter-invert");
            refProfile.current.classList.remove("onclick");
            refUsertext.current.classList.remove("color-white");
        } else {
            setClassNotifications("inactive");
            refNotifications.current.classList.remove("onclick");
            refBellicon.current.classList.remove("filter-invert");
        }
    }
    function toggleClassProfile() {
        if (classProfile === "inactive") {
            setClassProfile("");
            setClassNotifications("inactive");
            refProfile.current.classList.add("onclick");
            refUsertext.current.classList.add("color-white");
            refNotifications.current.classList.remove("onclick");
            refBellicon.current.classList.remove("filter-invert");
        } else {
            setClassProfile("inactive");
            refProfile.current.classList.remove("onclick");
            refUsertext.current.classList.remove("color-white");
        }
    }
    function handleClickLogout() {
        navigate("/entrar");
    }
    function handleClickInside(event) {
        event.stopPropagation();
    }
    const [selectedImage, setSelectedImage] = useState(ImgUser);
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            setSelectedImage(imageUrl);
        }
    };
    const handleUploadClick = () => {
        const fileInput = document.getElementById("imagen");
        fileInput.value = null;
        fileInput.click();
    };
    const handleRemoveClick = () => {
        setSelectedImage(ImgUser);
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                refNotifications.current &&
                !refNotifications.current.contains(event.target) &&
                refProfile.current &&
                !refProfile.current.contains(event.target)
            ) {
                setClassNotifications("inactive");
                setClassProfile("inactive");
                refProfile.current.classList.remove("onclick");
                refNotifications.current.classList.remove("onclick");
                refUsertext.current.classList.remove("color-white");
                refBellicon.current.classList.remove("filter-invert");
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <React.Fragment>
            <picture className="user_logo_container">
                <img src={Logo}></img>
            </picture>
            <ul className="user_header">
                <li>
                    <Search />
                </li>
                <li>
                    <div ref={refNotifications} onClick={toggleClassNotifications} className="icon_bell_container">
                        <img ref={refBellicon} id="icon_bell" src={Bell} alt="notificaciones" />
                    </div>
                    <div onClick={handleClickInside} className={classNotifications} id="container_notifications">
                        <p>Notificaciones</p>
                        <div id="notifications">
                            <span></span>
                        </div>
                    </div>
                </li>
                <li>
                    <div ref={refProfile} onClick={toggleClassProfile} className="container_user_profile">
                        <div className="img_user_container">
                            <img id="img_user" src={selectedImage}  alt="foto de perfil" />
                        </div>
                        <p ref={refUsertext}>Usuario</p>
                    </div>
                    <div className={classProfile} id="box_profile" onClick={handleClickInside}>
                        <div className="container1">
                            <span onClick={handleShowUserData}>
                                <img src={Profile} alt="perfil" />
                                <p>Administrar perfil</p>
                            </span>
                        </div>
                        <div className="container2">
                            <span>
                                <img src={Tranlation} alt="idioma" />
                                <p>Idioma</p>
                            </span>
                            <span>
                                <img id="icon-theme" src={Theme} alt="tema" />
                                <p>Tema</p>
                            </span>
                        </div>
                        <div className="container3">
                            <span onClick={handleClickLogout}>
                                <img src={Logout} alt="salir" />
                                <p>Salir</p>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            {showUserData && <section onClick={handleHideUserData} id="container_background">
                <div data-aos="zoom-out" data-aos-duration="500" id="container_user_data" onClick={handleClickInside}>
                    <span className="title_user_container">
                        <p>Administrar perfil</p>
                        <img onClick={handleHideUserData} src={Close} alt="cerrar" />
                    </span>
                    <div className="profile_user_container">
                        <div className="options_container">
                            <span className={selectedOption === 0 ? 'user-selected' : ''} onClick={() => handleOptionClick(0)}>
                                <img src={Profile} alt="administrar perfil" />
                                <p>Cuenta</p>
                            </span>
                            <span className={selectedOption === 1 ? 'user-selected' : ''} onClick={() => handleOptionClick(1)}>
                                <img src={IconPassword} alt="cambiar contraseña" />
                                <p>Contraseña</p>
                            </span>
                            <span className={selectedOption === 2 ? 'user-selected' : ''} onClick={() => handleOptionClick(2)}>
                                <img src={IconDocuments} alt="historia clinica" />
                                <p>Historia clínica</p>
                            </span>
                        </div>
                        <div className="container4">
                            {selectedOption === 0 && <div className="info_change_container">
                                <div className="img_change_container">
                                    <h5>Cambiar su imagen de perfil</h5>
                                    <div>
                                        <input type="file" id="imagen" name="imagen" accept="image/*" style={{ display: "none" }} onChange={handleImageChange}/>
                                        <div id={selectedImage !== ImgUser ? "id-same" : "id-different"} className="preview_container">
                                            <img id={selectedImage !== ImgUser ? "id-same" : "id-different"} src={selectedImage} alt="Vista previa de la imagen" />
                                        </div>
                                        <div className="buttons_preview_container">
                                            <button onClick={handleUploadClick}>Subir</button>
                                            {selectedImage !== ImgUser &&<button onClick={handleRemoveClick}>Quitar</button>}
                                        </div>
                                    </div>
                                </div>
                                <UserDetail/>
                            </div>}
                            {selectedOption === 1 && <div className="password_change_container">
                                
                            </div>}
                            {selectedOption === 2 && <div className="history_change_container">

                            </div>}
                        </div>
                    </div>
                </div>
            </section>}
        </React.Fragment>
    )
}