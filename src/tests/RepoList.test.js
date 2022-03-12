import RepoList from "../components/RepoList";
import { render, screen } from "@testing-library/react";
import { getRepos } from '../apis/api';

jest.mock('../apis/api');

const mockRepos = [
      { name: 'repo-app', full_name: 'a((bc/repo-app', description: 'list all repos on github of an organization'}
    ];

describe('RepoList component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("getRepos api success with data, ui is correct", async () => {
    // mock getRepos to resolve mock data in 0s
    getRepos.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockRepos);
        }, 0);
      });
    });

    // render RepoList component
    render(<RepoList/>);

    // Text Repositories in the document
    expect(screen.getByText("Repositories")).toBeInTheDocument();

    // Text Loading data is shown
    const loadingData = await screen.findByText("Loading data...");
    expect(loadingData).toBeInTheDocument()

    // api service success, repo details in the document
    const name = await screen.findByText("repo-app");
    expect(name).toBeInTheDocument();
    const description = await screen.findByText("list all repos on github of an organization");
    expect(description).toBeInTheDocument();
  })
});