// fix-deployment.js - A script to fix deployment issues
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a proper build structure
console.log('Fixing deployment structure...');

// Function to update HTML file paths
function updateHtmlPaths(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace absolute paths with relative paths
      content = content.replace(/src="\/src\//g, 'src="./src/');
      content = content.replace(/href="\/src\//g, 'href="./src/');
      
      // For root index.html, point to client/src
      if (filePath.endsWith('index.html') && !filePath.includes('client/')) {
        content = content.replace(/src="\.\/src\//g, 'src="./client/src/');
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated paths in ${filePath}`);
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

// Create directories if they don't exist
const deploymentDir = path.join(__dirname, 'deployment');
if (!fs.existsSync(deploymentDir)) {
  fs.mkdirSync(deploymentDir, { recursive: true });
  console.log('Created deployment directory');
}

// Create client/index directory structure
const clientIndexDir = path.join(__dirname, 'client', 'index');
if (!fs.existsSync(clientIndexDir)) {
  fs.mkdirSync(clientIndexDir, { recursive: true });
  console.log('Created client/index directory');
}

// Create index.html in the root directory that points to client/src/main.tsx
const rootIndexContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MoodFlix - Movie Recommendations Based on Your Mood</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./client/src/main.tsx"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), rootIndexContent, 'utf8');
console.log('Created root index.html with correct path');

// Create a copy of index.html in the client/index directory
const sourceIndexHtml = path.join(__dirname, 'client', 'index.html');
const targetIndexHtml = path.join(clientIndexDir, 'index.html');

if (fs.existsSync(sourceIndexHtml)) {
  console.log('Copying index.html to client/index/index.html');
  fs.copyFileSync(sourceIndexHtml, targetIndexHtml);
  
  // Update the paths in the copied file
  updateHtmlPaths(targetIndexHtml);
}

// Update the paths in client/index.html
updateHtmlPaths(sourceIndexHtml);

// Create deployment index.html
const deploymentIndexContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MoodFlix - Movie Recommendations Based on Your Mood</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./client/src/main.tsx"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(deploymentDir, 'index.html'), deploymentIndexContent, 'utf8');
console.log('Created deployment/index.html with correct path');

console.log('Deployment structure fixed successfully!');
console.log('Now try deploying again using the Deploy button in Replit.');