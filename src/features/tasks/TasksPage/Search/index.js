// Search/index.js
import React from "react";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters"; // Poprawiony import
import Input from "../../Input";
import { Wrapper } from "./styled";

const Search = () => {
    const [query, setQuery] = useQueryParameter("szukaj"); // użycie useQueryParameter
    const [replaceQuery, setReplaceQuery] = useReplaceQueryParameter("szukaj"); // użycie useReplaceQueryParameter

    const handleChange = (e) => {
        setQuery(e.target.value); // Ustawienie nowego zapytania
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
