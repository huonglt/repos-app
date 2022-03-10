import { useEffect, useState } from "react"

export const useApi = (apiService) => {
  const [ isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await apiService();
        console.log(`result = ${JSON.stringify(result)}`);
        setData(result);
      } catch(err) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, [apiService]);

  return [isLoading, isError, data];
}