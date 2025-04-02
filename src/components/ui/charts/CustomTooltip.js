import React from "react";
import BoxContainer from "../BoxContainer";

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <BoxContainer bg="bg/60" borderRadius="md" p="2" border="1px solid" borderColor="border" backdropFilter="blur(7px)">
                <p className="label">{payload[0].payload.name}</p>
                <p className="intro">value : {payload[0].value}</p>
            </BoxContainer>
        );
    }

    return null;
}

export default CustomTooltip;
