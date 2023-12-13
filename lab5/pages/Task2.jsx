import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function Task2() {
  return (
    <View style={styles.view}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/task2/images.png")}></Image>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Some useless text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: "8pt",
    marginTop: "8pt",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "System",
    fontSize: "17pt",
  },
});
