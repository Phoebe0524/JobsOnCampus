import React from "react";
import Card from "../components/Card";
import { View, StyleSheet } from "react-native";

function MainScreen() {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/Hiring.jpg")}
        job="2020 fall Econ83 TA."
        description="Description: help answering questions"
        requirement="Requirement: complete Econ83"
        salary="Salary: $14/hour"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default MainScreen;
