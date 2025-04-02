"use client";

import { colors } from "@/lib/colors/colors";
import { Text, useToken } from "@chakra-ui/react";
import React from "react";
import { Cell, Legend, Pie, PieChart, Sector, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";
import ResopnsiveChartContainer from "./ResopnsiveChartContainer";

const data = [
    { name: "Afefe", value: 400 },
    { name: "Bfewrf", value: 300 },
    { name: "Crefr", value: 200 },
    { name: "Dregerr", value: 278 },
    { name: "Egreg", value: 189 },
    { name: "Freg", value: 239 },
    { name: "Greg", value: 349 },
    { name: "Agreg", value: 400 },
];

const RADIAN = Math.PI / 180;
const RenderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={"middle"} dominantBaseline="center" style={{ fontSize: "14px" }}>
            {payload.value}
        </text>
    );
};

const RenderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, total, color } = props;

    return (
        <g>
            <text x={cx} y={cy} dy={0} textAnchor="middle" fill={color} style={{ fontSize: "14px" }}>
                Total
                <tspan x={cx} dy={20} fill={color} style={{ fontWeight: 600 }}>
                    {total}
                </tspan>
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        </g>
    );
};

function PieChartV1() {
    const [strokeColor, fg] = useToken("colors", ["border-color-default", "fg"]);

    return (
        <ResopnsiveChartContainer>
            <PieChart style={{ fontSize: "14px" }}>
                <Pie
                    stroke={strokeColor}
                    activeIndex={1}
                    data={data}
                    activeShape={<RenderActiveShape total={50000} color={fg} />}
                    label={<RenderCustomizedLabel />}
                    labelLine={false}
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="95%"
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend iconSize="10" formatter={renderColorfulLegendText} layout="horizontal" align="center" verticalAlign="bottom" />
            </PieChart>
        </ResopnsiveChartContainer>
    );
}

const renderColorfulLegendText = (value) => {
    return (
        <Text display={"inline"} fontSize={"xs"}>
            {value}
        </Text>
    );
};

export default PieChartV1;
