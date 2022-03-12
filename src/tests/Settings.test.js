import { render, screen } from "@testing-library/react";
import Settings from "../components/Settings";

describe("Settings component", () => {
  it("Texts are correct, vacasa logo is shown", () => {
    render(<Settings/>);
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByTestId("vacasa-logo")).toBeInTheDocument();
    expect(screen.getByText("Vacasa Interview")).toBeInTheDocument();
    expect(screen.getByText("vacasa.interview@vacasa.com")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });
});