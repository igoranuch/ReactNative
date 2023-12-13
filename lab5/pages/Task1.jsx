import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

export default function Task1() {
  const [toggle, setToggle] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const onChange = () => {
      const { width, height } = Dimensions.get("window");
      setIsPortrait(width < height);
    };

    Dimensions.addEventListener("change", onChange);
    return () => Dimensions.removeEventListener("change", onChange);
  }, []);

  return (
    <View style={styles.view}>
      <View style={{ ...styles.viewWithImage, height: isPortrait ? "300pt" : "150pt" }}>
        <Image
          style={styles.image}
          source={toggle ? require("../assets/task1/messi.jpg") : require("../assets/task1/source.jpg")}
        ></Image>
      </View>
      <Text style={styles.text}>Lab5 Task 1</Text>
      {isPortrait && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (toggle) {
              setToggle(false);
            } else {
              setToggle(true);
            }
          }}
        >
          <Text style={styles.text}>{toggle ? "Messi" : "Depp"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(236,255,228)",
    paddingHorizontal: "8pt",
    height: "100%",
  },
  viewWithImage: {
    width: "100%",
    marginBottom: "20pt",
  },
  image: {
    width: "100%",
    height: "100% ",
  },
  text: {
    fontFamily: "System",
    fontSize: "20pt",
    color: "rgb(45, 68, 115)",
  },
  button: {
    backgroundColor: "white",
    padding: "4pt",
    borderRadius: "8pt",
    borderWidth: "1pt",
    borderColor: "rgb(45, 68, 115)",
    position: "absolute",
    bottom: "20pt",
  },
});
