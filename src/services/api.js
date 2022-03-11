export const QUERY_REPOS_URL =
  "https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc";
export const REQUEST_HEADER = {
  Accept: "application/vnd.github.v3+json",
};

/**
 * Method to query all repos for vacasaoss sorting by starrs desending order
 * Might get 403 if rate limit exceeded. The error is below:
 * {
 * "message":"API rate limit exceeded for 118.92.32.240. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
 * "documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
 * }
 */
export const getRepos = async () => {
  let err = null;
  try {
    const response = await fetch(QUERY_REPOS_URL, {
      method: "GET",
      headers: REQUEST_HEADER,
    });

    /**
     * response.json() returns a promise so need await
     */
    const data = await response.json();
    
    // checking for valid server data. items must exist and must be an array
    if (Array.isArray(data.items)) {
      let items = [];
      data.items.map(({ name, full_name, description }) =>
        items.push({ name, full_name, description })
      );
      return items;
    } else {
      // stale server data
      err = new Error('stale server data');
    }
  } catch (error) {
    // 403 error, network error etc
    err = error;
  }
  return err;
};
