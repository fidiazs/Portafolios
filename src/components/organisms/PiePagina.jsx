
import { Layout } from "antd";

function PiePagina() {
    const anioActual = new Date().getFullYear();

    return (
        <Layout.Footer className="pie-pagina">
            <p>
                © {anioActual} Mi Portafolio.
                Todos los derechos reservados.
            </p>

            <p>
                Contacto:
                <a href="#part-6"> Formulario de contacto</a>
            </p>
        </Layout.Footer>
    );
}

export default PiePagina;
