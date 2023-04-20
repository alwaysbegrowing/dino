import { Pie } from "@ant-design/plots";
import sites from "../../data/sites.json";
import { useEffect, useState } from "react";

const getCleanedResponsiveData = (setData) => {
  const columnCount = {};
  sites.forEach((site) => {
    const targetColumn = site.responsive;
    columnCount[targetColumn] = (columnCount[targetColumn] || 0) + 1;
  });

  const responsiveData = Object.keys(columnCount).map((targetColumn) => {
    return {
      name: targetColumn,
      value: columnCount[targetColumn],
    };
  });
  setData(responsiveData);
};

const ResponsivePie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedResponsiveData(setData);
  }, []);

  const responsiveConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
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
  return <Pie {...responsiveConfig} />;
};

export default ResponsivePie;
