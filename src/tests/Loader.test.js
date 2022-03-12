import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";

describe("Loader", () => {
  it("ui correct", () => {
    render(<Loader/>);
    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });
});