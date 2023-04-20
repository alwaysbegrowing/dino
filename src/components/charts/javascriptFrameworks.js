import { Pie } from "@ant-design/plots";
import { getCleanedData } from "./cdnPie";

const JSFrameworksPie = ({ dataSource }) => {
  const data = getCleanedData("javascript-frameworks", dataSource);

  const jsFrameworksConfig = {
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
  return <Pie {...jsFrameworksConfig} />;
};

export default JSFrameworksPie;
