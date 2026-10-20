
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

function Formulario() {
    const [validado, setValidado] = useState(false);

    return (
        <section id="part-6" className="formulario">
            <h1>Formulario</h1>

            <p>¿Quieres contactarme? Envíame un mensaje.</p>

            <Form
                layout="vertical"
                className="formulario-contacto"
                onFinish={() => setValidado(true)}
                onValuesChange={() => setValidado(false)}
            >
                <Form.Item
                    label="Nombre"
                    name="nombre"
                    rules={[
                        { required: true, message: "Ingresa tu nombre" }
                    ]}
                >
                    <Input placeholder="Tu nombre" />
                </Form.Item>

                <Form.Item
                    label="Correo electrónico"
                    name="correo"
                    rules={[
                        { required: true, message: "Ingresa tu correo" },
                        { type: "email", message: "Correo no válido" }
                    ]}
                >
                    <Input placeholder="ejemplo@correo.com" />
                </Form.Item>

                <Form.Item
                    label="Mensaje"
                    name="mensaje"
                    rules={[
                        { required: true, message: "Escribe un mensaje" },
                        { min: 10, message: "Escribe al menos 10 caracteres" }
                    ]}
                >
                    <Input.TextArea rows={5} placeholder="Tu mensaje..." />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Enviar mensaje
                </Button>
            </Form>

            {validado && (
                <p role="status">
                    Formulario validado correctamente.
                    El envío del mensaje aún no está configurado.
                </p>
            )}

            <div className="redes-sociales">
                <a
                    href="https://github.com/fidiazs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubOutlined /> GitHub
                </a>
            </div>
        </section>
    );
}

export default Formulario;
