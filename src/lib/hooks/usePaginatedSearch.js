import { useCallback, useMemo, useState } from "react";

export const usePaginatedSearch = (
    items = [],
    {
        initialPage = 1,
        initialPageSize = 9,
        initialSearch = "",
        searchPredicate = (item, searchTerm) => item?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    }
) => {
    const [page, setPage] = useState(initialPage);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const [search, setSearch] = useState(initialSearch);

    // Filter items based on search term
    const filteredItems = useMemo(() => {
        return !search.trim() ? items : items.filter((item) => searchPredicate(item, search));
    }, [items, search, searchPredicate]);

    // Get current page items
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    // Handler for search changes

    const handleSearchChange = useCallback((e) => {
        const newSearch = typeof e === "string" ? e : e.target.value;
        setSearch(() => newSearch);
        setPage(() => 1); // Reset to first page when search changes
    }, []);

    // Handler for page changes
    const handlePageChange = useCallback((newPage) => {
        setPage(() => (typeof newPage === "number" ? newPage : newPage.page));
    }, []);

    // Handler for page size changes
    const handlePageSizeChange = useCallback((newSize) => {
        const size = Array.isArray(newSize?.value) ? newSize.value[0] : typeof newSize === "number" ? newSize : newSize?.value;

        setPageSize(() => size);
        setPage(() => 1); // Reset to first page when changing page size
    }, []);

    return {
        // State
        page,
        pageSize,
        search,
        totalItems: filteredItems.length,

        // Current data
        items: paginatedItems,

        // Handlers
        setPage: handlePageChange,
        setPageSize: handlePageSizeChange,
        setSearch: handleSearchChange,
        handleSearchChange,
        handlePageChange,
        handlePageSizeChange,
    };
};
