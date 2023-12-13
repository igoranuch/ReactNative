import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task2_main({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>This is Task 1</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBlock} onPress={() => navigation.navigate("Task2")}>
          <Text style={styles.text}>Task2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBlock} onPress={() => navigation.navigate("Task3")}>
          <Text style={styles.text}>Task3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(45,35,74)",
    height: "100%",
    width: "100%",
  },
  text: {
    fontFamily: "System",
    fontSize: "20pt",
    color: "white",
  },
  textContainer: {
    display: "flex",
    height: "30%",
    justifyContent: "center",
  },
  buttonContainer: {
    height: "140pt",
    width: "360px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonBlock: {
    display: "flex",
    height: "40pt",
    width: "90pt",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8pt",
    backgroundColor: "rgb(231, 64, 71)",
  },
});
