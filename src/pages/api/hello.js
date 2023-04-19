// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sites from "../../data/sites.json";

function getDomainFromUrl(url) {
  // Trim protocol and www from URL
  url = url?.replace(/^(https?:\/\/)?(www\.)?/i, "");

  // Split URL into parts using the path separator "/"
  const parts = url?.split("/");

  // The domain is the first part of the URL
  const domain = parts?.[0];

  return domain;
}

const domains = [];
const appInfo = [];

const cleanURLs = () => {
  sites.forEach((site) => {
    if (site.status === "success") {
      const cleanDomain = getDomainFromUrl(site.URL);
      const appUrlCheck = cleanDomain.substring(0, 3);
      if (appUrlCheck === "app") {
        appInfo.push(site);
      } else {
        domains.push(cleanDomain);
      }
    }
  });
};

cleanURLs();

console.log({ domains });

export default async function getSubdomains(req, res) {
  let batchStart = 0;
  const batchSize = 10;
  // while (batchStart < domains.length) {
  const batchEnd = Math.min(batchStart + batchSize, domains.length);
  const batch = domains.slice(batchStart, batchEnd).join(",");
  console.log({ batch });
  // const url = new URL("https://api.wappalyzer.com/v2/subdomains/");
  // url.searchParams.set("domains", batch);
  const url = `https://api.wappalyzer.com/v2/subdomains/?domains=${batch}&sets=all`;
  console.log({ url });
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "pne7BK74k433aDbsVaBLV4mf71k6raKm3hj7UJ0B",
      },
    });
    console.log({ data });
    console.log("success", data.state);
    return res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }

  // batchStart += batchSize;
  // }
}

//1. IF site.status === "success" : Create function to loop through URLs and clean them (remove http, https, www, etc.)
//2. Create function to fetch app.DOMAIN
//    - IF app.domain returns !404 = info in json file is for landing page (should not be limited to 200 because may not have access, may have special headers, etc. ?)
//    - IF app.domains returns 404 = info in json file MAY be for the app, but could also be landing page and app is under a different subdomain (other subdomains to try: staking, beta,dapp --> maybe push to list of domains and request subdomains just for these - will save credits)
