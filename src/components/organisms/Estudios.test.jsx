
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Estudios from "./Estudios";

describe("Estudios", () => {

    it("muestra la institución educativa", () => {
        render(<Estudios />);

        expect(
            screen.getByText("Duoc UC")
        ).toBeInTheDocument();
    });

    it("muestra la carrera estudiada", () => {
        render(<Estudios />);

        expect(
            screen.getByText("Analista Programador")
        ).toBeInTheDocument();
    });

});
