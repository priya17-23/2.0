const fs = require("fs");
const path = ".next";
if (fs.existsSync(path)) {
  fs.rmSync(path, { recursive: true });
  console.log("Cleaned .next");
}
