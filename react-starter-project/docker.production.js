"use strict";
const fs = require("fs");
const packageJson = require("./package.json");
const { devDependencies, ...rest } = packageJson;
fs.writeFileSync("package.json", JSON.stringify(rest));
