import { getRepos } from "./api.js";

describe("api module", () => {
  /**
   * Mock fetch
   */
  const realFetch = global.fetch;

  beforeAll(() => {
    global.fetch = () => {
      Promise.resolve({
        kson: () => Promise.resolve([]),
      });
    };
  });

  afterAll(() => {
    global.fetch = realFetch;
  });

  it("getRepos has url and header accept correctly", async () => {});
});
