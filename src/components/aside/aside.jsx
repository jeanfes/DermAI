import React from "react";
import "./aside.css";
import Calendar from "../../assets/icon-calendar.png";
import Chatbot from "../../assets/icon-chatbot.png";
import Facescanner from "../../assets/icon-facescanner.png"
import Chat from "../../assets/icon-chat.png"
import Prescriptions from "../../assets/icon-prescriptions.png"
import { Link, useLocation} from "react-router-dom";
export function Aside() {
    const location = useLocation();
    return(
        <React.Fragment>
            <section className="aside-content">
                <Link to="/user/appointment" className="icon-aside" id={location.pathname === "/user/appointment" ? "selected" : ""}>
                    <img src={Calendar} alt="citas medicas" id="IconCalendar"/>
                </Link>
                <Link to="/user/facial-ia" className="icon-aside" id={location.pathname === "/user/facial-ia" ? "selected" : ""}>
                    <img src={Facescanner} alt="reconocimiento facila" id="IconMessages"/>
                </Link>
                <Link to="/user/chatbot" className="icon-aside" id={location.pathname === "/user/chatbot" ? "selected" : ""}>
                    <img src={Chatbot} alt="chatbot" id="IconChatbot"/>
                </Link>
                <Link to="/user/messages" className="icon-aside" id={location.pathname === "/user/messages" ? "selected" : ""}>
                    <img src={Chat} alt="mensajes" id="IconChat"/>
                </Link>
                <Link to="/user/prescriptions" className="icon-aside" id={location.pathname === "/user/prescriptions" ? "selected" : ""}>
                    <img src={Prescriptions} alt="presripciones" id="IconPrescriptions"/>
                </Link>
            </section>
        </React.Fragment>
    );
}