
import Perfil from "../atoms/Perfil.jsx";

function PersonalSection() {
    return (
        <section id="part-2" className="sobre-mi">
            <Perfil />

            <h1>Sobre mí</h1>

            <p>
                Mi nombre es Felipe Diaz y actualmente estoy estudiando
                la carrera de analista programador.
            </p>
            <br/>
            <p>
                Me gusta la programacion y me gusta la idea de poder crear
                aplicaciones que puedan automatizar tareas o simplificar procesos
                los cuales son complicados o toman mucho tiempo.
            </p>
        </section>
    );
}

export default PersonalSection;
