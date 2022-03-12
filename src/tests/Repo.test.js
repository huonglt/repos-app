import { render, screen } from "@testing-library/react";
import Repo from "../components/Repo";

describe("Repo component", () => {
  it("UI shows correctly", () => {
    render(<Repo name="my-repo" full_name="huonglt/my-repo" description="a react app repo"/>);
    expect(screen.getByText("my-repo")).toBeInTheDocument();
    expect(screen.getByText("huonglt/my-repo")).toBeInTheDocument();
    expect(screen.getByText("a react app repo")).toBeInTheDocument();
  });
});