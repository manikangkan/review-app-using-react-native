import React from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../globalStyles/globalStyles";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

export default function HomeScreen({ navigation }) {
  const [reviews, setReviews] = React.useState([
    {
      title: "Jhon Doe",
      rating: 3,
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident porro aliquam quia deserunt nesciunt tempore voluptates ducimus doloribus! Fuga, nam quibusdam quis ab minus maxime, quod incidunt molestias consequuntur inventore, eius id.",
      key: "1",
    },
    {
      title: "Jhon Doe's sister",
      rating: 4,
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo provident porro aliquam quia deserunt nesciunt tempore voluptates ducimus doloribus!",
      key: "2",
    },
    {
      title: "Jhon Doe's parents",
      rating: 5,
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      key: "5",
    },
  ]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews([review, ...reviews]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modelToggle, marginTop: 10, marginBottom: 0 }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modelToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailScreen", { item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modelToggle: {
    marginBottom: 10,
    padding: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
});
