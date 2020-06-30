import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function PublisherDetail({ image, line1, line2 }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailContainer}>
        <Text style={styles.line1}>{line1}</Text>
        <Text style={styles.line2}>{line2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  detailContainer: {
    paddingTop: 10,
  },
  line1: {
    fontSize: 20,
    fontWeight: "bold",
    //color: "dodgerblue",
    lineHeight: 30,
  },
  line2: {
    fontSize: 15,
    color: "grey",
  },
});
export default PublisherDetail;
