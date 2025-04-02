import { GridStack } from "gridstack";
import React, { createRef, useEffect, useRef, useState } from "react";
import { GridItem } from "./GridItems";

export const ControlledStack = () => {
    const [items, setItems] = useState([]);
    const refs = useRef(new Map());
    const gridRef = useRef(null);

    useEffect(() => {
        if (!gridRef.current) {
            gridRef.current = GridStack.init({ float: false }, ".controlled");
        }
        const grid = gridRef.current;
        grid.batchUpdate();
        grid.removeAll(false);

        items.forEach(({ id, width, height, x, y }) => {
            if (!refs.current.has(id)) {
                refs.current.set(id, createRef());
            }
            const el = refs.current.get(id).current;
            if (el) {
                el.setAttribute("gs-id", id);
                el.setAttribute("gs-w", width);
                el.setAttribute("gs-h", height);
                if (x !== undefined) el.setAttribute("gs-x", x);
                if (y !== undefined) el.setAttribute("gs-y", y);
                grid.makeWidget(el);
            }
        });
        grid.batchUpdate(false);
    }, [items]);

    useEffect(() => {
        const grid = gridRef.current;
        if (grid) {
            grid.on("resizestop", (event, element) => {
                const id = element.getAttribute("gs-id");
                const width = element.getAttribute("gs-w");
                const height = element.getAttribute("gs-h");

                setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, width, height } : item)));
            });
            grid.on("dragstop", (event, element) => {
                const id = element.getAttribute("gs-id");
                const x = element.getAttribute("gs-x");
                const y = element.getAttribute("gs-y");
                setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, x, y } : item)));
            });
        }

        return () => {
            if (grid) {
                grid.off("resizestop");
                grid.off("dragstop");
            }
        };
    }, []);

    const addChart = (chartType, size = {}) => {
        setItems((prevItems) => {
            const id = `chart-${prevItems.length}`;
            const defaultSizes = {
                bar: { width: 5, height: 3 },
                pie: { width: 3, height: 3 },
                line: { width: 6, height: 3 },
            };

            return [
                ...prevItems,
                {
                    id,
                    chartType,
                    width: size.width ?? defaultSizes[chartType]?.width ?? 4,
                    height: size.height ?? defaultSizes[chartType]?.height ?? 3,
                    x: size.x ?? undefined,
                    y: size.y ?? undefined,
                },
            ];
        });
    };
    // Add widget to grid after state update

    return (
        <div className="h-screen w-full p-4">
            <div className="mb-4 space-x-4">
                <button onClick={() => addChart("bar")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Bar Chart
                </button>
                <button onClick={() => addChart("pie")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add Pie Chart
                </button>
            </div>
            <div className="controlled grid-stack">
                {items.map((item) => (
                    <div key={item.id} ref={(el) => refs.current.set(item.id, { current: el })} className="grid-stack-item">
                        <div className="grid-stack-item-content">
                            <GridItem id={item.id} chartType={item.chartType} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
