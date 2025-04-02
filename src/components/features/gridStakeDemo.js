import { useState } from "react";
import "gridstack/dist/gridstack-extra.css";
import "gridstack/dist/gridstack.css";
import "./demo.css";
import Demo from "./Demo";
import { GridStackProvider } from "@/lib/grid-stack/grid-stack-provider";
import { GridStackRenderProvider } from "@/lib/grid-stack/grid-stack-render-provider";
import { GridStackRender } from "@/lib/grid-stack/grid-stack-render";
import { useGridStackContext } from "@/lib/grid-stack/grid-stack-context";

const CELL_HEIGHT = 100;
const BREAKPOINTS = [
    { c: 1, w: 700 },
    { c: 3, w: 850 },
    { c: 6, w: 950 },
    { c: 8, w: 1100 },
];

function Text({ content }) {
    return <div className="w-full h-full">{content}</div>;
}

const COMPONENT_MAP = {
    Text,
    Demo,
};
// ! Content must be json string like this:
// { name: "Text", props: { content: "Item 1" } }
const gridOptions = {
    acceptWidgets: true,
    columnOpts: {
        breakpointForWindow: true,
        breakpoints: BREAKPOINTS,
        layout: "moveScale",
        columnMax: 12,
    },
    margin: 8,
    cellHeight: CELL_HEIGHT,
    subGridOpts: {
        acceptWidgets: true,
        columnOpts: {
            breakpoints: BREAKPOINTS,
            layout: "moveScale",
        },
        margin: 8,
        minRow: 2,
        cellHeight: CELL_HEIGHT,
    },
    children: [
        {
            id: "item1",
            h: 2,
            w: 2,
            x: 0,
            y: 0,
            content: JSON.stringify({
                name: "Text",
                props: { content: "Item 1" },
            }), // if need type check
        },
        {
            id: "item2",
            h: 2,
            w: 2,
            x: 2,
            y: 0,
            content: JSON.stringify({
                name: "Demo",
            }),
        },
    ],
};

export function GridStackDemo() {
    // ! Uncontrolled
    const [initialOptions] = useState(gridOptions);

    return (
        <GridStackProvider initialOptions={initialOptions}>
            <Toolbar />
            <GridStackRenderProvider>
                <GridStackRender componentMap={COMPONENT_MAP} />
            </GridStackRenderProvider>
        </GridStackProvider>
    );
}

function Toolbar() {
    const { addWidget } = useGridStackContext();

    return (
        <div
            style={{
                border: "1px solid gray",
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
            }}
        >
            <button
                onClick={() => {
                    addWidget((id) => ({
                        w: 2,
                        h: 2,
                        x: 0,
                        y: 0,
                        content: JSON.stringify({
                            name: "Demo",
                            props: { content: "Item " + id },
                        }),
                    }));
                }}
            >
                Add Text (2x2)
            </button>
        </div>
    );
}
