"use client";

import { colors } from "@/lib/colors/colors";
import { useToken } from "@chakra-ui/react";
import React from "react";
import { Cell, Pie, PieChart, Sector, Tooltip } from "recharts";
import CustomeLabelV2 from "./CustomeLabelV2";
import CustomTooltip from "./CustomTooltip";
import ResopnsiveChartContainer from "./ResopnsiveChartContainer";

const data = [
    { name: "Afefe", value: 300 },
    { name: "Bfewrf", value: 300 },
    { name: "Crefr", value: 200 },
    { name: "Dregerr", value: 278 },
    { name: "Egreg", value: 189 },
    { name: "Freg", value: 239 },
    { name: "Greg", value: 349 },
];

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

function PieChartV4() {
    const [strokeColor] = useToken("colors", ["border-color-default"]);

    return (
        <ResopnsiveChartContainer>
            <PieChart style={{ fontSize: "14px" }}>
                <Pie
                    stroke={strokeColor}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius="75%"
                    fill="#8884d8"
                    dataKey="value"
                    activeShape={renderActiveShape}
                    label={<CustomeLabelV2 />}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResopnsiveChartContainer>
    );
}

export default PieChartV4;
