import { useToken } from "@chakra-ui/react";
import React from "react";

function CustomeLabelV2(props) {
    const [textColor, textColorMute] = useToken("colors", ["fg", "fg.muted"]);
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, outerRadius, fill, payload, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);

    // Reduce these values to make the lines shorter
    const sx = cx + (outerRadius + 3) * cos; // Reduced from 10
    const sy = cy + (outerRadius + 3) * sin; // Reduced from 10
    const mx = cx + (outerRadius + 20) * cos; // Reduced from 30
    const my = cy + (outerRadius + 20) * sin; // Reduced from 30
    const ex = mx + (cos >= 0 ? 1 : -1) * 15; // Reduced from 15
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={textColor} style={{ fontSize: "12px" }}>
                {payload.name}
            </text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={15}
                textAnchor={textAnchor}
                style={{ fontSize: "12px" }}
                fill={textColorMute}
            >
                {`(${value})`}
            </text>
        </g>
    );
}

export default CustomeLabelV2;
