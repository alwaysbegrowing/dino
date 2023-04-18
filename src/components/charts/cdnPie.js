// import { createRequire } from "node:module";
import { Pie } from "@ant-design/plots";
import sites from "../../data/sites.json";

// const require = createRequire(import.meta.url);

// const sites = require("../../../data/sites.json");

const getData = () => {
  const cdnTechnologies = {};
  sites.forEach((obj) => {
    obj.technologies?.forEach((tech) => {
      if (tech.categories.some((cat) => cat.slug === "cdn")) {
        const techName = tech.name;
        if (!cdnTechnologies[techName]) {
          cdnTechnologies[techName] = 1;
        } else {
          cdnTechnologies[techName]++;
        }
      }
    });
  });
  console.log({ cdnTechnologies });
  return cdnTechnologies;
};

const CDNPie = () => {
  const data = [
    { name: "Cloudflare", value: 1138 },
    { name: "Amazon Cloudfront", value: 238 },
    { name: "Amazon S3", value: 194 },
    { name: "jsDelivr", value: 130 },
    { name: "Cloudinary", value: 14 },
    { name: "Google Hosted Libraries", value: 120 },
    { name: "Akamai", value: 1 },
    { name: "cdnjs", value: 111 },
    { name: "Fastly", value: 64 },
    { name: "Netlify", value: 203 },
    { name: "Imgix", value: 5 },
    { name: "Google Cloud CDN", value: 25 },
    { name: "Unpkg", value: 76 },
    { name: "jQuery CDN", value: 30 },
    { name: "Bunny", value: 26 },
    { name: "Uploadcare", value: 1 },
    { name: "Alibaba Cloud CDN", value: 2 },
    { name: "CreateJS", value: 1 },
  ];

  console.log({ data });
  const cdnConfig = {
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
  return <Pie {...cdnConfig} />;
};

export default CDNPie;
