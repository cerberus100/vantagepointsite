#!/usr/bin/env node

const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fs = require("fs");
const path = require("path");

const pages = [
  { url: "http://localhost:3000/", name: "home" },
  { url: "http://localhost:3000/solutions", name: "solutions" },
  { url: "http://localhost:3000/programs", name: "programs" },
  { url: "http://localhost:3000/trust-center", name: "trust-center" },
];

async function runLighthouse(url, name) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);

  // Save report
  const reportHtml = runnerResult.report;
  const reportPath = path.join(
    process.cwd(),
    "lighthouse-reports",
    `${name}.html`
  );

  if (!fs.existsSync(path.dirname(reportPath))) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  }

  fs.writeFileSync(reportPath, reportHtml);

  // Extract scores
  const scores = {
    performance: runnerResult.lhr.categories.performance.score * 100,
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    bestPractices: runnerResult.lhr.categories["best-practices"].score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
  };

  await chrome.kill();

  return { name, url, scores, reportPath };
}

async function main() {
  console.log("Running Lighthouse audits...\n");

  const results = [];

  for (const page of pages) {
    console.log(`Auditing ${page.url}...`);
    const result = await runLighthouse(page.url, page.name);
    results.push(result);
    console.log(`  Performance: ${result.scores.performance}`);
    console.log(`  Accessibility: ${result.scores.accessibility}`);
    console.log(`  Best Practices: ${result.scores.bestPractices}`);
    console.log(`  SEO: ${result.scores.seo}`);
    console.log(`  Report saved to: ${result.reportPath}\n`);
  }

  // Check if all pages meet targets
  const targets = { performance: 95, accessibility: 95 };
  let allPassed = true;

  console.log("\n=== Summary ===\n");

  for (const result of results) {
    const perfPass = result.scores.performance >= targets.performance;
    const a11yPass = result.scores.accessibility >= targets.accessibility;

    console.log(`${result.name}:`);
    console.log(
      `  Performance: ${result.scores.performance} ${perfPass ? "✓" : "✗ (target: 95)"}`
    );
    console.log(
      `  Accessibility: ${result.scores.accessibility} ${a11yPass ? "✓" : "✗ (target: 95)"}`
    );

    if (!perfPass || !a11yPass) {
      allPassed = false;
    }
  }

  if (!allPassed) {
    console.log("\n⚠️  Some pages did not meet the targets.");
    process.exit(1);
  } else {
    console.log("\n✓ All pages meet the targets!");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
