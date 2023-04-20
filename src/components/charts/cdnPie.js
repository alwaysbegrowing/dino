import { Pie } from "@ant-design/plots";
import sites from "../../data/sites.js";
import { useEffect, useState } from "react";

export const getCleanedData = (targetColumn, setData, dataSource) => {
  const targetServiceCount = {};
  console.log({ dataSource });
  dataSource?.forEach((obj) => {
    console.log({ obj });
    let columnPresent = false;
    obj.technologies?.forEach((tech) => {
      if (tech.categories.some((cat) => cat.slug === targetColumn)) {
        console.log("hi");
        const targetColumnName = tech.name;
        targetServiceCount[targetColumnName] =
          (targetServiceCount[targetColumnName] || 0) + 1;
        columnPresent = true;
      }
    });
    if (columnPresent === false) {
      const targetColumnName = "missing";
      targetServiceCount[targetColumnName] =
        (targetServiceCount[targetColumnName] || 0) + 1;
    }
  });

  const targetServiceData = Object.keys(targetServiceCount).map(
    (targetColumnName) => {
      return {
        name: targetColumnName,
        value: targetServiceCount[targetColumnName],
      };
    }
  );
  setData(targetServiceData);
};

const CDNPie = ({ dataSource }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedData("cdn", setData, dataSource);
  }, [dataSource]);

  const cdnConfig = {
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
  return <Pie {...cdnConfig} />;
};

export default CDNPie;
