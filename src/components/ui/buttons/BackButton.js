import { Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function BackButton({ href = "#", ...props }) {
    return (
        <Button size="sm" as={Link} href={href} variant="ghost" {...props}>
            <Icon as={FaChevronLeft} />
            Back
        </Button>
    );
}

export default BackButton;
