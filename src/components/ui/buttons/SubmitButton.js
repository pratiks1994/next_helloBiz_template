import { Button } from "@chakra-ui/react";
import React from "react";

function SubmitButton({ ...props }) {
    return (
        <Button size="sm" type="submit" {...props}>
            Submit
        </Button>
    );
}

export default SubmitButton;
