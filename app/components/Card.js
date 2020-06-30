import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";

function Card({
  image,
  job,
  description,
  requirement,
  salary,
  title,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.jobTitle}>{job}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.requirement}>{requirement}</Text>
        <Text style={styles.requirement}>{salary}</Text>
      </View>
      <Button title={title} onPress={onPress} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    //shadowColor: "dodgerblue",
    //shadowOffSet: { width: 20, height: 20 },
    //shadowOpacity: 2,
    //shadowRadius: 10,
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
  buttonContainer: {
    marginRight: -180,
    marginBottom: 10,
  },

  button: {
    fontSize: 20,
  },
});

export default Card;
