#!/bin/bash

# Create necessary directories
mkdir -p ./dist

# Copy the root index.html to the dist folder
cp ./index.html ./dist/index.html

# Copy static assets if needed
# mkdir -p ./dist/assets
# cp -r ./client/assets ./dist/assets

# Make sure build-for-deploy.sh has execution permissions
chmod +x ./build-for-deploy.sh

# Let the user know the process is complete
echo "Deployment preparation complete. You can now deploy using the Replit Deploy button."