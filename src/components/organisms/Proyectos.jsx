
import TarjetaProyecto from "../molecules/TarjetaProyecto";

function Proyectos() {

    const proyectos = [
        {
            id: 1,
            titulo: "Portafolio Personal",
            imagen: "/portafolio.png",
            repositorio: ""
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
