import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    position: "absolute",
    top: 800,
    right: 40,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
  },
});

export default Button;
