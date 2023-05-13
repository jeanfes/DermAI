import "../styles/home.css";
import React, { useState } from 'react';
import ImgHome from "../assets/imginicio.png";
import Logo from "../assets/dermai.jpg";
import Bot from "../assets/chatbot.png";
import Videochat from "../assets/videochat.png";
import Doctor1 from "../assets/doctor1.png";
import Doctor2 from "../assets/doctor2.png";
import Doctor3 from "../assets/doctor3.png";
import Doctor4 from "../assets/doctor4.png";
import Face from "../assets/face.png";
import SearchIcon from "../assets/loupe.png";
import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"
import Linkedin from "../assets/Linkedin.svg";
import Youtube from "../assets/YouTube.svg";
import Twitter from "../assets/Twitter.svg"
import Phone from "../assets/Phone.svg"
import Location from "../assets/location.svg";
import Email from "../assets/Email.svg";
export function Home() {
    const [images, setImages] = useState([
        { src: Doctor1 },
        { src: Doctor2 },
        { src: Doctor3 },
        { src: Doctor4 },
    ]);
    const [names, setNames] = useState([
        {
            name: "Medico 1",
            profession: "Dermatologo"
        },
        {
            name: "Medico 2",
            profession: "Dermatologa"
        },
        {
            name: "Medico 3",
            profession: "Dermatologo"
        },
        {
            name: "Medico 4",
            profession: "Dermatologo"
        },
    ]);
    const [currentIndexImg, setCurrentIndexImg] = useState(0);
    const [currentIndexText, setCurrentIndexText] = useState(0);
    const handlePrevClick = () => {
        const textElementName = document.querySelector("#text_doctor_name");
        const textElementOcupation = document.querySelector("#text_doctor_ocupation");
        textElementName.setAttribute("data-aos", "fade-left");
        textElementOcupation.setAttribute("data-aos", "fade-left");
        setTimeout(() => {
            textElementName.removeAttribute("data-aos");
            textElementOcupation.removeAttribute("data-aos");
        }, 500);
        setCurrentIndexImg(currentIndexImg === 0 ? images.length - 1 : currentIndexImg - 1);
        setCurrentIndexText(currentIndexText === 0 ? names.length - 1 : currentIndexText - 1);
    };
    const handleNextClick = () => {
        const textElementName = document.querySelector("#text_doctor_name");
        const textElementOcupation = document.querySelector("#text_doctor_ocupation");
        textElementName.setAttribute("data-aos", "fade-left");
        textElementOcupation.setAttribute("data-aos", "fade-left");
        setTimeout(() => {
            textElementName.removeAttribute("data-aos");
            textElementOcupation.removeAttribute("data-aos");
        }, 500);
        setCurrentIndexImg(currentIndexImg === images.length - 1 ? 0 : currentIndexImg + 1);
        setCurrentIndexText(currentIndexText === names.length - 1 ? 0 : currentIndexText + 1);
    };
    return (
        <main className="main_container_home">
            <section className="section_img_container">
                <div data-aos="fade-right" data-aos-duration="800" data-aos-once="true" className="main_text_home">
                    <p id="one-text">Encuentra la solución<br /><b>perfecta para tu piel</b><br /><b>aqui.</b></p>
                    <p id="two-text">Nuestro chatbot personalizado puede responder a tus preguntas y recomendarte los mejores tratamientos para ti.</p>
                    <div className="chatbot_container">
                        <p>¿Tienes alguna pregunta?</p>
                        <div className="icons_chatbot">
                            <picture>
                                <img src={SearchIcon} alt="icono de lupa" />
                            </picture>
                        </div>
                    </div>
                </div>
                <img data-aos="fade-left" data-aos-duration="800" data-aos-once="true" id="img-home" src={ImgHome} alt="Imagen de una person hablando con un medico." />
            </section>
            <section data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" className="section_features_container">
                <div className="features_container">
                    <div className="feature_box">
                        <picture>
                            <img src={Bot} alt="icono de chat con IA" />
                        </picture>
                        <div>
                            <span className="title">Chatbot</span>
                            <p>Obtenga respuestas precisas a sus preguntas de dermatología a través de nuestro chatbot</p>
                        </div>
                    </div>
                </div>
                <div className="features_container">
                    <div className="feature_box">
                        <picture>
                            <img src={Face} alt="icono de carita" />
                        </picture>
                        <div>
                            <span className="title">Facial AI</span>
                            <p>Usa nuestro reconocimiento facial para recibir recomendaciones de tratamiento.</p>
                        </div>
                    </div>
                </div>
                <div className="features_container">
                    <div className="feature_box">
                        <picture>
                            <img src={Videochat} alt="icono de videollamada" />
                        </picture>
                        <div>
                            <span className="title">Telemedicina</span>
                            <p>Obtenga la mejor atención para su piel en una videollamada con nuestros expertos en dermatología.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_doctors_container">
                <div data-aos="zoom-in-left" data-aos-duration="800" data-aos-once="true" className="title_info_doctors">
                    <h3>Medicos calificados</h3>
                    <p>Nuestros servicios son proporcionados directamente por médicos especialistas experimentados, quienes le brindarán la atención adecuada para su piel.</p>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="800" data-aos-once="true" className="info_doctors_container">
                    <div className="container_info">
                        <p id="text_doctor_name">{names[currentIndexText].profession}</p>
                        <p id="text_doctor_ocupation">{names[currentIndexText].name}</p>
                    </div>
                </div>
                <div data-aos="zoom-in-right" data-aos-duration="800" data-aos-once="true" className="img_doctors">
                    <div className="carousel">
                        <div className="images" style={{ overflow: 'hidden' }}>
                            <img src={images[currentIndexImg].src} alt="imagen de doctor" />
                        </div>
                        <div className="controls">
                            <button onClick={handlePrevClick}><div className="arrow_left"></div></button>
                            <button onClick={handleNextClick}><div className="arrow_right"></div></button>
                        </div>
                        <div className="indicators">
                            {images.map((image, index) => (
                                <div key={index} className={`indicator ${index === currentIndexImg ? 'active' : ''}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_footer">
                <div className="footer_logo_container">
                    <img src={Logo} alt="" />
                    <h3>DermAI</h3>
                    <p>Dermatología a tu disposición, atención <br />personalizada y profesional para el cuidado de tu piel</p>
                    <picture className="img_social_container">
                        <img src={Facebook} alt="facebook" /><img src={Twitter} alt="twitter" /><img src={Instagram} alt="instagram" /><img src={Youtube} alt="youtube" /><img src={Linkedin} alt="linkedin" />
                    </picture>
                </div>
                <div className="footer_links_container">
                    <ul>
                        <h4>Producto</h4>
                        <li>Caracteristicas</li>
                        <li>Actualizaciones</li>
                        <li>Testimonios</li>
                    </ul>
                    <ul>
                        <h4>Empresa</h4>
                        <li>Nosotros</li>
                        <li>Cultura</li>
                        <li>Contactanos</li>
                    </ul>
                    <ul>
                        <h4>Soporte</h4>
                        <li>FAQ</li>
                        <li>Ayuda</li>
                        <li>Reportar fallo</li>
                    </ul>
                    <ul id="footer_link_contact">
                        <h4>Contactanos</h4>
                        <li><img src={Email} alt="icono de email" /><p>contact@company.com</p></li>
                        <li><img src={Phone} alt="icono de telefono" /><p>(57) 123 456 7898</p></li>
                        <li><img src={Location} alt="icono de ubicacion" /><p>Cra 12B #34 C 56</p></li>
                    </ul>
                </div>
            </section>
            <div className="terms_container">
                <p>Copyright © 2023</p>
                <ul>
                    <li>Todos los derechos reservados  |</li>
                    <li>Terminos y condiciones  |</li>
                    <li>Politicas de privacidad  |</li>
                </ul>
            </div>
        </main>
    )
}