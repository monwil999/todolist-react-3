import React from "react";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import Input from "../../Input";
import { Wrapper } from "./styled";

const Search = () => {
  const [query, setQuery] = useQueryParameter("szukaj");
  const [replaceQuery, setReplaceQuery] = useReplaceQueryParameter("szukaj");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Search;
