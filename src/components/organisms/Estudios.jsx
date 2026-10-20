
import TarjetaEstudio from "../molecules/TarjetaEstudio";

function Estudios() {
    const estudios = [
        {
            id: 1,
            institucion: "Duoc UC",
            titulo: "Analista Programador",
            periodo: "2024 - Actualidad"
        }
    ];

    return (
        <section id="part-5" className="estudios">
            <h1>Mis Estudios</h1>

            <div className="lista-estudios">
                {estudios.map(estudio => (
                    <TarjetaEstudio
                        key={estudio.id}
                        institucion={estudio.institucion}
                        titulo={estudio.titulo}
                        periodo={estudio.periodo}
                    />
                ))}
            </div>
        </section>
    );
}

export default Estudios;
