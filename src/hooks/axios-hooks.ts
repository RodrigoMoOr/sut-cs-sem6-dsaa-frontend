import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = <T>(config: AxiosHookConfig): [T | null, string | null, boolean] => {
  const { axiosInstance, method, url, requestConfig = {} } = config;
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        // @ts-ignore
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res.data);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return [response, error, loading];
};

interface AxiosHookConfig {
  axiosInstance: AxiosInstance;
  method: string;
  url: string;
  requestConfig?: any;
}
