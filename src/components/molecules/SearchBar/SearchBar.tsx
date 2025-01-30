import { ISearchBarProps } from "./SearchBar.Props";
import { Button, Input } from "@atoms/index";
import { useState } from "react";

export const SearchBar: React.FC<ISearchBarProps> = ( { onSearch } ) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div>
            <Input value={query} type="text" onChange={setQuery} placeholder="Rechercher..." />
            <Button label="Rechercher" className="searchButton" onClick={handleSearch}/>
        </div>
    )
}