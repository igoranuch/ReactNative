import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Switch } from "react-native";

export default function AlarmCard({ value, isEnabled }) {
  const [isAlarmEnabled, setAlarmEnabled] = useState(isEnabled);

  const toggleSwitch = () => setAlarmEnabled((previousState) => !previousState);

  return (
    <View style={styles.changeBlock}>
      <View style={styles.infoBlock}>
        <Text
          style={{
            ...styles.timeText,
            ...(isAlarmEnabled ? styles.enabledAlarm : styles.disabledAlarm),
          }}
        >
          {value}
        </Text>
        <Text
          style={{
            ...styles.infoText,
            ...(isAlarmEnabled ? styles.enabledAlarm : styles.disabledAlarm),
          }}
        >
          Alarm
        </Text>
      </View>
      <Switch value={isAlarmEnabled} onValueChange={toggleSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  changeBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: "1px",
    borderBottomColor: "rgba(211, 211, 211, 0.15)",
    width: "100%",
    paddingBottom: 10,
    paddingRight: 15,
  },
  infoBlock: {
    display: "flex",
    justifyContent: "center",
  },
  timeText: {
    fontSize: "45pt",
    fontWeight: "100",
  },
  infoText: {
    fontSize: 16,
  },

  enabledAlarm: {
    color: "white",
  },

  disabledAlarm: { color: "rgba(255, 255, 255, 0.5)" },
});
