const fs = require("node:fs");
const path = require("node:path");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function listPackageDirs(parentDir) {
  if (!fs.existsSync(parentDir)) return [];
  return fs
    .readdirSync(parentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(parentDir, d.name))
    .filter((dir) => fs.existsSync(path.join(dir, "package.json")));
}

function depsOf(pkgJson, field) {
  const obj = pkgJson[field];
  if (!obj || typeof obj !== "object") return [];
  return Object.keys(obj);
}

function main() {
  const repoRoot = path.resolve(__dirname, "../..");

  const toolsRoot = path.join(repoRoot, "tools");
  const toolPkgDirs = listPackageDirs(toolsRoot);
  const toolPkgNames = toolPkgDirs
    .map((dir) => {
      const pkg = readJson(path.join(dir, "package.json"));
      return pkg.name;
    })
    .filter(Boolean);

  const runtimePkgDirs = [
    ...listPackageDirs(path.join(repoRoot, "apps")),
    ...listPackageDirs(path.join(repoRoot, "packages")),
  ];

  const violations = [];

  for (const dir of runtimePkgDirs) {
    const pkgPath = path.join(dir, "package.json");
    const pkg = readJson(pkgPath);

    const forbidden = new Set(toolPkgNames);
    const checkFields = ["dependencies", "optionalDependencies", "peerDependencies"];

    for (const field of checkFields) {
      for (const depName of depsOf(pkg, field)) {
        if (forbidden.has(depName)) {
          violations.push({
            package: pkg.name ?? dir,
            packageJson: path.relative(repoRoot, pkgPath),
            field,
            dep: depName,
          });
        }
      }
    }
  }

  if (violations.length > 0) {
    console.error("FAIL: runtime packages must not depend on /tools/* packages.");
    for (const v of violations) {
      console.error(
        `- ${v.package} (${v.packageJson}): ${v.field} contains forbidden dep ${v.dep}`
      );
    }
    process.exit(1);
  }

  console.log("OK: no runtime dependencies on /tools/* packages found.");
}

main();


