"use client";
import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Box } from "@chakra-ui/react";

const ResponsiveGridLayout = WidthProvider(Responsive);

function ReactGridLayoutDemo() {
    const [layouts, setLayouts] = useState({
        lg: [
            { i: "1", x: 0, y: 0, w: 4, h: 8 },
            { i: "2", x: 4, y: 0, w: 4, h: 8 },
            { i: "3", x: 8, y: 0, w: 4, h: 8 },
        ],
    });

    const onLayoutChange = (_newLayout, layouts) => {
        setLayouts(layouts);
    };
    const addItem = (width = 4, height = 8) => {
        // Get the current layout
        const currentLayout = [...layouts.lg];

        // Find the next available ID
        const nextId = Math.max(...currentLayout.map((item) => parseInt(item.i))) + 1;

        // Calculate position for the new item
        const position = calculatePosition(currentLayout, width);

        // Create new item
        const newItem = {
            i: nextId.toString(),
            x: position.x,
            y: position.y,
            w: width,
            h: height,
        };

        // Update layouts
        setLayouts({
            ...layouts,
            lg: [...currentLayout, newItem],
        });
    };

    const calculatePosition = (layout, itemWidth) => {
        // If layout is empty, start at origin
        if (layout.length === 0) {
            return { x: 0, y: 0 };
        }

        const cols = 24; // Your grid's column count for lg breakpoint

        // Find items with the maximum y value (bottom row)
        let maxY = 0;
        layout.forEach((item) => {
            const itemBottom = item.y + item.h;
            if (itemBottom > maxY) {
                maxY = itemBottom;
            }
        });

        // Find items at this maxY (bottom row)
        const bottomRowItems = layout.filter((item) => item.y + item.h === maxY);

        if (bottomRowItems.length === 0) {
            // This shouldn't happen if we calculated maxY correctly
            return { x: 0, y: maxY };
        }

        // Find the rightmost item in the bottom row
        let rightmostItem = bottomRowItems[0];
        bottomRowItems.forEach((item) => {
            if (item.x + item.w > rightmostItem.x + rightmostItem.w) {
                rightmostItem = item;
            }
        });

        // Check if the new item can fit on the same row
        const rightEdge = rightmostItem.x + rightmostItem.w;

        if (rightEdge + itemWidth <= cols) {
            // If there's space, place it to the right of the rightmost item
            return { x: rightEdge, y: rightmostItem.y };
        } else {
            // Otherwise, place it at the beginning of a new row
            return { x: 0, y: maxY };
        }
    };

    return (
        <>
            <button onClick={() => addItem(4, 8)}>Add Default Item</button>
            <button onClick={() => addItem(8, 4)}>Add Wide Item</button>
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                rowHeight={30}
                width={1200}
                onLayoutChange={onLayoutChange}
                draggableHandle=".drag-handle"
                isDraggable={true}
                isResizable={true}
                breakpoints={{ lg: 1200 }}
                cols={{ lg: 24 }}
                useCSSTransforms="true"
                compactType="vertical"
            >
                {layouts["lg"].map((item) => (
                    <Box key={item.i} color="primary" p={2} cursor={"move"} className="drag-handle">
                        ded
                    </Box>
                ))}
            </ResponsiveGridLayout>
        </>
    );
}

export default ReactGridLayoutDemo;
