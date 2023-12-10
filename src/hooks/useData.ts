import {useEffect, useState} from 'react'
import apiClient from "../services/api-client";
import { CanceledError } from 'axios';


interface FetchResponse<T> {
  count: number;
  results: T[]
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [ error, setError] = useState('');
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true);

    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal }) //specify shape of response object
    .then(res => {
      setData(res.data.results);
      setLoading(false);
    })
    .catch(err => {
      if (err instanceof CanceledError) return; //because react renders, cancel and rerenders
      setError(err.message)
      setLoading(false);
    });

    return() => controller.abort();
  }, [])

  return { data, error, isLoading }
}

export default useData
