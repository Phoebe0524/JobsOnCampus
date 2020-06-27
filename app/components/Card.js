import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

function Card({ image, job, description, requirement, salary }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.jobTitle}>{job}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.requirement}>{requirement}</Text>
        <Text style={styles.requirement}>{salary}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffSet: { width: 20, height: 20 },
    shadowOpacity: 2,
    shadowRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: "80%",
    height: 200,
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

export default Card;
