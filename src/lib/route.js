export const routes = {
    home: "/home",
    create_dashboard: "/home/create-dashboard",

    view_dashboard: "/home/view-dashboard",

    add_kpi: "/home/create-dashboard/add-kpi",
    edit_kpi: "/home/create-dashboard/edit-kpi/[id]",

    add_bar_chart: "/home/create-dashboard/add-bar-chart",
    edit_bar_chart: "/home/create-dashboard/edit-bar-chart/[id]",

    add_pie_chart: "/home/create-dashboard/add-pie-chart",
    edit_pie_chart: "/home/create-dashboard/edit-pie-chart/[id]",

    add_table: "/home/create-dashboard/add-table",
    edit_table: "/home/create-dashboard/edit-table/[id]",

    dashboard_settings: "/home/create-dashboard/dashboard-settings",
};

export const replaceParams = (path, params) => {
    let result = path;
    Object.keys(params).forEach((key) => {
        result = result.replace(`[${key}]`, params[key]);
    });
    return result;
};
