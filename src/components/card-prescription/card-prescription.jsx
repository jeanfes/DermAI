import "./card-prescription.css"
import Download from "../../assets/download-arrow.png";
import Drugs from "../../assets/drugs.png";
export function CardPrescription(props) {
    return (
        <article className="card_prescription">
            <div className="temporary_text">
                <img src={Drugs} alt="Imagen de drogas" />
            </div>
            <div className="card_content">
                <span className="card_title">{props.doctor}</span>
                <span className="card_subtitle">{props.date}</span>
                <ul className="card_description">{props.list.map((item, index) => (
                    <li key={index}><p>{item.name} - {item.dosage}</p></li>
                ))}</ul>
                <button><img src={Download} alt="descargar autorizacion" /></button>
            </div>
        </article>
    );
}