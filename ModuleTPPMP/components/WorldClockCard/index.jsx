import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function WorldClockCard({ item, isEditable, handleRemove }) {
  const { city } = item;

  return (
    <View style={styles.main}>
      <View style={styles.wrap}>
        {isEditable && (
          <TouchableWithoutFeedback onPress={() => handleRemove(item)}>
            <View style={styles.iconWrap}>
              <Icon name="trash-outline" color="red" size={24} />
            </View>
          </TouchableWithoutFeedback>
        )}
        <View style={styles.infoBlock}>
          <Text style={styles.diffText}>Today -1HR</Text>
          <Text style={styles.infoBlockText}>{city}</Text>
        </View>
      </View>
      <View>{!isEditable && <Text style={styles.timeText}>10:20</Text>}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingRight: 15,
    paddingVertical: 10,
  },
  infoBlock: {
    display: "flex",
    justifyContent: "center",
  },
  infoBlockText: {
    fontSize: 34,
    color: "white",
  },
  timeText: {
    fontSize: 68,
    color: "white",
  },
  diffText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.4)",
  },
  iconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 12,
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
});
