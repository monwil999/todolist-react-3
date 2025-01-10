import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (paramName) => {
  const location = useLocation();
  const history = useHistory();

  const getQueryParameter = () => {
    const params = new URLSearchParams(location.search);
    return params.get(paramName);
  };

  const setQueryParameter = (value) => {
    const params = new URLSearchParams(location.search);

    if (value === "" || value === null) {
      params.delete(paramName);
    } else {
      params.set(paramName, value);
    }

    history.push(`${location.pathname}?${params.toString()}`);
  };

  return [getQueryParameter(), setQueryParameter];
};

export const useReplaceQueryParameter = (paramName) => {
  const location = useLocation();
  const history = useHistory();

  const getQueryParameter = () => {
    const params = new URLSearchParams(location.search);
    return params.get(paramName);
  };

  const setQueryParameter = (value) => {
    const params = new URLSearchParams(location.search);

    if (value === "" || value === null) {
      params.delete(paramName);
    } else {
      params.set(paramName, value);
    }

    history.replace(`${location.pathname}?${params.toString()}`);
  };

  return [getQueryParameter(), setQueryParameter];
};
