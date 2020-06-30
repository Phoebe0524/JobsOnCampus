import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function SettingLine({ name, title, color }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={name}
          color={color}
          size={30}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "#ffffff",
  },
  icon: {
    //color: "dodgerblue",
    marginRight: 20,
  },
  detailContainer: {
    paddingTop: 2,
  },
  title: {
    fontSize: 20,
    //fontWeight: "bold",
    //color: "dodgerblue",
    //lineHeight: 30,
  },
});
export default SettingLine;
