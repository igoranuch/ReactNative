import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import moment from "moment";

const TableItem = ({ number, interval }) => {
  const duration = moment.duration(interval);

  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>{number}</Text>
      <Text style={styles.lapText}>
        {moment(duration.asMilliseconds()).format("mm:ss:SS")}
      </Text>
    </View>
  );
};

export default TableItem;

const styles = StyleSheet.create({
  lapText: { color: "#FFFFFF", fontSize: 18 },
  lap: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#151515",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});
