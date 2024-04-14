import fs from 'fs';

const coverageSummaryPath = './coverage/coverage-summary.json';

if (!fs.existsSync(coverageSummaryPath)) {
  console.error('Coverage summary file not found!');
  process.exit(1);
}

const { total } = JSON.parse(fs.readFileSync(coverageSummaryPath, 'utf8'));

const checkCoverage = (metric, threshold) => {
  const { pct } = total[metric];
  if (pct < threshold) {
    console.error(`The coverage of ${metric} is ${pct}%, which is below the threshold of ${threshold}%`);
    return false;
  }
  return true;
};

const thresholds = {
  lines: 90,
  statements: 90,
  functions: 90,
  branches: 90,
};

const results = Object.keys(thresholds).map((metric) =>
  checkCoverage(metric, thresholds[metric])
);

if (results.includes(false)) {
  process.exit(1);
}
