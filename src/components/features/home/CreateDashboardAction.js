import { DialogContent, DialogRoot, DialogTrigger } from "@/components/ui/dialog";
import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import InitiateDashboardForm from "./InitiateDashboardForm";

function CreateDashboardAction() {
    return (
        <>
            <DialogRoot size="xs" placement="center">
                <DialogTrigger asChild>
                    <Button size="sm" aria-label="Create Dashboard">
                        <Icon>
                            <FaPlus />
                        </Icon>
                        Create Dashboard
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <InitiateDashboardForm />
                </DialogContent>
            </DialogRoot>
        </>
    );
}

export default CreateDashboardAction;
