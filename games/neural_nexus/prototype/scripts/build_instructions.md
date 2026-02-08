# Android Build Instructions for Neural Nexus

Since the local environment lacks the Android SDK and Java, use this guide to build the APK.

## Prerequisites
- Node.js & NPM
- Android Studio (includes Android SDK and Gradle)
- Java JDK 17+

## Build Steps
1. **Go to project directory**:
   `cd games/neural_nexus/prototype`

2. **Install Capacitor**:
   `npm install`

3. **Initialize Android Platform**:
   `npx cap add android`

4. **Sync Web Code**:
   `npx cap sync`

5. **Build APK via CLI (or Android Studio)**:
   `npx cap open android`
   *In Android Studio: Build > Build Bundle(s) / APK(s) > Build APK(s)*

6. **Output Location**:
   The debug APK will be located at:
   `android/app/build/outputs/apk/debug/app-debug.apk`
