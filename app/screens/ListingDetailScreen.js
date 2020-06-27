import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import PublisherDetail from "../components/PublisherDetail";

function ListingDetailScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="ios-arrow-back" size={30} color="black" />
      </View>
      <Image style={styles.image} source={require("../assets/Hiring.jpg")} />
      <View style={styles.detailContainer}>
        <Text style={styles.jobTitle}>2020 fall Econ83 TA</Text>
        <Text style={styles.description}>
          Description: help answering questions
        </Text>
        <Text style={styles.requirement}>Requirement: complete Econ83</Text>
        <Text style={styles.requirement}>Salary: $14/hour</Text>
      </View>
      <PublisherDetail
        name="Tymon"
        listing="1 listing"
        image={require("../assets/user1.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  icon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  image: {
    width: "80%",
    height: 300,
    position: "relative",
    right: -40,
  },
  detailContainer: {
    marginBottom: 20,
    marginLeft: 20,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "dodgerblue",
    lineHeight: 50,
  },
  description: {
    fontSize: 18,
    //fontWeight: "bold",
    color: "dodgerblue",
    lineHeight: 33,
  },
  requirement: {
    fontSize: 18,
    //fontWeight: "bold",
    color: "dodgerblue",
    lineHeight: 33,
  },
});

export default ListingDetailScreen;
