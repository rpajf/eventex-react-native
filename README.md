# eventex-react-native

> Status: Developing ⚠️<br />
Eventex is  built on react native. You can search for your favorite events and register your own event

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
