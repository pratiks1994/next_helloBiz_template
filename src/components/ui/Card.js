import { Card } from "@chakra-ui/react";
import React from "react";

export const CardRoot = ({ children, variant = "elevated", ...props }) => {
    return (
        <Card.Root variant={variant} borderRadius={"sm"} {...props}>
            {children}
        </Card.Root>
    );
};

export const CardHeader = ({ children, ...props }) => {
    return <Card.Header {...props}>{children}</Card.Header>;
};

export const CardBody = ({ children, ...props }) => {
    return <Card.Body {...props}>{children}</Card.Body>;
};

export const CardTitle = ({ children, ...props }) => {
    return <Card.Title {...props}>{children}</Card.Title>;
};

export const CardDescription = ({ children, ...props }) => {
    return <Card.Description {...props}>{children}</Card.Description>;
};

export const CardFooter = ({ children, ...props }) => {
    return <Card.Footer {...props}>{children}</Card.Footer>;
};
