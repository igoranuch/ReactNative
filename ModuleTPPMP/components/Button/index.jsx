import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Button = ({ title, color, background, onPress }) => {
  return (
    <View style={[styles.button, { backgroundColor: background }]}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, { color }]} onPress={onPress}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
