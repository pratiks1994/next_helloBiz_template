import DashboardCard from "./DashboardCard";

export const DashboardsList = ({ dashboards }) => {
    return dashboards.map((dashboard, index) => <DashboardCard key={index} dashboard={dashboard} />);
};
