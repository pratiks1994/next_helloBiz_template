"use client";
import FlexContainer from "@/components/ui/FlexContainer";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "@/components/ui/select";

import { createListCollection, Text } from "@chakra-ui/react";
import React from "react";

const itemCounts = createListCollection({
    items: [
        { label: 10, value: 10 },
        { label: 15, value: 15 },
        { label: 20, value: 20 },
        { label: 25, value: 25 },
    ],
});

function PageItemCountSelector({ value, onChange }) {
    return (
        <FlexContainer gap={1} alignItems="center">
            <Text color="fg.muted" fontSize={"sm"}>
                Items
            </Text>
            <SelectRoot collection={itemCounts} size="xs" width={14} value={value} defaultValue={[9]} onValueChange={onChange}>
                <SelectTrigger>
                    <SelectValueText placeholder="" />
                </SelectTrigger>
                <SelectContent portalled={false}>
                    {itemCounts.items.map((movie) => (
                        <SelectItem item={movie} key={movie.value}>
                            {movie.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
            <Text color="fg.muted" fontSize={"sm"}>
                per Page
            </Text>
        </FlexContainer>
    );
}

export default PageItemCountSelector;
