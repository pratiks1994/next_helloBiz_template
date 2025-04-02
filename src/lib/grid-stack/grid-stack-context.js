import { createContext, useContext } from "react";

export const GridStackContext = createContext(null);

export function useGridStackContext() {
    const context = useContext(GridStackContext);
    if (!context) {
        throw new Error("useGridStackContext must be used within a GridStackProvider");
    }
    return context;
}
