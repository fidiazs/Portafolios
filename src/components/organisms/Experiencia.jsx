
import { Timeline } from "antd";

function Experiencia() {
    const experiencias = [
        {
            cargo: "Ayudante de profesor de ski",
            empresa: "La Parva",
            inicio: "07/2023",
            termino: "09/2023"

        },
        {
            cargo: "Reponedor",
            empresa: "Tottus",
            inicio: "06/2026",
            termino: "07/2026"
        },

    ];

    return (
        <section id="part-3" className="experiencia">
            <h1>Mis experiencias</h1>

            <Timeline
                items={experiencias.map(exp => ({
                    children: (
                        <div>
                            <h3>{exp.cargo}</h3>
                            <p>{exp.empresa}</p>
                            <p>{exp.inicio} - {exp.termino}</p>
                        </div>
                    )
                }))}
            />
        </section>
    );
}

export default Experiencia;
