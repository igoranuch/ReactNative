import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import AlarmCard from "../../components/AlarmCard";
import { alarmsArray } from "../../mockData/alarmsArray";

export default function AlarmTab() {
  return (
    <View style={styles.main}>
      <Header title={"Alarm"}>
        <View style={styles.sleewWakeUpContainer}>
          <Icon name={"ios-bed"} color={"white"} size={24} />
          <Text style={styles.sleewWakeUpText}>Sleep | Wake Up</Text>
        </View>
      </Header>
      <View style={styles.changeBlock}>
        <View style={styles.infoBlock}>
          <Text style={styles.timeText}>13:00</Text>
          <Text style={styles.infoText}>Tomorrow Morning</Text>
        </View>
        <TouchableOpacity style={styles.buttonBody}>
          <Text style={styles.buttonText}>CHANGE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherContainer}>
        <Text style={styles.other}>Other</Text>
      </View>
      <ScrollView>
        {alarmsArray &&
          alarmsArray.map((item, index) => (
            <AlarmCard
              key={index}
              value={item.value}
              isEnabled={item.isEnabled}
            ></AlarmCard>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: "100%",
    paddingLeft: 15,
  },
  sleewWakeUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  sleewWakeUpText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  changeBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingBottom: 10,
    paddingRight: 10,
  },
  infoBlock: {
    display: "flex",
    justifyContent: "center",
  },
  timeText: {
    fontSize: "45pt",
    color: "white",
    fontWeight: "100",
  },
  infoText: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
  },
  buttonBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(38,38,40)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: "orange",
    fontSize: 15,
  },
  other: { fontSize: 20, color: "white", fontWeight: "400" },
  otherContainer: {
    display: "flex",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingBottom: 7,
    paddingTop: 30,
  },
});
