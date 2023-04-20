import { Pie } from "@ant-design/plots";

const getCleanedCountryData = (dataSource) => {
  const countryCount = {};
  dataSource.forEach((site) => {
    const country = site.ipCountry;
    countryCount[country] = (countryCount[country] || 0) + 1;
  });
  const countryData = Object.keys(countryCount).map((country) => {
    return {
      name: country,
      value: countryCount[country],
    };
  });
  return countryData;
};

const CountryPie = ({ dataSource }) => {
  const data = getCleanedCountryData(dataSource);

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
