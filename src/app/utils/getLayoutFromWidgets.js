export const getLayoutFromWidgets = (widgets = []) => {
    return widgets.reduce(
        (acc, widget) => {
            acc.lg.push(widget?.layout.lg);
            acc.sm.push(widget?.layout.sm);
            return acc;
        },
        {
            lg: [],
            sm: [],
        }
    );
};
