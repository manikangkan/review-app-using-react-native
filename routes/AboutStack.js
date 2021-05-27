import React from "react";
import AboutScreen from "../screens/AboutScreen";

import { createStackNavigator } from "@react-navigation/stack";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="AboutScreen"
        component={AboutScreen}
        options={aboutScreen}
      />
    </Navigator>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "teal",
    height: 100,
  },
  headerTintColor: "white",
};

// const aboutStack = {
//   // title: "Home Screen",
//   headerTitle: () => <Header />,
// };

const aboutScreen = ({ navigation }) => {
  return {
    headerTitle: () => <Header navigation={navigation} title="About Screen" />,
  };
};
