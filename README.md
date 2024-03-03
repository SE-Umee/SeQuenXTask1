# SeQuenXTask - React Native Signup App

A simple React Native application for user signup, built using Redux and React Navigation.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Testing](#testing)
- [Building](#building)
  - [Android](#android)
  - [iOS](#ios)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

The SeQuenXTask React Native Signup App allows users to sign up by providing their name, email, and password. It includes basic validation for input fields and communicates with a server to perform user signup.

## Features

- User input validation for name, email, password, and confirm password.
- Redux for state management.
- Navigation using React Navigation.
- Integration with a server for user signup.
- Snackbar notifications for success and error messages.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/SeQuenXTask.git

   ```

2. **Navigate to the project directory:**

   ```bash
   cd SeQuenXTask

   ```

3. **Install dependencies:**

   ```bash
   yarn  install or yarn
   ```

### Usage

1. **Run the application on Android:**

   ```bash
   npx react-native run-android
   ```

   This will build the app and run it on the connected Android emulator or device.

2. **Run the application on iOS:**

   ```bash
     npx react-native run-ios
   ```

   This will build the app and run it on the connected iOS simulator or device.

### Testing

- To run unit tests using Jest, use the following command:

```bash
      npx test or npx test home-test.js
```

This will execute the Jest test suite and provide you with the test results.

## Building

**Android**
To build the Android version of the app, use the following command:

```bash
npx react-native run-ios
```

This will build the app and run it on the connected Android emulator or device.

**IOS**
To build the iOS version of the app, use the following command:

```bash
npx react-native run-ios
```

This will build the app and run it on the connected iOS simulator or device.

### Folder Structure

The project has the following folder structure:

SeQuenXTask/
|-- src/
| |-- screens/
| |-- signup-screen.js
| |-- components/
| |-- CustomInput.js
| |-- CustomButton.js
| |-- assets/
| |-- constant/
| |-- colors.js
| |-- icons/
| |-- user-icon.png
| |-- email-icon.png
| |-- password-icon.png
| |-- redux/
| |-- slices/
| |-- user-slice.js
| |-- store.js
|-- App.js
|-- ...

### Dependencies

The main dependencies used in the project include:

```
React Native
React Navigation
Redux
Redux Toolkit
react-native-responsive-screen
react-native-keyboard-aware-scroll-view
react-native-snackbar
Jest (for unit testing)
```
