import BarChartV1 from "../ui/charts/BarChartV1";
import BarChartV2 from "../ui/charts/BarChartV2";
import BarChartV3 from "../ui/charts/BarChartV3";

const templateComponents = {
    1: BarChartV1,
    2: BarChartV2,
    3: BarChartV3,
    undefined: BarChartV1,
};

export const BarChartComponent = ({ widget, ...otherProps }) => {
    // Get the appropriate component based on template
    const ChartComponent = templateComponents[widget.template] || templateComponents.undefined;

    // Render the component, passing both widget and any additional props
    return <ChartComponent widget={widget} {...otherProps} />;
};
