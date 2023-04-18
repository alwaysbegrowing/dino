import React from "react";
import { Pie } from "@ant-design/plots";
import sites from "../../pages/api/cleanedData.json";

const PieCharts = () => {
  let responsiveTrue = 0;
  let responsiveFalse = 0;
  let missing = 0;

  let veryLow = 0;
  let low = 0;
  let medium = 0;
  let high = 0;
  let veryHigh = 0;

  let cdn = 0;
  let paas = 0;
  let staticSiteGenerator = 0;
  let pageBuilders = 0;
  let uiFrameworks = 0;
  let webFrameworks = 0;
  let webServers = 0;
  let other = 0;

  sites.map((site) => {
    if (site.responsive) {
      if (site.responsive === true) {
        responsiveTrue++;
      } else if (site.responsive === false) {
        responsiveFalse++;
      } else {
        missing++;
      }
    }
    if (site.technologySpend) {
      if (site.technologySpend === "Low") {
        low++;
      } else if (site.technologySpend === "Medium") {
        medium++;
      } else if (site.technologySpend === "High") {
        high++;
      } else if (site.technologySpend === "Very low") {
        veryLow++;
      } else if (site.technologySpend === "Very high") {
        veryHigh++;
      }
    }
    site?.technologies.map((technology) => {
      technology.categories.map((category) => {
        if (category.id === 31) {
          cdn++;
        } else if (category.id === 62) {
          paas++;
        } else if (category.id === 57) {
          staticSiteGenerator++;
        } else if (category.id === 51) {
          pageBuilders++;
        } else if (category.id === 66) {
          uiFrameworks++;
        } else if (category.id === 18) {
          webFrameworks++;
        } else if (category.id === 22) {
          webServers++;
        } else {
          other++;
        }
      });
    });
  });
  console.log({
    responsiveTrue,
    responsiveFalse,
    missing,
  });

  const responsiveData = [
    {
      type: "Responsive True",
      value: responsiveTrue,
    },
    {
      type: "Responsive False",
      value: responsiveFalse,
    },
    {
      type: "Responsive Missing",
      value: missing,
    },
  ];
  const responsiveConfig = {
    appendPadding: 10,
    responsiveData,
    angleField: "value",
    colorField: "type",
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

  const categoryData = [
    {
      type: "CDN",
      value: cdn,
    },
    {
      type: "PAAS",
      value: paas,
    },
    {
      type: "Static Site Generator",
      value: staticSiteGenerator,
    },
    {
      type: "Page Builders",
      value: pageBuilders,
    },
    {
      type: "UI Frameworks",
      value: uiFrameworks,
    },
    {
      type: "Web Frameworks",
      value: webFrameworks,
    },
    {
      type: "Web Servers",
      value: webServers,
    },
  ];
  const categoryConfig = {
    appendPadding: 10,
    categoryData,
    angleField: "value",
    colorField: "type",
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

  const techSpendData = [
    {
      type: "very low",
      value: veryLow,
    },
    {
      type: "low",
      value: low,
    },
    {
      type: "medium",
      value: medium,
    },
    {
      type: "high",
      value: high,
    },
    {
      type: "very high",
      value: veryHigh,
    },
  ];
  const techSpendConfig = {
    appendPadding: 10,
    techSpendData,
    angleField: "value",
    colorField: "type",
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
  return (
    <>
      <Pie {...responsiveConfig} />
      <Pie {...categoryConfig} />
      <Pie {...techSpendConfig} />
    </>
  );
};

export default PieCharts;
