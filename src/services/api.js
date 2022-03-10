export const QUERY_REPOS_URL =
  "https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc";
export const REQUEST_HEADER = {
  Accept: "application/vnd.github.v3+json",
};

/**
 * Method to query all repos for vacasaoss sorting by starrs desending order
 * @returns {Object}
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
    console.error(`error while fetching repos: ${error}`);
    err = error;
  }
  return err;
};
