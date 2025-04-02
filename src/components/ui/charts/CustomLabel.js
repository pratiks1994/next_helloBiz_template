import { useToken } from "@chakra-ui/react";
import React from "react";

function CustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) {
    const [textColor] = useToken("colors", ["fg"]);
    if (value === 0) return null;

    const RADIAN = Math.PI / 180;

    // Extend the radius to position labels outside the chart
    const radius = outerRadius * 1.2;

    // Calculate the position of the label
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Calculate the position for the connecting line
    const lineStart = {
        x: cx + outerRadius * 0.95 * Math.cos(-midAngle * RADIAN),
        y: cy + outerRadius * 0.95 * Math.sin(-midAngle * RADIAN),
    };

    // Calculate the middle point for the connecting line
    const lineMiddle = {
        x: cx + outerRadius * 1.1 * Math.cos(-midAngle * RADIAN),
        y: cy + outerRadius * 1.1 * Math.sin(-midAngle * RADIAN),
    };

    const textAnchor = x > cx ? "start" : "end";
    const finalX = x > cx ? x + 5 : x - 5;

    return (
        <g>
            <text x={finalX} y={y - 8} textAnchor={textAnchor} dominantBaseline="central" fill={textColor} style={{ fontSize: "12px" }}>
                {name}
            </text>

            <text x={finalX} y={y + 8} textAnchor={textAnchor} dominantBaseline="central" fill={textColor} style={{ fontSize: "12px" }}>
                {`(${value})`}
            </text>
        </g>
    );
}

export default CustomLabel;
