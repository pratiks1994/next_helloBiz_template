import React from "react";
import { ResponsiveContainer } from "recharts";

function ResopnsiveChartContainer({ children, debounce = 300, width = "100%", height = "100%" }) {
    return (
        <ResponsiveContainer width={width} height={height} debounce={debounce}>
            {children}
        </ResponsiveContainer>
    );
}

export default ResopnsiveChartContainer;
