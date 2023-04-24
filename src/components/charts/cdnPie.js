import { Pie } from "@ant-design/plots";

import { useEffect, useState } from "react";

export const getCleanedData = (targetColumn, dataSource) => {
  const targetServiceCount = {};
  dataSource?.forEach((obj) => {
    let columnPresent = false;
    obj.technologies?.forEach((tech) => {
      if (tech.categories.some((cat) => cat.slug === targetColumn)) {
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
  return targetServiceData;
};

const CDNPie = ({ dataSource }) => {
  console.log("russell", { dataSource });
  const data = getCleanedData("cdn", dataSource);

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
