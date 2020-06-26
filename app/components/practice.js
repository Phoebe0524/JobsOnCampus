import React from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";

// <SafeAreaView></SafeAreaView> // prevent nodge
// <Text>Hello World!</Text>
// numberOfLine={1}
//resizeMods="contain"
function App() {
  <View style={styles.container}>
    <Text>Hello World!</Text>
    <Image source={require("./assets/icon.png")} />
  </View>;

  <SafeAreaView style={styles.container}>
    <Button
      title="click me"
      onPress={() =>
        Alert.alert("Apple", "sweet", [
          { text: "Add", onPress: () => console.log("pressed!") },
          { text: "Cancel" },
        ])
      }
    />
    <Button
      title="click me"
      onPress={() =>
        Alert.prompt("My title", "my message", (text) => console.log(text))
      }
    />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
