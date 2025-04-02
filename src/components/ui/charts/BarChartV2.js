"use client";

import { useToken } from "@chakra-ui/react";
import { Bar, BarChart, LabelList, Tooltip, XAxis, YAxis } from "recharts";
import CustomTooltip from "./CustomTooltip";
import ResopnsiveChartContainer from "./ResopnsiveChartContainer";

const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 278 },
    { name: "E", value: 189 },
];

const RenderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;

    const [textColor] = useToken("colors", ["fg.muted"]);

    return (
        <g>
            <text x={x + width / 2} y={y - 10} fill={textColor} style={{ fontSize: "14px" }} textAnchor="middle" dominantBaseline="middle">
                {value}
            </text>
        </g>
    );
};

function BarChartV2() {
    const [brand, bg] = useToken("colors", ["brand", "bg.emphasized"]);

    return (
        <ResopnsiveChartContainer>
            <BarChart data={data} maxBarSize={35} style={{ fontSize: "14px" }}>
                <XAxis dataKey="name" />
                <YAxis domain={["auto", (dataMax) => dataMax + dataMax * 0.1]} />

                <Tooltip
                    cursor={{
                        fill: "transparent",
                    }}
                    content={<CustomTooltip />}
                />
                <Bar dataKey="value" fill={brand} background={{ fill: bg }} radius={4}>
                    <LabelList dataKey="value" content={<RenderCustomizedLabel />} />
                </Bar>
            </BarChart>
        </ResopnsiveChartContainer>
    );
}

export default BarChartV2;
