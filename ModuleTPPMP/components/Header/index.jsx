import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({
  children,
  title,
  handleEdit,
  isEditable,
  handleAddOpen,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.editContainer}>
        <TouchableWithoutFeedback onPress={handleEdit}>
          <Text style={styles.text}>{isEditable ? "Done" : "Edit"}</Text>
        </TouchableWithoutFeedback>
        <Icon
          name="ios-add"
          color={"orange"}
          size={28}
          onClick={() => handleAddOpen && handleAddOpen()}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingRight: 10,
    gap: 15,
  },
  text: {
    color: "orange",
    fontSize: 18,
  },
  editContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },
});
