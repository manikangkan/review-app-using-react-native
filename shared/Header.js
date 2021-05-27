import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={27}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <Image
        source={require("../assets/pngs/logo.jpeg")}
        style={styles.headerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 8,
    color: "#fff",
  },
  headerImage: {
    borderRadius: 100,
    width: 30,
    height: 30,
    position: "absolute",
    right: 0,
  },
  // headerWrapper: {
  //   flexDirection: "row",
  // },
});
