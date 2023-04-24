import { Pie } from "@ant-design/plots";

const getCleanedTechnologySpendData = (dataSource) => {
  const technologySpendCount = {};
  dataSource?.forEach((site) => {
    const column = site.technologySpend;
    technologySpendCount[column] = (technologySpendCount[column] || 0) + 1;
  });
  const technologySpendData = Object.keys(technologySpendCount).map((spend) => {
    return {
      name: spend,
      value: technologySpendCount[spend],
    };
  });
  return technologySpendData;
};

const TechnologySpendPie = ({ dataSource }) => {
  const data = getCleanedTechnologySpendData(dataSource);

  const technologySpendConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "name",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => {
        if (percent * 100 >= 1) {
          return `${(percent * 100).toFixed(0)}%`;
        }
      },
      style: {
        fontSize: 14,
        textAlign: "right",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...technologySpendConfig} />;
};

export default TechnologySpendPie;
