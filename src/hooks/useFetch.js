import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorDetail: null,
  });

  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: true,
      hasError: false,
      errorDetail: null,
    });
  };

  useEffect(() => {
    async function getFetch() {
      //inicicializar variables
      setLoadingState();

      if (localCache[url]) {
        setstate({
          data: localCache[url],
          isLoading: false,
          hasError: false,
          error: null,
        });

        return;
      }

      const resp = await fetch(url);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!resp.ok) {
        setstate({
          data: null,
          isLoading: false,
          hasError: true,
          errorDetail: {
            code: resp.status,
            message: resp.statusText,
          },
        });
      } else {
        const dataResp = await resp.json();
        setstate({
          data: dataResp,
          isLoading: false,
          hasError: false,
          errorDetail: null,
        });
        localCache[url] = dataResp;
      }
    }

    getFetch();
    return () => {};
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
