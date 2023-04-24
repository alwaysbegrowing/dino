import { Pie } from "@ant-design/plots";

const getCleanedResponsiveData = (dataSource) => {
  const columnCount = {};
  dataSource?.forEach((site) => {
    const targetColumn = site.responsive;
    columnCount[targetColumn] = (columnCount[targetColumn] || 0) + 1;
  });

  const responsiveData = Object.keys(columnCount).map((targetColumn) => {
    return {
      name: targetColumn,
      value: columnCount[targetColumn],
    };
  });
  return responsiveData;
};

const ResponsivePie = ({ dataSource }) => {
  const data = getCleanedResponsiveData(dataSource);

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
