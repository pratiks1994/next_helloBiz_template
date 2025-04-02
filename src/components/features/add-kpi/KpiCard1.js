import { HStack, Icon, Stat } from "@chakra-ui/react";
import React from "react";
import { LuDollarSign } from "react-icons/lu";

function KpiCard1() {
    return (
        <Stat.Root maxW="240px" borderWidth="1px" py="1" px="2" rounded="md" gap={0}>
            <HStack justify="space-between">
                <Stat.Label>Sales</Stat.Label>
                <Icon color="fg.muted">
                    <LuDollarSign />
                </Icon>
            </HStack>
            <Stat.ValueText fontSize="medium">$4.24k</Stat.ValueText>
        </Stat.Root>
    );
}

export default KpiCard1;
