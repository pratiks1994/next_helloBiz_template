"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { useSession } from "next-auth/react";
import { decrement, increment, addbyTen, customAdd, reset } from "@/app/lib/slices/countSlice";
import { Button, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { githubSignIn, githubSignOut } from "@/app/actions/signIn";
import { redirect } from "next/navigation";

function Demo() {
    const count = useAppSelector((state) => state.count);
    const dispatch = useAppDispatch();

    return (
        <VStack>
            <p>Count : {count}</p>
            <Button onClick={() => dispatch(increment())}>Add</Button>
            <Button onClick={() => dispatch(decrement())}>Remove</Button>
            <Button onClick={() => dispatch(addbyTen())}>Add</Button>
            <Button onClick={() => dispatch(reset())}>Reset</Button>
            <Button onClick={() => dispatch(customAdd(100))}>Add 100</Button>
            <Button
                onClick={async () => {
                    await githubSignOut();
                    redirect("/");
                }}
            >
                Sign Out
            </Button>
        </VStack>
    );
}

export default Demo;
