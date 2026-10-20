
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navegacion from "./Navegacion";

describe("Navegacion", () => {

    it("muestra los enlaces de navegación", () => {
        render(<Navegacion />);

        expect(
            screen.getByRole("link", { name: "Inicio" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Sobre mí" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Mis experiencias" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Estudios" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Mis proyectos" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Contacto" })
        ).toBeInTheDocument();
    });

    it("tiene los enlaces dirigidos a las secciones correctas", () => {
        render(<Navegacion />);

        expect(
            screen.getByRole("link", { name: "Inicio" })
        ).toHaveAttribute("href", "#part-1");

        expect(
            screen.getByRole("link", { name: "Sobre mí" })
        ).toHaveAttribute("href", "#part-2");

        expect(
            screen.getByRole("link", { name: "Mis experiencias" })
        ).toHaveAttribute("href", "#part-3");

        expect(
            screen.getByRole("link", { name: "Estudios" })
        ).toHaveAttribute("href", "#part-5");

        expect(
            screen.getByRole("link", { name: "Mis proyectos" })
        ).toHaveAttribute("href", "#part-4");

        expect(
            screen.getByRole("link", { name: "Contacto" })
        ).toHaveAttribute("href", "#part-6");
    });

});
