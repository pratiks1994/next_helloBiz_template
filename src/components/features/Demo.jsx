"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { decrement, increment, addbyTen, customAdd, reset } from "@/lib/slices/countSlice";
import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { githubSignOut } from "@/app/actions/signIn";

function Demo() {
    const count = useAppSelector((state) => state.count);
    const dispatch = useAppDispatch();

    return (
        <VStack>
            <p>Count : {count}</p>
            <Button colorPalette={"teal"} variant="solid" onClick={() => dispatch(increment())}>
                Add
            </Button>
            <Button colorPalette={"teal"} variant="ghost" onClick={() => dispatch(increment())}>
                Add
            </Button>
            <Button size={"sm"} variant={"ghost"} onClick={() => dispatch(decrement())}>
                Remove
            </Button>
            <Button size={"sm"} variant={"outline"} onClick={() => dispatch(addbyTen())}>
                Add
            </Button>
            <Button size="sm" onClick={() => dispatch(reset())}>
                Reset
            </Button>
            <Button onClick={() => dispatch(customAdd(100))}>Add 100</Button>
            <Button
                onClick={async () => {
                    await githubSignOut();
                }}
            >
                Sign Out
            </Button>
            <button> red</button>
        </VStack>
    );
}

export default Demo;
