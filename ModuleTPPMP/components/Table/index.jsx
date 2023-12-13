import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import TableItem from "../TableItem";

const Table = ({ laps }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {laps &&
        laps.map((lap, index) => (
          <TableItem number={index + 1} key={index} interval={lap}></TableItem>
        ))}
    </ScrollView>
  );
};

export default Table;

const styles = StyleSheet.create({ scrollView: { alignSelf: "stretch" } });
