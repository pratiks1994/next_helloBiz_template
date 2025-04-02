import { useCallback, useState } from "react";
import { GridStackContext } from "./grid-stack-context";

export function GridStackProvider({ children, initialOptions }) {
    const [gridStack, setGridStack] = useState(null);
    const [rawWidgetMetaMap, setRawWidgetMetaMap] = useState(() => {
        const map = new Map();
        const deepFindNodeWithContent = (obj) => {
            if (obj.id && obj.content) {
                map.set(obj.id, obj);
            }
            if (obj.subGridOpts?.children) {
                obj.subGridOpts.children.forEach((child) => {
                    deepFindNodeWithContent(child);
                });
            }
        };
        initialOptions.children?.forEach((child) => {
            deepFindNodeWithContent(child);
        });
        return map;
    });

    const addWidget = useCallback(
        (fn) => {
            const newId = `widget-${Math.random().toString(36).substring(2, 15)}`;
            const widget = fn(newId);
            gridStack?.addWidget({ ...widget, id: newId });
            setRawWidgetMetaMap((prev) => {
                const newMap = new Map(prev);
                newMap.set(newId, widget);
                return newMap;
            });
        },
        [gridStack]
    );

    const removeWidget = useCallback(
        (id) => {
            gridStack?.removeWidget(id);
            setRawWidgetMetaMap((prev) => {
                const newMap = new Map(prev);
                newMap.delete(id);
                return newMap;
            });
        },
        [gridStack]
    );

    const saveOptions = useCallback(() => {
        return gridStack?.save(true, true, (_, widget) => widget);
    }, [gridStack]);

    return (
        <GridStackContext.Provider
            value={{
                initialOptions,
                gridStack,

                addWidget,
                removeWidget,
                saveOptions,

                _gridStack: {
                    value: gridStack,
                    set: setGridStack,
                },
                _rawWidgetMetaMap: {
                    value: rawWidgetMetaMap,
                    set: setRawWidgetMetaMap,
                },
            }}
        >
            {children}
        </GridStackContext.Provider>
    );
}
