import { ISearchBarProps } from "./SearchBar.Props";
import { Button, Input } from "@atoms/index";
import { useState } from "react";

export const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    return (
        <div className="search-bar">
            <Input 
                value={query} 
                type="text" 
                onChange={setQuery} 
                placeholder="Rechercher..." 
                className="search-input"
            />
            <Button 
                label="Rechercher" 
                className="search-button" 
                onClick={() => onSearch(query)} 
            />
        </div>
    );
}
