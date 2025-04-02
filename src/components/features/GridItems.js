import { BarChartComponent } from "../charts/BarChart";
import PieChartComponent from "../charts/PieChart";

export const GridItem = ({ id, chartType }) => {
    return (
        <div className="w-full h-full flex items-center justify-center p-2">
            {chartType === "bar" && <BarChartComponent />}
            {chartType === "pie" && <PieChartComponent />}
            {!chartType && `Item ${id}`}
        </div>
    );
};
