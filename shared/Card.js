import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 2,
    // elevation: 2,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 2,
  },
});
