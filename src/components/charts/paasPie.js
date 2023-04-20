import { Pie } from "@ant-design/plots";
import { getCleanedData } from "./cdnPie";

const PaasPie = ({ dataSource }) => {
  const data = getCleanedData("paas", dataSource);

  const paasConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => {
        if (percent * 100 >= 5) {
          return `${(percent * 100).toFixed(0)}%`;
        }
      },
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...paasConfig} />;
};

export default PaasPie;
