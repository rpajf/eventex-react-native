# eventex-react-native

> Status: Developing ⚒️ (this project is only optmized for android at the moment) ⚠️<br />

## 📱Description
Eventex is  built on react native. You can search for your favorite events, sign on them and even register your own event!

## Getting started

```bash
# Clone this repo
$ git clone git@github.com:rpajf/eventex-react-native.git

# Acess the root directory of the project
$ cd eventex-react-native

# Install the dependencies
$ yarn or npm install
```
## Android Emulator
At first the app is optimized on android, on a terminal window, at the root directory type:
```
yarn start or npm start
```
To get yarn, acess https://yarnpkg.com/getting-started/install</br>
On other terminal window, at the root directory with the android emulator open, type:
```
react-native run-android
```
You can also use the shortcut:
```
npx react-native run-android
```
## Usb device
Connect your device with the USB cable and enable USB debugging option under Settings > Developer Options, after that type on a terminal window:
```
adb devices
```
after your device name is displayed on the terminal, inside root directory type:

```
npx react-native run-android
```
### 🛠 Tech Stack

The technologies that were used on this project:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/ts/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
