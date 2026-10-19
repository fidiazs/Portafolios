
import { Card, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

function TarjetaProyecto({ titulo, imagen, repositorio }) {
    return (
        <Card
            className="tarjeta-proyecto"
            title={titulo}
            hoverable
            cover={<img src={imagen} alt={`Vista previa de ${titulo}`} />}
        >
            <Button
                type="primary"
                icon={<GithubOutlined />}
                href={repositorio || undefined}
                disabled={!repositorio}
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver en GitHub
            </Button>
        </Card>
    );
}

export default TarjetaProyecto;
