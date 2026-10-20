import {useEffect} from 'react';
import PlantillaPortafolio from "../components/templates/PlantillaPortafolio";
import SobreMi from "../components/organisms/SobreMi";
import Experiencia from "../components/organisms/Experiencia";
import Estudios from "../components/organisms/Estudios";
import Proyectos from "../components/organisms/Proyectos";
import Formulario from "../components/organisms/Formulario.jsx";

function PaginaPrincipal() {
    useEffect(() => {
        document.title = "Mi portafolio";
    }, [])
        return (
            <PlantillaPortafolio>

                <section id="part-1" className="inicio">
                    <h1>Hola, Soy Felipe</h1>
                    <p>Bienvenido, este es mi portafolio personal.
                        A continuacion puedes conocer mas sobre mi,
                        mis experiencias, mis estudio y los proyectos que he realizado.
                        Por ultimo hay un formulario por si deseas contactarme.</p>
                </section>


                <SobreMi />
                <Experiencia />
                <Estudios />
                <Proyectos />
                <Formulario/>
            </PlantillaPortafolio>
        );
}

export default PaginaPrincipal;
