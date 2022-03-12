import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Retry from "../components/Retry";

describe("Retry component", () => {
  it("Text and button Retry are correct", () => {
    const retry = jest.fn();
    render(<Retry retry={retry}/>);

    // message Error while loading data on the document
    expect(screen.getByText("Error while loading data")).toBeInTheDocument();

    // click Retry button, retry function will be called
    userEvent.click(screen.getByText("Retry"));
    expect(retry).toHaveBeenCalledTimes(1);
  });
});