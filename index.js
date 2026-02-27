#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ Please provide project name");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

fs.mkdirSync(projectPath);

fs.writeFileSync(
  path.join(projectPath, "index.js"),
  `console.log("Project ${projectName} created successfully!");`
);

console.log(`✅ Project ${projectName} created!`);