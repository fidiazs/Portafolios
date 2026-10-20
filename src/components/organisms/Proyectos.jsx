
import TarjetaProyecto from "../molecules/TarjetaProyecto";

function Proyectos() {


    const proyectos = [
        {
            id: 1,
            titulo: "Portafolio Personal",
            imagen: "/Portafolio.png",
            repositorio: "https://github.com/fidiazs/Portafolios"
        },
        {
            id: 2,
            titulo: "EduApp",
            imagen: "/EduApp.png",
            repositorio: "https://github.com/fidiazs/EduApp"
        },
        {
            id: 3,
            titulo: "SplitPay",
            imagen: "/SplitPay.png",
            repositorio: "https://github.com/fidiazs/SplitPay"
        },
        {
            id: 4,
            titulo: "ZonaLibros",
            imagen: "/ZonaLibros.png",
            repositorio: "https://github.com/fidiazs/evaluacion-formativa"
        }
    ];


    return (
        <section id="part-4" className="proyectos">
            <h1>Mis Proyectos</h1>

            <div className="lista-proyectos">
                {proyectos.length > 0 ? (
                    proyectos.map(proyecto => (
                        <TarjetaProyecto
                            key={proyecto.id}
                            titulo={proyecto.titulo}
                            imagen={proyecto.imagen}
                            repositorio={proyecto.repositorio}
                        />
                    ))
                ) : (
                    <p>No hay proyectos disponibles.</p>
                )}
            </div>
        </section>
    );
}

export default Proyectos;
