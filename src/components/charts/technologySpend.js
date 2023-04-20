import { Pie } from "@ant-design/plots";
import sites from "../../data/sites.js";
import { useEffect, useState } from "react";

const getCleanedTechnologySpendData = (setData) => {
  const technologySpendCount = {};
  sites.forEach((site) => {
    const column = site.technologySpend;
    technologySpendCount[column] = (technologySpendCount[column] || 0) + 1;
  });
  const technologySpendData = Object.keys(technologySpendCount).map((spend) => {
    return {
      name: spend,
      value: technologySpendCount[spend],
    };
  });
  setData(technologySpendData);
};

const TechnologySpendPie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedTechnologySpendData(setData);
  }, []);

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
