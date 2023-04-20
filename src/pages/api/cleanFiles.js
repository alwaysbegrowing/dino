// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sites from "../../data/sites.json";
import subdomains from "../../data/subdomains.json";
import appsOnly from "../../data/appsOnly.json";

const fs = require("fs");

//Pull the urls from sites.json and split into the root domain

// function getDomainFromUrl(url) {
//   url = url?.replace(/^(https?:\/\/)?(www\.)?/i, "");
//   const parts = url?.split("/");
//   const domain = parts?.[0];

//   return domain;
// }

// const domains = [];
// const appInfo = [];
// const landingPages = [];

//From the clean urls, if the domain begins with "app", push it to appInfo with all of the site info. Otherwise, the domain needs to be checked, so push the domain to the domains array.

// function cleanURLs() {
//   sites.forEach((site) => {
//     if (site.status === "success") {
//       let found = false;
//       const cleanDomain = getDomainFromUrl(site.URL);
//       appsOnly?.forEach((app) => {
//         if (app.URL === cleanDomain) {
//           appInfo.push(app);
//           found = true;
//         }
//       });
//       if (found === false) {
//         landingPages.push(site);
//       }
//     }
//   });
// }

// cleanURLs();

// console.log({ appInfo, landingPages });

// fs.writeFile("landingPages.json", JSON.stringify(landingPages), (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File saved!");
// });

//Add the site info to the appsOnly.json. ***MAKE SURE TO NOT RUN THIS WITH THE APPINFO DATA BECAUSE THAT'S ALREADY BEEN PUSHED TO THE FILE***

// function pushAppDataToFile() {
//   //Read the existing data from the file
//   fs.readFile("src/data/appsOnly.json", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     // Parse the existing data from JSON
//     const existingData = JSON.parse(data);

//     // Add the new data to the existing data
//     const updatedData = { ...existingData, ...appInfo };

//   // Write the updated data back to the file
//   fs.writeFile("src/data/appsOnly.json", JSON.stringify(appInfo), (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log("New data added to src/data/appsOnly.json");
//   });
// }
//   );
// }

// pushAppDataToFile();

//Get the subdomain information from wappalyzer for all domains in the domains array. The subdomains will be added to a subdomain file in the root.

export default async function getSubdomains(req, res) {
  // const subdomainsList = [];
  // let batchStart = 0;
  // const batchSize = 10;
  // while (batchStart < domains.length) {
  //   const batchEnd = Math.min(batchStart + batchSize, domains.length);
  //   const batch = domains.slice(batchStart, batchEnd).join(",");
  //   const url = `https://api.wappalyzer.com/v2/subdomains/?domains=${batch}&limit=100`;
  //   console.log({ url });
  //   try {
  //     const data = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "x-api-key": process.env.TEST_WAPP_KEY,
  //       },
  //     });
  //     const subdomains = await data.json();

  //     subdomainsList.push(subdomains);
  //     console.log("data pushed");
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   batchStart += batchSize;
  // }

  // const subdomainsJSON = JSON.stringify(subdomainsList);

  // fs.writeFile("subdomains.json", subdomainsJSON, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("File saved!");
  // });
  return res.status(200).json("hi");
}

//Iterate over the subdomains and push only the subdomains beginning with "app" to the appSubdomains array

// const appSubdomains = [];

// export function getAppsFromSubdomainsList() {
//   subdomains?.forEach((domain) => {
//     domain.forEach((singleDomain) => {
//       const subdomainsList = singleDomain.subdomains;
//       for (const key in subdomainsList) {
//         if (subdomainsList.hasOwnProperty(key)) {
//           if (key.startsWith("app")) {
//             const subdomain = key;
//             appSubdomains.push(subdomain);
//           }
//         }
//       }
//     });
//   });
// }

// getAppsFromSubdomainsList();

// //Add the subdomains with app to a json file so we can request the site info for each domain
// //TO DO: Make all of the push to separate json files a single function and add logic to check and make sure no duplicates are being added

// function pushAppSubdomainDataToFile() {
//   //Read the existing data from the file
//   fs.readFile("src/data/appSubdomainList.json", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     // Parse the existing data from JSON
//     const existingData = JSON.parse(data);

//     // Add the new data to the existing data
//     const updatedData = [...existingData, ...appSubdomains];
//     const uniqueDataArray = [...new Set(updatedData)];

//     console.log({ uniqueDataArray });

//     // Write the updated data back to the file
//     fs.writeFile(
//       "src/data/appSubdomainList.json",
//       JSON.stringify(uniqueDataArray),
//       (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log("New data added to src/data/appSubdomainList.json");
//       }
//     );
//   });
// }

// pushAppSubdomainDataToFile();

//1. IF site.status === "success" : Create function to loop through URLs and clean them (remove http, https, www, etc.)
//2. Create function to fetch app.DOMAIN
//    - IF app.domain returns !404 = info in json file is for landing page (should not be limited to 200 because may not have access, may have special headers, etc. ?)
//    - IF app.domains returns 404 = info in json file MAY be for the app, but could also be landing page and app is under a different subdomain (other subdomains to try: staking, beta,dapp --> maybe push to list of domains and request subdomains just for these - will save credits)
