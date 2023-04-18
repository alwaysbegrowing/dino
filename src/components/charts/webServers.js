import { Pie } from "@ant-design/plots";
import { useEffect, useState } from "react";
import { getCleanedData } from "./cdnPie";

const WebServersPie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedData("web-servers", setData);
  }, []);

  const webServersConfig = {
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
  return <Pie {...webServersConfig} />;
};

export default WebServersPie;
