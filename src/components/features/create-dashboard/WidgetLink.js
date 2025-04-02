import { Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function WidgetLink({ children, ...props }) {
    return (
        <Button
            as={Link}
            size="sm"
            variant="ghost"
            w="full"
            gap="3"
            justifyContent={"flex-start"}
            color="fg.muted"
            _hover={{
                color: "fg",
                fontWeight: "medium",
            }}
            fontWeight={"normal"}
            fontSize={"sm"}
            {...props}
        >
            {children}
        </Button>
    );
}

export const WidgetLinkIcon = ({ children, ...props }) => {
    return (
        <Icon color={"brand"} {...props}>
            {children}
        </Icon>
    );
};

export default WidgetLink;
