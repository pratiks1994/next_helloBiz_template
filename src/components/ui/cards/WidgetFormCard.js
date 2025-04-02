import React from "react";
import { CardBody, CardHeader, CardRoot, CardTitle } from "../Card";
import { Text } from "@chakra-ui/react";

function WidgetFormCard(props) {
    const { children, title, ...rest } = props;
    return (
        <CardRoot variant="outline" size="sm" {...rest} bg="transparent">
            {title && (
                <CardHeader p="2" gap="0" borderBottom="1px solid" borderColor="border">
                    <CardTitle>
                        <Text fontSize={"sm"} fontWeight={"medium"}>
                            {title}
                        </Text>
                    </CardTitle>
                </CardHeader>
            )}

            <CardBody p="2">{children}</CardBody>
        </CardRoot>
    );
}

export default WidgetFormCard;
