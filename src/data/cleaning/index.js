const require = createRequire(import.meta.url);

const sites = require("../../../data/sites.json");

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
