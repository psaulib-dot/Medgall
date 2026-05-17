# 🚀 Firebase Hosting Deployment Guide - Medgall

## Project Information

- **Project ID**: medhal-21df9
- **Hosting URL**: https://medhal-21df9.web.app
- **Project Type**: React Single Page Application
- **Build Output**: /build directory

---

## Authentication Methods

### **Option 1: Interactive Login (Recommended for Local Development)**

For local development on your machine:

```bash
# 1. Authenticate with Firebase
firebase login

# This will open a browser window to authorize Firebase CLI
# You'll need your Google account that has access to the Firebase project

# 2. Build the project
npm install
npm run build

# 3. Deploy to hosting
firebase deploy --only hosting

# Success! Your app will be at: https://medhal-21df9.web.app
```

---

### **Option 2: CI Token (Recommended for Automated Deployments)**

For GitHub Actions, GitLab CI, or other CI/CD pipelines:

#### Step 1: Generate CI Token

```bash
# Run this command on your local machine:
firebase login:ci

# This will:
# 1. Open a browser for authentication
# 2. Display a token like: 1//0...abc123...xyz
# 3. Copy this token - you'll need it for CI/CD
```

#### Step 2: Store Token Securely

**For GitHub Actions:**
1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `FIREBASE_TOKEN`
5. Value: Paste your CI token
6. Click "Add secret"

**For Other Platforms:**
- Store in environment variables securely
- Never commit tokens to version control

#### Step 3: Use Token for Deployment

```bash
# Set environment variable
export FIREBASE_TOKEN=your_token_here

# Or set temporarily for one command
FIREBASE_TOKEN=your_token_here firebase deploy --only hosting

# Or in CI/CD YAML:
env:
  FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
firebase deploy --only hosting
```

---

### **Option 3: Service Account (For Advanced Use)**

For backend/server-side deployments:

```bash
# 1. Create service account in Firebase Console
# Go to: Project Settings → Service Accounts
# Download JSON key file

# 2. Set environment variable
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account-key.json

# 3. Deploy
firebase deploy --only hosting
```

---

## Quick Deployment Commands

### Build Only
```bash
npm install
npm run build
```

### Quick Deploy (with existing authentication)
```bash
npm run build
firebase deploy --only hosting
```

### Full Deploy Pipeline
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Build production version
npm run build

# Deploy to hosting only (not Firestore, Functions, etc.)
firebase deploy --only hosting
```

### Deploy Specific Channel (Testing)
```bash
# Deploy to preview channel for testing
firebase hosting:channel:deploy preview-1

# Deploy to live channel
firebase deploy --only hosting --force
```

---

## Automation Script

Use the included `deploy.sh` for automated deployments:

```bash
# Make executable
chmod +x deploy.sh

# Run the script
./deploy.sh

# Or with token
export FIREBASE_TOKEN=your_token_here
./deploy.sh
```

---

## Troubleshooting

### Error: "Failed to authenticate, have you run firebase login?"

**Solutions:**
1. Run `firebase login` interactively
2. Or set `FIREBASE_TOKEN` environment variable
3. Or use `firebase login:ci` to generate a CI token

### Error: "You do not have permission to access project"

**Solutions:**
1. Verify you're using correct project: `firebase projects:list`
2. Check `.firebaserc` has correct project ID
3. Confirm your Google account has access to medhal-21df9 project

### Error: "Build folder not found"

**Solutions:**
```bash
# Ensure build exists
npm run build

# Verify build was created
ls -la build/

# Then deploy
firebase deploy --only hosting
```

### Error: "Cannot find firebase command"

**Solutions:**
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Or use local version
npx firebase deploy --only hosting
```

### Build takes too long or fails

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Fresh install
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

---

## Firebase Console URLs

- **Project Console**: https://console.firebase.google.com/project/medhal-21df9
- **Hosting Dashboard**: https://console.firebase.google.com/project/medhal-21df9/hosting
- **Analytics**: https://console.firebase.google.com/project/medhal-21df9/analytics/home
- **Database**: https://console.firebase.google.com/project/medhal-21df9/database

---

## Deployment Files

Important files for deployment:

- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project configuration
- `build/` - Production build output (created by npm run build)
- `package.json` - Project dependencies and scripts
- `public/` - Static assets

---

## Pre-Deployment Checklist

- [ ] All code committed and pushed
- [ ] Build completes without errors: `npm run build`
- [ ] No console errors in build output
- [ ] Firebase authentication working
- [ ] `.firebaserc` has correct project ID
- [ ] `firebase.json` looks correct
- [ ] Environment variables set if using CI token
- [ ] No sensitive data in code/config

---

## Post-Deployment

After successful deployment:

1. ✅ Check deployment status:
   ```bash
   firebase hosting:sites:list
   firebase hosting:releases:list
   ```

2. ✅ Test the live site:
   ```
   https://medhal-21df9.web.app
   ```

3. ✅ Monitor performance:
   - Firebase Console → Hosting → Analytics
   - Check build size, page load metrics, etc.

4. ✅ View deployment history:
   ```bash
   firebase hosting:releases:list
   ```

5. ✅ Rollback if needed:
   ```bash
   firebase hosting:releases:rollback
   ```

---

## Environment Setup Steps

### For Development Machine

```bash
# 1. Install Node.js (v14+)
node --version  # Should be 14+

# 2. Install Firebase CLI
npm install -g firebase-tools

# 3. Login to Firebase
firebase login

# 4. Clone/navigate to project
cd /path/to/Medgall

# 5. Verify Firebase project
firebase projects:list

# 6. Build and deploy
npm install
npm run build
firebase deploy --only hosting
```

### For GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: medhal-21df9
```

---

## Performance Tips

After deployment, optimize performance:

1. **Enable Caching** (Already configured in firebase.json)
   - Images: 1 year expiry
   - JS/CSS: 1 year expiry

2. **Monitor Build Size**
   ```bash
   npm run build
   # Check "File sizes after gzip" output
   ```

3. **Use Firebase Analytics**
   - Track page views
   - User engagement
   - Error tracking

4. **Enable CDN**
   - Firebase automatically uses CDN
   - Content delivers from edge locations worldwide

5. **Compression**
   - Gzip enabled by default
   - Remove unused packages

---

## Support & Resources

- **Firebase Docs**: https://firebase.google.com/docs/hosting
- **Firebase CLI Docs**: https://firebase.google.com/docs/cli
- **Project Console**: https://console.firebase.google.com/project/medhal-21df9
- **GitHub Actions**: https://github.com/FirebaseExtended/action-hosting-deploy

---

## Quick Reference

```bash
# Login
firebase login

# Generate CI token
firebase login:ci

# View projects
firebase projects:list

# Build only
npm run build

# Deploy everything
firebase deploy

# Deploy hosting only
firebase deploy --only hosting

# View deployment history
firebase hosting:releases:list

# Rollback last deployment
firebase hosting:releases:rollback

# View live URL
firebase hosting:sites:list
```

---

**Project**: Medgall  
**Status**: Ready for deployment  
**Last Updated**: May 11, 2026
