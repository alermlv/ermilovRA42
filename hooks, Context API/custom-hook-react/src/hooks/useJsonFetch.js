import { useState, useEffect } from 'react';

function useJsonFetch(url, options = null) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setData(json);
    } catch(error) {
      setError(error.message)
    } finally {
      setLoading(false);
    };
  }


  return [data, loading, error];
};

export default useJsonFetch;