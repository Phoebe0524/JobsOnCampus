import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import { Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import ButtonGeneral from "../components/ButtonGeneral";

function SignupScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/registration.jpg")}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          //keyboardType="email-address"
          placeholder="Username"
          //textContentType="emailAddress"
          onChangeText={(text) => setUsername(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text)}
        />
        <AppTextInput
          autoCapitaliza="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <ButtonGeneral
          title="Create an Account"
          onPress={() => navigation.navigate("List")}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    //paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    height: 250,
    width: "100%",
    marginBottom: 10,
  },
  inputContainer: {
    justifyContent: "center",
  },
});

export default SignupScreen;
