#!/bin/bash

# Create a build directory
mkdir -p ./build
mkdir -p ./build/client
mkdir -p ./build/client/src

# Copy the main index.html to the build directory
cp ./index.html ./build/index.html

# Copy key client files
cp -r ./client/src ./build/client/

# Copy the package.json file
cp ./package.json ./build/package.json

# Copy server files if needed
cp -r ./server ./build/server

# Copy shared files if needed
cp -r ./shared ./build/shared

# Copy config files
cp ./vite.config.ts ./build/vite.config.ts
cp ./tsconfig.json ./build/tsconfig.json
cp ./tailwind.config.ts ./build/tailwind.config.ts
cp ./postcss.config.js ./build/postcss.config.js
cp ./theme.json ./build/theme.json

echo "Build files prepared for deployment"