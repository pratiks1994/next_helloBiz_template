import { ActionBar, Button, Portal } from "@chakra-ui/react";
import React from "react";
import { FiEdit, FiSave } from "react-icons/fi";

function LayoutChangeAction({ allowChangeLayout, onSave, onChangeLayout, onCancel }) {
    return (
        <ActionBar.Root open={true} closeOnInteractOutside={true}>
            <Portal>
                <ActionBar.Positioner>
                    <ActionBar.Content>
                        {allowChangeLayout && (
                            <>
                                <Button variant="outline" size="sm" onClick={onSave}>
                                    <FiSave />
                                    Save Layout
                                </Button>
                                <Button variant="ghost" size="sm" onClick={onCancel}>
                                    Cancel
                                </Button>
                            </>
                        )}
                        {!allowChangeLayout && (
                            <Button variant="outline" size="sm" onClick={onChangeLayout}>
                                <FiEdit />
                                Change Layout
                            </Button>
                        )}
                    </ActionBar.Content>
                </ActionBar.Positioner>
            </Portal>
        </ActionBar.Root>
    );
}

export default LayoutChangeAction;
