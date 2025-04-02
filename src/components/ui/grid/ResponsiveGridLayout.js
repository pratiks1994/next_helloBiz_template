import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const GridLayout = WidthProvider(Responsive);

const DEFAULT_PROPS = {
    className: "layout",
    rowHeight: 10,
    draggableHandle: ".drag-handle",
    breakpoints: { lg: 768, sm: 0 },
    cols: { lg: 24, sm: 24 },

    // useCSSTransforms: true,
    compactType: "vertical",
    containerPadding: [0, 20],
};

function ResponsiveGridLayout({ children, ...props }) {
    const gridProps = { ...DEFAULT_PROPS, ...props };

    return <GridLayout {...gridProps}>{children}</GridLayout>;
}

export default ResponsiveGridLayout;
