#!/bin/bash

# Medgall Firebase Deployment Script
# This script builds and deploys the Medgall application to Firebase hosting

echo "🚀 Medgall Firebase Deployment Script"
echo "======================================"
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "📦 Installing Firebase CLI..."
    npm install -g firebase-tools
fi

# Check if authenticated
if [ -z "$FIREBASE_TOKEN" ]; then
    echo "❌ Firebase authentication required"
    echo ""
    echo "You have two options:"
    echo ""
    echo "Option 1: Interactive Login (for local development)"
    echo "  Run: firebase login"
    echo "  Then: npm run build && firebase deploy --only hosting"
    echo ""
    echo "Option 2: CI/CD Token (for automated deployments)"
    echo "  1. Get your token: firebase login:ci"
    echo "  2. Set environment: export FIREBASE_TOKEN=your_token_here"
    echo "  3. Run this script again"
    echo ""
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Deploy to Firebase
echo ""
echo "📤 Deploying to Firebase hosting..."
firebase deploy --only hosting --token "$FIREBASE_TOKEN"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your app is live at:"
    echo "   https://medhal-21df9.web.app"
    echo ""
else
    echo "❌ Deployment failed"
    exit 1
fi
