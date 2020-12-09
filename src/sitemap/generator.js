const { sitemapBuilder } = require("react-router-sitemap");

const routes = require("./routes");
const path = require("path");
const fs = require("fs");

const hostname = "https://www.praxis-webseite.de/";
const dest = path.resolve("./public", "sitemap.xml");
const sitemap = sitemapBuilder(hostname, routes);

fs.writeFileSync(dest, sitemap.toString());
