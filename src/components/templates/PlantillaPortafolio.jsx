
import Navegacion from "../organisms/Navegacion";
import PiePagina from "../organisms/PiePagina";

function PlantillaPortafolio({ children }) {
    return (
        <>
            <Navegacion />

            <main>
                {children}
            </main>

            <PiePagina />
        </>
    );
}

export default PlantillaPortafolio;
