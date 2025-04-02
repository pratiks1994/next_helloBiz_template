import { colors } from "@/lib/colors/colors";
import { Text, useToken } from "@chakra-ui/react";
import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
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
    { name: "Agreg", value: 400 },
    { name: "Bgreg", value: 400 },
    { name: "Cgreg", value: 400 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={"middle"} dominantBaseline="center" style={{ fontSize: "14px" }}>
            {payload.value}
        </text>
    );
};

function PieChartV3() {
    const [strokeColor] = useToken("colors", ["border-color-default"]);

    return (
        <ResopnsiveChartContainer>
            <PieChart style={{ fontSize: "14px" }}>
                <Pie
                    stroke={strokeColor}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius="95%"
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
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

export default PieChartV3;
