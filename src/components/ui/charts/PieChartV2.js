"use client";

import React from "react";
import { Cell, Pie, PieChart, Sector, Tooltip } from "recharts";
import CustomLabel from "./CustomLabel";
import { useToken } from "@chakra-ui/react";
import { colors } from "@/lib/colors/colors";
import CustomTooltip from "./CustomTooltip";
import ResopnsiveChartContainer from "./ResopnsiveChartContainer";

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    return (
        <g>
            <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill} style={{ fontSize: "14px" }}>
                {payload.name}
                <tspan x={cx} dy={20} fill={fill}>
                    {payload.value}
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

const data = [
    { name: "Automative", value: 400 },
    { name: "Bfewrf", value: 300 },
    { name: "Crefr", value: 200 },
    { name: "Dregerr", value: 278 },
    { name: "Egreg", value: 189 },
    { name: "Freg", value: 239 },
    { name: "Greg", value: 349 },
    { name: "Agreg", value: 400 },
];

function PieChartV2() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const [strokeColor] = useToken("colors", ["border-color-default"]);

    return (
        <>
            <ResopnsiveChartContainer>
                <PieChart style={{ fontSize: "14px" }}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        onMouseEnter={(_, index) => setActiveIndex(() => index)}
                        dataKey="value"
                        data={data}
                        fill="#8231D3"
                        paddingAngle={1}
                        outerRadius="75%"
                        innerRadius="55%"
                        stroke={strokeColor}
                        label={<CustomLabel />}
                        isAnimationActive={true}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResopnsiveChartContainer>
        </>
    );
}

export default PieChartV2;
