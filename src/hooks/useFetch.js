import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorDetail: null,
  });

  useEffect(() => {
    async function getFetch() {
      const resp = await fetch(url);
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
        const dataResp = await resp.json;
        setstate({
          data: dataResp,
          isLoading: false,
          hasError: false,
          errorDetail: null,
        });
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
