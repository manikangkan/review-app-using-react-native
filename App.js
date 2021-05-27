import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Drawer from "./routes/Drawer";

const getFont = () => {
  Font.loadAsync({
    "lato-black": require("./assets/fonts/LatoBlack.ttf"),
    "lato-regular": require("./assets/fonts/LatoRegular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  if (fontsLoaded) {
    return <Drawer />;
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
