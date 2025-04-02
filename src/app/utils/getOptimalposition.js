export const getOptimalPosition = (layout, itemWidth) => {
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
