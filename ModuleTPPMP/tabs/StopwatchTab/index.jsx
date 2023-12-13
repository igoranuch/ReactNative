import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Button from "../../components/Button";
import Table from "../../components/Table";

const StopwatchTab = () => {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isStarted) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isStarted]);

  const handleStartStop = () => {
    if (isStarted) {
      setIsStarted(false);
      const elapsed = time - startTime;
      setLaps((prevState) => [...prevState, elapsed]);
    } else {
      setStartTime(time);
      setIsStarted(true);
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsStarted(false);
    setStartTime(0);
    setLaps([]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / (60 * 1000))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds},${milliseconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(time)}</Text>
      <View style={styles.buttonsRow}>
        <Button
          title="Reset"
          color="#97979F"
          background="#3d3d3d"
          onPress={handleReset}
        />
        <Button
          title={isStarted ? "Stop" : "Start"}
          color={isStarted ? "red" : "#50d167"}
          background={isStarted ? "#530000" : "#1b361f"}
          onPress={handleStartStop}
        />
      </View>
      <Table laps={laps} />
    </View>
  );
};

export default StopwatchTab;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    paddingTop: 150,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  timer: {
    color: "#FFFF",
    fontSize: 80,
    fontWeight: "normal",
  },
  buttonsRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingTop: 100,
    paddingBottom: 15,
    borderColor: "#151515",
  },
});
