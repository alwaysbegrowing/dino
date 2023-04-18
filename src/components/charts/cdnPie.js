import { Pie } from "@ant-design/plots";
import sites from "../../data/sites.json";
import { useEffect, useState } from "react";

export const getCleanedData = (targetColumn, setData) => {
  const targetServiceCount = {};
  sites.forEach((obj) => {
    obj.technologies?.forEach((tech) => {
      tech.categories.forEach((cat) => {
        if (cat.slug === targetColumn) {
          const targetColumnName = tech.name;
          targetServiceCount[targetColumnName] =
            (targetServiceCount[targetColumnName] || 0) + 1;
        }
      });
    });
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

const CDNPie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedData("cdn", setData);
  }, []);

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
        console.log(percent * 100);
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
