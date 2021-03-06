import RepoList from "../components/RepoList";
import { render, screen } from "@testing-library/react";
import { getRepos } from '../apis/api';
import userEvent from "@testing-library/user-event";

jest.mock('../apis/api');

const mockRepos = [
      { name: 'repo-app', full_name: 'huonglt/repo-app', description: 'list all repos on github of an organization'},
      { name: 'react-app', full_name: 'huonglt/react-app', description: 'create simple react app'}
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
        }, 10);
      });
    });

    // render RepoList component
    render(<RepoList/>);

    // Text Repositories in the document
    expect(screen.getByText("Repositories")).toBeInTheDocument();

    // Text Loading data is shown
    const loadingData = await screen.findByText("Loading data...");
    expect(loadingData).toBeInTheDocument()

    // api service success, 2 repos details in the document
    let name = await screen.findByText("repo-app");
    expect(name).toBeInTheDocument();
    let full_name = await screen.findByText("huonglt/repo-app");
    expect(full_name).toBeInTheDocument();
    let description = await screen.findByText("list all repos on github of an organization");
    expect(description).toBeInTheDocument();

    name = await screen.findByText("react-app");
    expect(name).toBeInTheDocument();
    full_name = await screen.findByText("huonglt/react-app");
    expect(full_name).toBeInTheDocument();
    description = await screen.findByText("create simple react app");
    expect(description).toBeInTheDocument();
  });

  it('getRepos api fail, message Error while loading data shown and user can retry', async () => {
    // mock getRepos to reject in 0s
    getRepos.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('An error'));
        }, 10);
      });
    });

    // render RepoList component
    render(<RepoList/>);

    // Text Repositories in the document
    expect(screen.getByText("Repositories")).toBeInTheDocument();

    // Text Loading data is shown
    const loadingData = await screen.findByText("Loading data...");
    expect(loadingData).toBeInTheDocument()

    // Error while loading data
    const errMsg = await screen.findByText('Error while loading data');
    expect(errMsg).toBeInTheDocument();

    // click Retry button, getRepos is called
    // getRepos called 1s when component render, 2nd time when user click Retry button
    userEvent.click(screen.getByText('Retry'));
    expect(getRepos).toHaveBeenCalledTimes(2);
  });
});