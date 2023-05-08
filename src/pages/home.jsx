import "../styles/home.css";
import React, { useState } from 'react';
import ImgHome from "../assets/imginicio.png";
import Bot from "../assets/chatbot.png";
import Videochat from "../assets/videochat.png";
import Face from "../assets/face.png";
import SearchIcon from "../assets/loupe.png";
export function Home() {
    const [images, setImages] = useState([
        { src: ImgHome },
        { src: Videochat },
        { src: Face },
        { src: Bot },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };
    const handleNextClick = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
    return (
        <main className="main_container_home">
            <section className="section_img_container">
                <div className="main_text_home">
                    <p id="one-text">Encuentra la solución<br /><b>perfecta para tu piel</b><br /><b>aqui.</b></p>
                    <p id="two-text">Nuestro chatbot personalizado puede responder a tus preguntas<br />y recomendarte los mejores tratamientos para ti.</p>
                    <div className="chatbot_container">
                        <p>¿Tienes alguna pregunta?</p>
                        <div className="icons_chatbot">
                            <picture>
                                <img src={SearchIcon} alt="icono de lupa" />
                            </picture>
                        </div>
                    </div>
                </div>
                <img id="img-home" src={ImgHome} alt="Imagen de una person hablando con un medico." />
            </section>
            <section className="section_features_container">
                <div className="features_container">
                    <div className="feature_box">
                        <picture>
                            <img src={Bot} alt="" />
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
                            <img src={Face} alt="" />
                        </picture>
                        <div>
                            <span className="title">Facial AI</span>
                            <p>Usa nuestra tecnología de reconocimiento facial para recibir recomendaciones de tratamiento.</p>
                        </div>
                    </div>
                </div>
                <div className="features_container">
                    <div className="feature_box">
                        <picture>
                            <img src={Videochat} alt="" />
                        </picture>
                        <div>
                            <span className="title">Telemedicina</span>
                            <p>Obtenga la mejor atención para su piel en una videollamada con nuestros expertos en dermatología.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_doctors_container">
                <div className="info_doctors">
                    <h3>Medicos calificados</h3>
                    <p>Nuestros servicios son proporcionados directamente por médicos especialistas experimentados y profesionales, quienes le brindarán la atención adecuada para su piel</p>
                </div>
                <div className="img_doctors">
                    <div className="carousel">
                        <div className="images" style={{ overflow: 'hidden' }}>
                            <img src={images[currentIndex].src} alt="" />
                        </div>
                        <div className="controls">
                            <button onClick={handlePrevClick}>/</button>
                            <button onClick={handleNextClick}>*</button>
                        </div>
                        <div className="indicators">
                            {images.map((image, index) => (
                                <div key={index} className={`indicator ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </main>
    )
}