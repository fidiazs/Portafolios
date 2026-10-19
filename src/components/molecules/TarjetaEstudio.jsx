
import { Card } from "antd";

function TarjetaEstudio({ institucion, titulo, periodo }) {
    return (
        <Card className="tarjeta-estudio" hoverable>
            <h3>{titulo}</h3>
            <p>{institucion}</p>
            <p>{periodo}</p>
        </Card>
    );
}

export default TarjetaEstudio;
