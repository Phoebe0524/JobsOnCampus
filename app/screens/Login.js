import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Button from "../components/Button";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/BrandyLogo.jpg")} />
      <Text style={styles.text}> For Jobs on Campus!</Text>
      <Image style={styles.image} source={require("../assets/Hiring.jpg")} />
      <Button title="Login" onPress={() => navigation.navigate("List")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: "9%",
    position: "absolute",
    top: 190,
  },
  image: {
    width: "80%",
    height: "20%",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000080",
    position: "absolute",
    top: 290,
  },
});

export default LoginScreen;
