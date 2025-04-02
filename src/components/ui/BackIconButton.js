import { IconButton } from "@chakra-ui/react";

import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function BackIconButton({ ...props }) {
    return (
        <IconButton size={"xs"} variant={"ghost"} {...props}>
            <FaChevronLeft />
        </IconButton>
    );
}

export default BackIconButton;
