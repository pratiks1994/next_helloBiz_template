"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { decrement, increment } from "@/app/lib/slices/countSlice";
import { Button, HStack, VStack } from "@chakra-ui/react";
import React from "react";

function Demo() {
    const count = useAppSelector((state) => state.count);
    const dispatch = useAppDispatch();

    return (
        <VStack>
            <p>Count : {count}</p>
            <Button onClick={() => dispatch(increment())}>Add</Button>
            <Button onClick={() => dispatch(decrement())}>Remove</Button>
        </VStack>
    );
}

export default Demo;
