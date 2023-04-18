import { Pie } from "@ant-design/plots";
import { useEffect, useState } from "react";
import { getCleanedData } from "./cdnPie";

const UIFrameworksPie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedData("ui-frameworks", setData);
  }, []);

  const uiFrameworksConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => {
        console.log(percent * 100);
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
  return <Pie {...uiFrameworksConfig} />;
};

export default UIFrameworksPie;
