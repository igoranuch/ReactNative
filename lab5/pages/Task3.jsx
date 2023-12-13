import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native";

export default function Task3() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.view}>
        <View>
          <Text style={styles.text}>Text label</Text>
          <TextInput editable={false} style={styles.input} placeholder="Text" placeholderTextColor="lightgray" />
        </View>
        <View>
          <Text style={styles.text}>Another text label</Text>
          <TextInput
            editable={false}
            style={styles.input}
            placeholder="Another text"
            placeholderTextColor="lightgray"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  view: {
    flex: 1,
    backgroundColor: "rgb(239,239,244)",
    margin: "8pt",
    paddingHorizontal: "5pt",
    paddingTop: "10pt",
    gap: "15pt",
  },
  input: {
    width: "100%",
    padding: "4pt",
    border: "1pt",
    borderRadius: "8pt",
    backgroundColor: "white",
    fontSize: "14pt",
  },
  text: {
    fontSize: "16pt",
    marginBottom: "5pt",
  },
});
