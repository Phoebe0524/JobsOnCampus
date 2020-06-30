import React from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/campusPart.png")}
      style={styles.container}
    >
      <Image style={styles.logo} source={require("../assets/logo2.png")} />
      <Text style={styles.text}> Find Jobs on Campus!</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <View style={styles.signUp}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signUpText}> New User? Sign up Here.</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUp: {
    justifyContent: "center",
    //alignItems: "center",
    position: "absolute",
    bottom: 60,
    //right: 40,
  },
  signUpText: {
    color: "#ffffff",
    fontSize: 20,
  },

  logo: {
    width: "90%",
    height: "15%",
    position: "absolute",
    top: 190,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000080",
    position: "absolute",
    top: 320,
  },
});

export default HomeScreen;
