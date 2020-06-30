import React from "react";
import Card from "../components/Card";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";

const jobPosters = [
  {
    image: require("../assets/Hiring.jpg"),
    job: "2020 Fall Econ83 TA.",
    description: "Description: help answering questions",
    requirement: "Requirement: completion of  Econ83",
    salary: "Salary: $14/hour",
    title: "Click to Know More",
    onPress: "Detail",
  },
  {
    image: require("../assets/Hiring.jpg"),
    job: "2020 Fall COSI10A TA.",
    description: "Description: help debugging and grading exams",
    requirement: "Requirement: completion of  COSI10A",
    salary: "Salary: $14/hour",
    title: "Click to Know More",
    onPress: "Detail",
  },

  {
    image: require("../assets/Hiring.jpg"),
    job: "2020 Fall BUS10A TA.",
    description: "Description: grading participation and answering questions",
    requirement: "Requirement: completion of Bus6A and Bus10A",
    salary: "Salary: $14/hour",
    title: "Click to Know More",
    onPress: "Detail",
  },
];

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={jobPosters}
        keyExtractor={(settingItem) => settingItem.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            job={item.job}
            description={item.description}
            requirement={item.requirement}
            salary={item.salary}
            title={item.title}
            onPress={() => navigation.navigate(item.onPress)}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 20,
  },
});

export default MainScreen;
