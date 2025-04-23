const fs = require('fs');
const path = require('path');

// File type categories
const fileTypes = {
  Images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
  Documents: ['.pdf', '.doc', '.docx', '.txt', '.xls', '.xlsx', '.ppt', '.pptx'],
  Videos: ['.mp4', '.mkv', '.avi', '.mov', '.wmv'],
  Music: ['.mp3', '.wav', '.flac', '.aac'],
  Archives: ['.zip', '.rar', '.tar', '.gz', '.7z']
};

// Get category from file extension
function getCategory(ext) {
  for (const category in fileTypes) {
    if (fileTypes[category].includes(ext.toLowerCase())) {
      return category;
    }
  }
  return 'Others';
}

// Organize files
function organizeDirectory(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      throw new Error("Directory does not exist.");
    }

    const items = fs.readdirSync(dirPath);

    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      if (fs.lstatSync(itemPath).isFile()) {
        const ext = path.extname(item);
        const category = getCategory(ext);
        const categoryFolder = path.join(dirPath, category);

        if (!fs.existsSync(categoryFolder)) {
          fs.mkdirSync(categoryFolder);
        }

        const destPath = path.join(categoryFolder, item);
        fs.renameSync(itemPath, destPath);
        console.log(`Moved: ${item} → ${category}/`);
      }
    });

    console.log("\n✅ Directory organized successfully.");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// Get directory path from command line
const inputDir = process.argv[2];
if (!inputDir) {
  console.error("Usage: node organizer.js <directory-path>");
} else {
  organizeDirectory(path.resolve(inputDir));
}
