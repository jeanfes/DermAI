import React, { useState, useEffect, useRef } from "react";
import "./appointment.css";
import Add from "/favicon.ico";
import Delete from "../../assets/x.png"
import Clock from "../../assets/clock.png"
import Doctor from "../../assets/doctor.png"
export function Appointment() {
  const refMakeAppointment = useRef(null);
  const [currYear, setCurrYear] = useState(0);
  const [currMonth, setCurrMonth] = useState(0);
  const [date, setDate] = useState(new Date());
  const [months] = useState([
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]);

  useEffect(() => {
    setCurrYear(date.getFullYear());
    setCurrMonth(date.getMonth());
  }, [date]);

  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive_day">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive_day">${i - lastDayofMonth + 1}</li>`;
    }
    return liTag;
  };

  const handlePrevNextClick = (iconId) => {
    let newMonth = currMonth;
    if (iconId === "prev") {
      newMonth = currMonth - 1;
      if (newMonth < 0) {
        setCurrYear(currYear - 1);
        newMonth = 11;
      }
    } else {
      newMonth = currMonth + 1;
      if (newMonth > 11) {
        setCurrYear(currYear + 1);
        newMonth = 0;
      }
    }

    setCurrMonth(newMonth);
    setDate(new Date(currYear, newMonth, new Date().getDate()));
  };
  const [showMakeAppointment, setshowMakeAppointment] = useState(false);
  const handleShowMakeAppointment = () => {
    setshowMakeAppointment(true);
  };
  const handleHideMakeAppointment = () => {
    setshowMakeAppointment(false);
  };
  const SaveAppointment = () => {
    setshowMakeAppointment(false);
  };
  function handleClickInside(event) {
    event.stopPropagation();
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        refMakeAppointment.current &&
        !refMakeAppointment.current.contains(event.target)
      ) {
        setshowMakeAppointment(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <section className="section_appointment">
      <div className="make_appointment_container">
        <span onClick={handleShowMakeAppointment} ref={refMakeAppointment}>
          <img src={Add} alt="" />
          <button>Agendar cita</button>
        </span>
        {showMakeAppointment && <div data-aos="zoom-in" data-aos-duration="500" className="appointment_form" onClick={handleClickInside}>
          <picture>
            <img onClick={handleHideMakeAppointment} src={Delete} alt="" />
          </picture>
          <input type="text" name="" id="description_appointment" placeholder="Agregar descripcion" />
          <div id="date_container">
            <img src={Clock} alt="" />
            <label htmlFor="fecha">
              <input type="date" id="fecha" name="fecha" />
            </label>
            <label htmlFor="hora">
              <input type="time" id="hora" name="hora" />
            </label>
          </div>
          <div id="doc_appointment_datalist">
            <img src={Doctor} alt="" />
            <input type="text" id="fruta" list="medicos" />
            <datalist id="medicos">
              <option value="Juan" />
              <option value="Pedro" />
              <option value="Luis" />
              <option value="Jose" />
              <option value="Jorge" />
            </datalist>
          </div>
          <button id="appointment_save" onClick={SaveAppointment}>
            Guardar
          </button>
        </div>}
        <div className="wrapper">
          <aside>
            <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
            <div className="icons">
              <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNextClick("prev")}>
                chevron_left
              </span>
              <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNextClick("next")}>
                chevron_right
              </span>
            </div>
          </aside>
          <div className="calendar">
            <ul className="weeks">
              <li>Dom</li>
              <li>Lun</li>
              <li>Mar</li>
              <li>Mié</li>
              <li>Jue</li>
              <li>Vie</li>
              <li>Sáb</li>
            </ul>
            <ul className="days" dangerouslySetInnerHTML={{ __html: renderCalendar() }}></ul>
          </div>
        </div>
      </div>
      <div className="big_calendary_container">
          <div className="calendar_big">
            <ul className="weeks_big">
              <li>Dom</li>
              <li>Lun</li>
              <li>Mar</li>
              <li>Mié</li>
              <li>Jue</li>
              <li>Vie</li>
              <li>Sáb</li>
            </ul>
            <ul className="days_big" dangerouslySetInnerHTML={{ __html: renderCalendar() }}></ul>
          </div>
      </div>
    </section>
  );
};
