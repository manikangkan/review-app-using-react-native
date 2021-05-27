import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 2,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "teal",
  },
  btnText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 5,
  },
});
