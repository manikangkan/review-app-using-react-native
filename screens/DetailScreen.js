import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, images } from "../globalStyles/globalStyles";
import Card from "../shared/Card";

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  //   console.log(navigation);
  //   console.log(item);
  const rating = item.rating;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleHeader}>Welcome {item.title}</Text>
        <Text style={globalStyles.titleText}>{item.body}</Text>
        <View style={styles.rating}>
          <Text>Rating</Text>
          <Image
            source={images.ratings[rating]}
            style={{
              resizeMode: "cover",
              height: 50,
              width: 80,
            }}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
