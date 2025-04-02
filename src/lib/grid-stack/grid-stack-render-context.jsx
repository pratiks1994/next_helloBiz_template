import { createContext, useContext } from "react";

export const GridStackRenderContext = createContext(null);

export function useGridStackRenderContext() {
    const context = useContext(GridStackRenderContext);
    if (!context) {
        throw new Error("useGridStackRenderContext must be used within a GridStackProvider");
    }
    return context;
}
