import "./prescriptions.css";
import { CardPrescription } from "../card-prescription/card-prescription.jsx";

export function Prescriptions() {
    const prescriptionList = [
        { name: 'Medicamento 1', dosage: '10 mg' },
        { name: 'Medicamento 2', dosage: '5 mg' },
        { name: 'Medicamento 3', dosage: '20 mg' },
        { name: 'Medicamento 4', dosage: '15 mg' },
      ];
    return (
        <section className="section_prescriptions">
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
            <CardPrescription
                doctor="Medico 1"
                date="05-08-2023"
                list={prescriptionList}
            />
        </section>
    );
}