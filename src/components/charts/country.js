import { Pie } from "@ant-design/plots";
import sites from "../../data/sites.json";
import { useEffect, useState } from "react";

const getCleanedCountryData = (setData) => {
  const countryCount = {};
  sites.forEach((site) => {
    const country = site.ipCountry;
    countryCount[country] = (countryCount[country] || 0) + 1;
  });
  const countryData = Object.keys(countryCount).map((country) => {
    return {
      name: country,
      value: countryCount[country],
    };
  });
  setData(countryData);
};

const CountryPie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCleanedCountryData(setData);
  }, []);

  const countryConfig = {
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
  return <Pie {...countryConfig} />;
};

export default CountryPie;
