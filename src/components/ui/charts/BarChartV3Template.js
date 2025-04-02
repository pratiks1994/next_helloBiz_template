import { useToken } from "@chakra-ui/react";
import React from "react";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
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
    const [textColor] = useToken("colors", ["fg"]);

    return (
        <g>
            <text x={x + width / 2} y={y + 15} fill={textColor} style={{ fontSize: "8px" }} textAnchor="middle" dominantBaseline="middle">
                {value}
            </text>
        </g>
    );
};

const BarChartV3Template = () => {
    const [brand] = useToken("colors", ["brand"]);

    return (
        <ResopnsiveChartContainer height="100px">
            <BarChart data={data} maxBarSize={35} style={{ fontSize: "8px" }} isAnimationActive={false}>
                <XAxis dataKey="name" />
                <YAxis domain={["auto", (dataMax) => dataMax + dataMax * 0.1]} />
                <Bar dataKey="value" fill={brand}>
                    <LabelList dataKey="value" content={<RenderCustomizedLabel />} />
                </Bar>
            </BarChart>
        </ResopnsiveChartContainer>
    );
};

export default BarChartV3Template;
