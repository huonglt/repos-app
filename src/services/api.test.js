import { getRepos } from "./api.js";

describe("api module", () => {
  beforeAll(() => jest.spyOn(global, "fetch"));

  it("getRepos has url and header accept correctly", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    await getRepos();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
