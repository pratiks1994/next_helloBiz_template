import { Button } from "@chakra-ui/react";
import React from "react";

function PrevButton({ ...props }) {
    return (
        <Button htmlType="button" variant="outline" borderWidth={2} size="sm" {...props}>
            Prev
        </Button>
    );
}

export default PrevButton;
