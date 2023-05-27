import "../styles/user.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Aside } from "../components/aside/aside.jsx";
import { Appointment } from "../components/appointment/appointment.jsx";
import { FacialIA } from "../components/facial-ia/facial-ia.jsx";
import { Chatbot } from "../components/chatbot/chatbot.jsx";
import { Messages } from "../components/messages/messages.jsx";
import { Prescriptions } from "../components/prescriptions/prescriptions.jsx";
import { Header } from "../components/header/header.jsx";
export function User() {

    return (
        <div className="user_container">
            <aside className="user-aside_container">
                <Aside />
            </aside>
            <header className="user-header_container">
                <Header/>
            </header>
            <main className="user-routes_container">
                <Routes>
                    <Route exact path="/appointment" element={<Appointment />} />
                    <Route path="/facial-ia" element={<FacialIA />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/prescriptions" element={<Prescriptions />} />
                    <Route path="*" element={<Navigate to="appointment" />} />
                </Routes>
            </main>
        </div>
    );
}