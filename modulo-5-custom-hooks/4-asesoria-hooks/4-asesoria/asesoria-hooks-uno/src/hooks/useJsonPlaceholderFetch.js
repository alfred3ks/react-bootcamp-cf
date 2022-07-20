import { useState } from 'react';
import { useEffect } from 'react';

const useJsonPlaceholderFetch = (path) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      fetch(`https://jsonplaceholder.typicode.com${path}`)
        .then(response => response.json())
        .then(json => setData(json))
    }
  }, [])

  return data;

}

export default useJsonPlaceholderFetch;