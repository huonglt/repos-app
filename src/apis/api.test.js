import { getRepos, QUERY_REPOS_URL } from "./api.js";

describe("api module", () => {
  // spy on jest
  beforeAll(() => jest.spyOn(global, "fetch"));

  it("getRepos has url, header accept and return data correctly", async () => {

    // return an empty array of items
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ items: [] }),
    });

    // call getRepos method
    const data = await getRepos();

    // fetch been called
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // a get method with correct url, and Accept header
    expect(global.fetch).toHaveBeenCalledWith(
      QUERY_REPOS_URL,
      expect.objectContaining({
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
    );

    // data is an empty array
    expect(data).toEqual([]);
  });
});
