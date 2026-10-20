
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PiePagina from "./PiePagina";

describe("PiePagina", () => {

    it("muestra el pie de página", () => {
        const { container } = render(<PiePagina />);

        expect(
            container.querySelector("footer")
        ).toBeInTheDocument();
    });

    it("muestra el año actual automáticamente", () => {
        const { container } = render(<PiePagina />);

        const anioActual = new Date().getFullYear();
        const footer = container.querySelector("footer");

        expect(footer).toHaveTextContent(String(anioActual));
    });

    it("muestra el enlace de contacto", () => {
        render(<PiePagina />);

        expect(
            screen.getByRole("link", { name: /contacto/i })
        ).toHaveAttribute("href", "#part-6");
    });

});
