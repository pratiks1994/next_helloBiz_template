"use client";

import { useToken } from "@chakra-ui/react";
import React from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import CustomTooltip from "./CustomTooltip";
import ResopnsiveChartContainer from "./ResopnsiveChartContainer";

const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 278 },
    { name: "E", value: 189 },
];

const BarChartV1 = () => {
    const [brand] = useToken("colors", ["brand"]);

    return (
        <ResopnsiveChartContainer>
            <BarChart data={data} maxBarSize={30} style={{ fontSize: "14px" }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.6} />
                <XAxis dataKey="name" />
                <YAxis domain={["auto", (dataMax) => dataMax + dataMax * 0.1]} />
                <Tooltip
                    cursor={{
                        fill: "transparent",
                    }}
                    content={<CustomTooltip />}
                />
                <Bar dataKey="value" fill={brand} radius={4} />
            </BarChart>
        </ResopnsiveChartContainer>
    );
};

export default BarChartV1;
