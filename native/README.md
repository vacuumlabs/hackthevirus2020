# Managed Expo App Playground

What's set up in this project:

- iOs AppStore, with TestFlight delivery and automatic publish through github actions
- Android privacy_policy through github pages
- eslint, prettier, VS Code auto organize imports
- babel-plugin-module-resolver, and component file structure
- Font setup through Expo, Text Component, AppLoading component to keep splash visible until fonts are ready

* TODO react-navigation
* TODO Sentry
* TODO Storybook
* TODO Storybook Jest Snapshots
* TODO Detox

## Eslint / Typescript / Babel setup (with module-resolver for easy relative paths)

The relevant files to checkout are `tsconfig.json`, `babel.config.js`, `.prettierrc`, `.eslintrc` and `.vscode/settings.json`.

The devDependecies to install are as follows:

```
yarn --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-module-resolver eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```

## Font Setup

Follow this to setup your Font loading in expo managed projects -

This is also super useful - https://docs.expo.io/versions/latest/sdk/app-loading/

Check out `components/ui/text` to see how to deal with mapping between font families and font weights.

## Setup build pipeline with expo

This guide should help you get your Expo Managed Application into the App store. It assumes you have `expo-cli` and `fastalne` gem installed, and a managed app (created through `expo init`) ready.

**If setting up new app** - note that Expo has no collaboration in free version. _It is recommended to create a separate shared account for each project._

This is iOs only for now, for Android I lacked the required access rights - see here for android setup .

### Github Actions

This repo contain two Actions taken from https://github.com/marketplace/actions/expo-github-action , you can find them in `.github/workflows/`
The message in the PR action needs to be changed according to your expo account name and app slug.

### iOs stuff

- create a new bundleId in Certificates, Identifiers & Profiles
- create a new App in App Store connect

Make sure the bundleIdentifier key in app.json (under `ios`) matches what you've just set. Also recommended to set the `"usesNonExemptEncryption": false` setting under `config` key in `ios` in `app.json`, to avoid the need of fixing "Missing export compliance".

Run

```
expo build:ios
```

Doing this for the first time will require you to fill in a bunch of credentials - it is recommended to let expo handle everything for you. This will either create a new, or allow you to reuse an appropriate _Apple Distribution Certificate_, _Apple Push Notifications service key_ and _Apple Provisioning Profile_.

> If you've recently switched to 2-factor authentication on your Apple developer account (i.e. because you want to run some of this workflow from CI), and are now getting a bunch of error 500s, simply waiting for a few hours seems to have fixed the problem.

Once built, you can either download the app manually or by running

```
curl -o app.ipa "$(expo url:ipa --non-interactive)"
```

> You can also add `*.ipa` to your `.gitignore` when using this method

To upload the downloaded app to App store, we can use fastlane's pilot (it'll automatically look for `.ipa` files in your current directory). You need the `fastlane` gem installed to be able to do this.

```
fastlane pilot upload
```

If you use 2-factor authentication for your Apple account, you'll need to create a app-specific-password for this (you can do so through AppleId site).

### Multiple Release Channels Workflow

To avoid the need to rebuild the app with each release, it is recommended to keep a separate release channel for production (maybe even separate for Android and iOs production) and for testing - this allows you to easily deliver OTA updates to existing users as well as test versions to testers without the need to rebuild the native app - you'll have to rebuild the app only to update the Expo SDK. Read more here https://docs.expo.io/versions/latest/distribution/release-channels/ and here https://docs.expo.io/versions/v36.0.0/distribution/advanced-release-channels/.

### CI

If you can use GithubActions, this is nice and probably all you need - https://github.com/marketplace/actions/expo-github-action

If not, I recommend setting similar workflow through CircleCI, using just `publish` to deliver regularly to testers, updating the `.ipa` only to update the underlying Expo SDK

Fin.

---

## Android

This is quite unrelated to the rest of the readme, just a couple of useful observations when getting an app into google play store.

You'll be required to fill in a few images before you can submit the app - to do this quickly you can use these services for mmocks

- https://appicon.co/ with your favourite image
- https://www.norio.be/android-feature-graphic-generator/

### Privacy policy

Some of the Expo's services allow you to collect user's data, which in turn requires you to haver privacy policy - you can use this https://app-privacy-policy-generator.firebaseapp.com/ to quickly generate one.

You'll have to host the privacy policy somewhere - github pages tend to be the easiest option if you already use github to host your repo.

First generate and download a `.html` version from aforementioned service - add this to your repo as `docs/privacy_policy.html`. Go to settings on your github repo, enable Github Pages for `docs` dir on `master` branch. Finally, to get rid of the "YourAppName" header on the policy, change the pages Theme to sommething else then the default 'Primer' (the 'Minimal' theme works well for this).
