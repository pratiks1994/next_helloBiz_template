import { useToken } from "@chakra-ui/react";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import ResopnsiveChartContainer from "./ResopnsiveChartContainer";

const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 278 },
    { name: "E", value: 189 },
];

const BarChartV1Template = () => {
    const [brand] = useToken("colors", ["brand"]);

    return (
        <ResopnsiveChartContainer height="80px">
            <BarChart data={data} maxBarSize={30} style={{ fontSize: "8px" }} height="80px">
                <CartesianGrid strokeDasharray="3 3" opacity={0.6} />
                <XAxis dataKey="name" />
                <YAxis domain={["auto", (dataMax) => dataMax + dataMax * 0.1]} />

                <Bar dataKey="value" fill={brand} />
            </BarChart>
        </ResopnsiveChartContainer>
    );
};

export default BarChartV1Template;
