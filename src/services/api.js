/**
 * Method to query all repos for vacasaoss sorting by starrs desending order
 * @returns {Object}
 */
export const getRepos = async () => {
  const response = await fetch('https://api.github.com/search/repositories?q=org:vacasaoss&sort=stars&order=desc', {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }});

    const data = response.json();
    console.log(`response = ${data}`);
    return data;
}