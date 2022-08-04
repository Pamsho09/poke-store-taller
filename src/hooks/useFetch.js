import axios from "axios";
import { useEffect, useState } from 'react'
const useFetch = (
  url,
  options = {
    method: "GET",
  }
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios(url, options).then((response) => {
      setData(response.data);
      setLoading(false);
    }).catch((error) => {
        setError(error);
        setLoading(false);
    }).finally(() => {
        setLoading(false);
    })
  }, [url]);

    return {
        data,
        loading,
        error,
    }
};
export{
    useFetch
}
