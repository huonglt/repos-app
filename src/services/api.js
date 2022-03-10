export const QUERY_REPOS_URL = 'https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc';
export const REQUEST_HEADER = {
  'Accept': 'application/vnd.github.v3+json'
};

/**
 * Method to query all repos for vacasaoss sorting by starrs desending order
 * @returns {Object}
 */
export const getRepos = async () => {
  const response = await fetch(QUERY_REPOS_URL, {
    method: 'GET',
    headers: REQUEST_HEADER
  });

    /**
     * response.json() returns a promise so need await
     */
    const data = await response.json();
    console.log(`response = ${JSON.stringify(data)}`);
    return data;
}