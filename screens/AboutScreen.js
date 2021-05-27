import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../globalStyles/globalStyles";

export default function DetailScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Welcome About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
