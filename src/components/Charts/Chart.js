import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar value={data.value} maxValue={props.maxValue} label={data.label} />
      ))}
    </div>
  );
};

export default Chart
