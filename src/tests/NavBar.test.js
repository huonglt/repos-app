import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../components/NavBar";

describe("NavBar component", () => {
  it("ui correct", () => {
    const selectItem = jest.fn();
    render(<NavBar activeItem="repos" selectItem={selectItem}/>);

    // Repositories & Settings in the document
    expect(screen.getByText("Repositories")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();

    // click Repositories, selectItem is called with repos
    userEvent.click(screen.getByText("Repositories"));
    expect(selectItem).toHaveBeenCalledWith("repos");

    // click Settings, selectItem is called with settings
    userEvent.click(screen.getByText("Settings"));
    expect(selectItem).toHaveBeenCalledWith("settings");
  });
});