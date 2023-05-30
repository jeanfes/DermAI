import "./facial-ia.css";
import React from "react";
import Webcam from 'react-webcam';
export function FacialIA() {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
    }, [webcamRef]);
    return (
        <section className="section_facil-ia">
            <div>
                <Webcam audio={false} ref={webcamRef} />
                <button onClick={capture}>Capturar</button>
            </div>
        </section>
    );
}