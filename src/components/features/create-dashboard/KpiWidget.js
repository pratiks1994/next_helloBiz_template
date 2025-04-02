import BoxContainer from "@/components/ui/BoxContainer";
import FlexContainer from "@/components/ui/FlexContainer";
import { Stat } from "@/components/ui/state";
import { WidgetAction } from "@/components/ui/widget/widget";
import { replaceParams, routes } from "@/lib/route";

import React from "react";

function KpiWidget({ widget, isEditable = true }) {
    return (
        <FlexContainer
            bg="bg"
            w="full"
            h="full"
            p="5"
            border="1px solid"
            borderColor="border"
            borderRadius="md"
            alignItems="center"
            position="relative"
            className="drag-handle wiggle"
            animation="wiggle"
        >
            <Stat size="lg" label={widget.widget_title} valueText="$2.24k" />
            {isEditable && (
                <BoxContainer alignSelf="flex-start">
                    <WidgetAction editWidgetUrl={replaceParams(routes.edit_kpi, { id: widget.id })} />
                </BoxContainer>
            )}
        </FlexContainer>
    );
}

export default KpiWidget;
