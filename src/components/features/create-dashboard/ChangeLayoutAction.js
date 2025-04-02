import FlexContainer from "@/components/ui/FlexContainer";
import { selectWidgets } from "@/lib/slices/dashboardSlice";
import { Button } from "@chakra-ui/react";

import { useSelector } from "react-redux";

function ChangeLayoutAction({ allowChangeLayout, onSave, onChangeLayout, onCancel }) {
    const widgets = useSelector(selectWidgets);

    if (widgets.length === 0) return null;
    if (!allowChangeLayout)
        return (
            <Button onClick={onChangeLayout} size="sm">
                Change Layout
            </Button>
        );
    return (
        <FlexContainer gap={2}>
            <Button onClick={onSave} size="sm">
                Save Layout
            </Button>
            <Button variant="outline" onClick={onCancel} size="sm">
                Cancel
            </Button>
        </FlexContainer>
    );
}

export default ChangeLayoutAction;
