
import { Timeline } from "antd";

function Experiencia() {
    const experiencias = [];

    return (
        <section id="part-3" className="experiencia">
            <h1>Mis experiencias</h1>

            {experiencias.length > 0 ? (
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
            ) : (
                <p>Próximamente agregaré mis experiencias laborales.</p>
            )}
        </section>
    );
}

export default Experiencia;
