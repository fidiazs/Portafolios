
import { Anchor } from "antd";

function Navegacion() {
    return (
        <div style={{
            padding: "20px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "50px"
        }}>
            <Anchor
                direction="horizontal"
                items={[
                    { key: "part-1", href: "#part-1", title: "Inicio" },
                    { key: "part-2", href: "#part-2", title: "Sobre mí" },
                    { key: "part-3", href: "#part-3", title: "Mis experiencias" },
                    { key: "part-5", href: "#part-5", title: "Estudios" },
                    { key: "part-4", href: "#part-4", title: "Mis proyectos" },
                    { key: "part-6", href: "#part-6", title: "Contacto" }
                ]}
            />
        </div>
    );
}

export default Navegacion;
