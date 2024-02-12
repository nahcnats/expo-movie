# expo-movie
This is a [**React Native using Expo**] project.

This app utilizes [TMDB](https://www.themoviedb.org/) APIs. Hence, a TMDB account is required to login.

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Environment Variables (.env)

Setup a .env with the following values:

- EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
- EXPO_PUBLIC_TMDB_API_KEY={API_KEY}
- EXPO_PUBLIC_TMDB_IMAGE_PATH=https://image.tmdb.org/t/p/w500
- EXPO_PUBLIC_TMDB_TOKEN={READ_ACCESS_TOKEN}

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

# App Summary

This project was created as a technical assessment for an interview. So the UI is pretty basic.

### Implmented Core Libraries
- Redux & Redux Toolkit for global state management.
- TanStack Query for fetching, caching, synchronizing and updating server state.
- Nativewind (TailwindCSS) for styling.
- React Hook Forms and Zod for forms handling and validation.
- React Navigation for app navigation.

### Challenges
- Some of the APIs don't behave as anticipated.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.