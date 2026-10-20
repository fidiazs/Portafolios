
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Formulario from "./Formulario";

describe("Formulario", () => {

    it("muestra los campos y el botón de enviar", () => {
        render(<Formulario />);

        expect(screen.getByRole("textbox", { name: "Nombre" }))
            .toBeInTheDocument();

        expect(screen.getByRole("textbox", { name: "Correo electrónico" }))
            .toBeInTheDocument();

        expect(screen.getByRole("textbox", { name: "Mensaje" }))
            .toBeInTheDocument();

        expect(screen.getByRole("button", { name: "Enviar mensaje" }))
            .toBeInTheDocument();
    });

    it("muestra errores cuando los campos están vacíos", async () => {
        render(<Formulario />);

        fireEvent.click(
            screen.getByRole("button", { name: "Enviar mensaje" })
        );

        expect(await screen.findByText("Ingresa tu nombre"))
            .toBeInTheDocument();

        expect(await screen.findByText("Ingresa tu correo"))
            .toBeInTheDocument();

        expect(await screen.findByText("Escribe un mensaje"))
            .toBeInTheDocument();
    });

    it("muestra un error cuando el correo es inválido", async () => {
        render(<Formulario />);

        fireEvent.change(
            screen.getByRole("textbox", { name: "Correo electrónico" }),
            { target: { value: "correo-invalido" } }
        );

        fireEvent.click(
            screen.getByRole("button", { name: "Enviar mensaje" })
        );

        expect(await screen.findByText("Correo no válido"))
            .toBeInTheDocument();
    });

    it("muestra el aviso de éxito y limpia los campos", async () => {
        render(<Formulario />);

        const nombre = screen.getByRole("textbox", { name: "Nombre" });
        const correo = screen.getByRole("textbox", { name: "Correo electrónico" });
        const mensaje = screen.getByRole("textbox", { name: "Mensaje" });

        fireEvent.change(nombre, {
            target: { value: "Juan Pérez" }
        });

        fireEvent.change(correo, {
            target: { value: "juan@correo.com" }
        });

        fireEvent.change(mensaje, {
            target: { value: "Hola, quiero contactarte." }
        });

        fireEvent.click(
            screen.getByRole("button", { name: "Enviar mensaje" })
        );

        expect(
            await screen.findByText("Mensaje enviado correctamente")
        ).toBeInTheDocument();


        await waitFor(() => {
            expect(
                screen.getByRole("textbox", { name: "Nombre" })
            ).toHaveValue("");

            expect(
                screen.getByRole("textbox", { name: "Correo electrónico" })
            ).toHaveValue("");

            expect(
                screen.getByRole("textbox", { name: "Mensaje" })
            ).toHaveValue("");
        });

    });


});
