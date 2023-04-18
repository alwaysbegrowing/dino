// import React from "react";
// import { Pie } from "@ant-design/plots";
// import sites from "../api/cleanedData.json";

// const TechnologyCategoryPie = () => {
//   let cdn = 0;
//   let paas = 0;
//   let staticSiteGenerator = 0;
//   let pageBuilders = 0;
//   let uiFrameworks = 0;
//   let webFrameworks = 0;
//   let webServers = 0;
//   let other = 0;

//   sites.map((site) => {
//     site?.technologies.map((technology) => {
//       technology.categories.map((category) => {
//         if (category.id === 31) {
//           cdn++;
//         } else if (category.id === 62) {
//           paas++;
//         } else if (category.id === 57) {
//           staticSiteGenerator++;
//         } else if (category.id === 51) {
//           pageBuilders++;
//         } else if (category.id === 66) {
//           uiFrameworks++;
//         } else if (category.id === 18) {
//           webFrameworks++;
//         } else if (category.id === 22) {
//           webServers++;
//         } else {
//           other++;
//         }
//       });
//     });
//   });
//   console.log({
//     cdn,
//     paas,
//     staticSiteGenerator,
//     pageBuilders,
//     uiFrameworks,
//     webFrameworks,
//     webServers,
//   });

//   const categoryData = [
//     {
//       type: "CDN",
//       value: cdn,
//     },
//     {
//       type: "PAAS",
//       value: paas,
//     },
//     {
//       type: "Static Site Generator",
//       value: staticSiteGenerator,
//     },
//     {
//       type: "Page Builders",
//       value: pageBuilders,
//     },
//     {
//       type: "UI Frameworks",
//       value: uiFrameworks,
//     },
//     {
//       type: "Web Frameworks",
//       value: webFrameworks,
//     },
//     {
//       type: "Web Servers",
//       value: webServers,
//     },
//   ];
//   const categoryConfig = {
//     appendPadding: 10,
//     data,
//     angleField: "value",
//     colorField: "type",
//     radius: 0.9,
//     label: {
//       type: "inner",
//       offset: "-30%",
//       content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
//       style: {
//         fontSize: 14,
//         textAlign: "center",
//       },
//     },
//     interactions: [
//       {
//         type: "element-active",
//       },
//     ],
//   };
//   return <Pie {...config} />;
// };

// export default TechnologyCategoryPie;
