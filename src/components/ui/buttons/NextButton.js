import { Button } from "@chakra-ui/react";
import React from "react";

function NextButton({ ...props }) {
    return (
        <Button htmlType="button" variant="outline" borderWidth={2} size="sm" {...props}>
            Next
        </Button>
    );
}

export default NextButton;
