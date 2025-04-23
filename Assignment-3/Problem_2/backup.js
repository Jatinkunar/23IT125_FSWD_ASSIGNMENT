const fs = require('fs');
const path = require('path');
const archiver = require('archiver'); // Install this if using ZIP: npm install archiver

const logFile = 'backup-log.txt';

// Recursively copy files and folders
function copyRecursive(src, dest, logStream) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src);

  entries.forEach(entry => {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);

    const stats = fs.statSync(srcPath);

    if (stats.isDirectory()) {
      copyRecursive(srcPath, destPath, logStream);
    } else {
      fs.copyFileSync(srcPath, destPath);
      logStream.write(`Copied: ${srcPath} → ${destPath} | ${stats.size} bytes | ${new Date().toISOString()}\n`);
    }
  });
}

// Compress folder to ZIP
function compressToZip(sourceFolder, zipPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      console.log(`\n🗜️ Backup compressed into: ${zipPath} (${archive.pointer()} total bytes)`);
      resolve();
    });

    archive.on('error', err => reject(err));

    archive.pipe(output);
    archive.directory(sourceFolder, false);
    archive.finalize();
  });
}

// Main backup function
async function backupFiles(sourceFolder, shouldZip = false) {
  try {
    const absoluteSrc = path.resolve(sourceFolder);
    if (!fs.existsSync(absoluteSrc)) throw new Error("Source folder does not exist.");

    const backupRoot = path.resolve('backup');
    const logStream = fs.createWriteStream(logFile, { flags: 'a' });

    console.log(`\n🔄 Starting backup from: ${absoluteSrc}`);
    logStream.write(`\n\n📁 Backup Started: ${new Date().toISOString()}\n`);

    copyRecursive(absoluteSrc, backupRoot, logStream);

    logStream.write(`✅ Backup completed at: ${new Date().toISOString()}\n`);
    logStream.end();

    if (shouldZip) {
      const zipPath = path.resolve('backup.zip');
      await compressToZip(backupRoot, zipPath);
    }

    console.log("✅ Backup process completed successfully.");
  } catch (err) {
    console.error("❌ Error during backup:", err.message);
  }
}

// Get CLI arguments
const sourceDir = process.argv[2];
const zipOption = process.argv.includes('--zip');

if (!sourceDir) {
  console.log("Usage: node backup.js <source-folder> [--zip]");
} else {
  backupFiles(sourceDir, zipOption);
}
