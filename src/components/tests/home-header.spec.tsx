import { render, screen } from "@testing-library/react";
import HomeHeader from "../home-header";

describe("HomeHeader", () => {
    it("should render correctly", () => {
        render(<HomeHeader/>)

        expect(screen.getByText("About Us")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Admin Login")).toBeInTheDocument();


    })
})