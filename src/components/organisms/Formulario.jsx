
import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

function Formulario() {
    const [validado, setValidado] = useState(false);
    const [form] = Form.useForm();

    const enviarFormulario = () => {
        form.resetFields();
        setValidado(true);
    };

    return (
        <section id="part-6" className="formulario">
            <h1>Formulario</h1>

            <p>¿Quieres contactarme? Envíame un mensaje.</p>

            {validado && (
                <Alert
                    className="aviso-exito"
                    message="Mensaje enviado correctamente"
                    type="success"
                    showIcon
                    closable
                    onClose={() => setValidado(false)}
                />
            )}

            <Form
                form={form}
                layout="vertical"
                className="formulario-contacto"
                onFinish={enviarFormulario}
                onValuesChange={() => setValidado(false)}
            >
                <Form.Item
                    label="Nombre"
                    name="nombre"
                    rules={[
                        { required: true, whitespace: true, message: "Ingresa tu nombre" }
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
                        { required: true, whitespace: true, message: "Escribe un mensaje" },
                        { min: 10, message: "Escribe al menos 10 caracteres" }
                    ]}
                >
                    <Input.TextArea rows={5} placeholder="Tu mensaje..." />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Enviar mensaje
                </Button>
            </Form>

            <div className="redes-sociales">
                <a
                    href="https://github.com/fidiazs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubOutlined /> GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/felipe-d%C3%ADaz-6516b22bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinOutlined /> LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Formulario;
