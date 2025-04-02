import PieChartV1 from "../ui/charts/PieChartV1";
import PieChartV2 from "../ui/charts/PieChartV2";
import PieChartV3 from "../ui/charts/PieChartV3";
import PieChartV4 from "../ui/charts/PieChartV4";

const templates = {
    1: PieChartV1,
    2: PieChartV2,
    3: PieChartV3,
    4: PieChartV4,
};

function PieChartComponent({ widget }) {
    const ChartComponent = templates[widget?.template] ?? PieChartV1;
    return <ChartComponent widget={widget} />;
}

export default PieChartComponent;
