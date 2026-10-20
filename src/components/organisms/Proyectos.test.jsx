
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Proyectos from "./Proyectos";

describe("Proyectos", () => {

    it("muestra el título de la sección", () => {
        render(<Proyectos />);

        expect(
            screen.getByRole("heading", { name: "Mis Proyectos" })
        ).toBeInTheDocument();
    });

    it("muestra los proyectos del portafolio", () => {
        render(<Proyectos />);

        expect(screen.getByText("Portafolio Personal"))
            .toBeInTheDocument();

        expect(screen.getByText("EduApp"))
            .toBeInTheDocument();

        expect(screen.getByText("SplitPay"))
            .toBeInTheDocument();

        expect(screen.getByText("ZonaLibros"))
            .toBeInTheDocument();
    });

});
