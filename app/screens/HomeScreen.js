import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/BrandyLogo.jpg")} />
      <Text style={styles.text}> For Jobs on Campus!</Text>
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
    top: -200,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000080",
    top: -190,
  },
});

export default HomeScreen;
