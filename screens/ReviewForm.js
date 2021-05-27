import { Formik } from "formik";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { globalStyles } from "../globalStyles/globalStyles";
import * as yup from "yup";
import FlatButton from "../shared/FlatButton";

const reviewSchema = yup.object({
  title: yup.string().required().min(2),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test("is-num-3-5", "Rating must be a number 3-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 2;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
          //   console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.inputField}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.inputField}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.inputField}
              placeholder="Rating | 3-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
