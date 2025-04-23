const fs = require('fs');
const os = require('os');
const path = require('path');

// Get system and environment details
function inspectEnvironment() {
  const details = {
    user: os.userInfo().username,
    homeDirectory: os.homedir(),
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    networkInterfaces: os.networkInterfaces(),
    envVariables: process.env
  };

  return details;
}

// Save details to logs/env-details.json
function saveToJSON(data) {
  try {
    const logsDir = path.join(__dirname, 'logs');
    const filePath = path.join(logsDir, 'env-details.json');

    // Create logs directory if not exists
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Environment details saved to: ${filePath}`);
  } catch (err) {
    console.error("❌ Error saving environment details:", err.message);
  }
}

// Run the tool
function runInspector() {
  console.log("🔍 Inspecting environment...");
  const envDetails = inspectEnvironment();
  saveToJSON(envDetails);
}

runInspector();
