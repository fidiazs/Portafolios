
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SobreMi from "./SobreMi";

describe("SobreMi", () => {

    it("muestra el título de la sección", () => {
        render(<SobreMi />);

        expect(
            screen.getByRole("heading", { name: "Sobre mí" })
        ).toBeInTheDocument();
    });

    it("muestra la descripción personal", () => {
        const { container } = render(<SobreMi />);

        const parrafos = container.querySelectorAll(".sobre-mi p");

        expect(parrafos.length).toBeGreaterThan(0);

        expect(
            [...parrafos].some(parrafo => parrafo.textContent.trim().length > 0)
        ).toBe(true);
    });

    it("muestra el avatar del perfil", () => {
        const { container } = render(<SobreMi />);

        expect(
            container.querySelector(".ant-avatar")
        ).toBeInTheDocument();
    });

});
