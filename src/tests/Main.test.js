import { render, screen } from "@testing-library/react";
import Main from "../components/Main";
import { getRepos } from "../apis/api";
import userEvent from "@testing-library/user-event";

jest.mock("../apis/api");


describe("Main component", () => {
  beforeEach(() => {
    const mockRepos = [
      { name: 'repo-app', full_name: 'huonglt/repo-app', description: 'list all repos on github of an organization'}
    ];
    // mock getRepos to resolve mock data in 0s
    getRepos.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockRepos);
        }, 10);
      });
    });
  });

  it("Repositories page shown initially", async () => {
    render(<Main/>);

    // Exist 2 Repositories text in the document
    expect(screen.getAllByText("Repositories").length).toEqual(2);
    // Text Loading data is shown
    const loadingData = await screen.findByText("Loading data...");
    expect(loadingData).toBeInTheDocument()
    
    // api service success, repos details in the document
    let name = await screen.findByText("repo-app");
    expect(name).toBeInTheDocument();
    let full_name = await screen.findByText("huonglt/repo-app");
    expect(full_name).toBeInTheDocument();
    let description = await screen.findByText("list all repos on github of an organization");
    expect(description).toBeInTheDocument();
  });

  it("Click Settings nav item, Settings page shown correctly", () => {
    render(<Main/>);

    // click Settings nav item
    userEvent.click(screen.getByText("Settings"));

    // 2 text Settings found
    expect(screen.getAllByText("Settings").length).toEqual(2);

    // rest of ui of Settings page
    expect(screen.getByTestId("vacasa-logo")).toBeInTheDocument();
    expect(screen.getByText("Vacasa Interview")).toBeInTheDocument();
    expect(screen.getByText("vacasa.interview@vacasa.com")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  })
});