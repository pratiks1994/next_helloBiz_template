import React from "react";
import { ColorModeButton } from "../ui/color-mode";
import BoxContainer from "../ui/BoxContainer";

function ThemeToggler() {
    return (
        <BoxContainer position="fixed" right="9" bottom="7" zIndex="docked">
            <ColorModeButton />
        </BoxContainer>
    );
}

export default ThemeToggler;
