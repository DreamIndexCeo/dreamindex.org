#!/bin/bash

# Navigate to the repository directory
cd /var/www/dreamindex.org

# Pull the latest changes from Git
git pull origin main

# Install any new dependencies
npm install

# Build the project
npm run build

# Restart the application
pm2 restart all

# Alternatively, if you're not using PM2, you can stop and start your app manually
# npm start
