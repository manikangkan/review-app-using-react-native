import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import Header from "../shared/Header";

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="HomeStack" component={HomeStack} />
        <Screen name="AboutStack" component={AboutStack} />
      </Navigator>
    </NavigationContainer>
  );
}

const aboutScreen = {
  // title: "About Screen"
  headerTitle: () => <Header />,
};
