import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

import { createStackNavigator } from "@react-navigation/stack";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="HomeScreen" component={HomeScreen} options={homeScreen} />
      <Screen
        name="DetailScreen"
        component={DetailScreen}
        options={detailScreen}
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

// const homeScreen = {
//   // title: "Home Screen",
//   // headerTitle: () => <Header />,
// };
const homeScreen = ({ navigation }) => {
  return {
    headerTitle: () => <Header navigation={navigation} title="Home Screen" />,
  };
};
const detailScreen = { title: "Detail Screen" };
