
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experiencia from "./Experiencia";

describe("Experiencia", () => {

    it("muestra los cargos de la experiencia laboral", () => {
        render(<Experiencia />);

        expect(
            screen.getByText(/Reponedor/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Ayudante de profesor de esquí/i)
        ).toBeInTheDocument();
    });

    it("muestra las empresas donde trabajé", () => {
        render(<Experiencia />);

        expect(
            screen.getByText(/Tottus/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/La Parva/i)
        ).toBeInTheDocument();
    });

});
