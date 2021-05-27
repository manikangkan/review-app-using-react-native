import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleHeader: {
    fontFamily: "lato-black",
    paddingTop: 12,
    fontSize: 20,
  },
  titleText: {
    fontFamily: "lato-regular",
    fontSize: 18,
    paddingVertical: 10,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  size: {
    width: 2,
    height: 2,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    borderRadius: 2,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  errorText: {
    marginTop: 3,
    marginBottom: 6,
    color: "crimson",
    textAlign: "right",
  },
});

export const images = {
  ratings: {
    3: require("../assets/pngs/rating3.png"),
    4: require("../assets/pngs/rating4.png"),
    5: require("../assets/pngs/rating5.png"),
  },
};
