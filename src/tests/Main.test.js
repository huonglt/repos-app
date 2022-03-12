import { render, screen } from "@testing-library/react";
import Main from "../components/Main";
import { getRepos } from "../apis/api";

jest.mock("../apis/api");


describe("Main component", () => {
  it("Repositories page shown initially", async () => {
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
});