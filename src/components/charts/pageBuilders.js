import { Pie } from "@ant-design/plots";
import { getCleanedData } from "./cdnPie";

const PageBuildersPie = ({ dataSource }) => {
  const data = getCleanedData("page-builders", dataSource);

  const pageBuildersConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => {
        if (percent * 100 >= 4) {
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
  return <Pie {...pageBuildersConfig} />;
};

export default PageBuildersPie;
