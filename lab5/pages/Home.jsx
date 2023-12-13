import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.home}>
      <Button title="Task1" onPress={() => navigation.navigate("Task1")} />
      <Button title="Task2" onPress={() => navigation.navigate("Task2_main")} />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 15,
  },
});
