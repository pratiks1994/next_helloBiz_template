import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const PageItemSearch = ({ onChange, value = "", debounceMs = 300 }) => {
    const [search, setSearch] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(search);
        }, debounceMs);

        return () => clearTimeout(timer);
    }, [search, debounceMs, onChange]);

    return (
        <InputGroup startElement={<FaSearch />} flexBasis="sm">
            <Input
                type="search"
                placeholder="Search"
                variant="outline"
                size="sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </InputGroup>
    );
};
