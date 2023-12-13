import React from "react";
import { StyleSheet } from "react-native";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { citiesArray } from "../../mockData/citiesArray";

const WCModal = ({ visible, onRequestClose, handleAdd }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.cancelText} size={28} onClick={onRequestClose}>
            Cancel
          </Text>
          <View style={styles.modalHeader}>
            <Text style={{ ...styles.modalText, fontSize: 16 }}>
              Pick a city
            </Text>
          </View>
          {citiesArray.map((city) => (
            <TouchableOpacity
              style={styles.cityName}
              onPress={() => {
                handleAdd(city);
                onRequestClose();
              }}
              key={city.city}
            >
              <View>
                <Text style={styles.cityNameText}>{city.city}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default WCModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "black",
    backgroundColor: "rgb(20, 20, 20)",
    height: "90%",
    padding: "12px",
    borderRadius: 8,
    alignItems: "center",
  },
  modalHeader: {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    position: "relative",
  },
  cancelText: {
    position: "absolute",
    right: 12,
    top: 15,
    color: "orange",
  },
  cityName: {
    display: "flex",
    width: "100%",
    height: 36,
    border: "0px solid rgb(35, 35, 35)",
    justifyContent: "center",
    borderBottomWidth: 1.5,
    boxSizing: "border-box",
    outlineStyle: "none",
  },
  cityNameText: {
    fontSize: 14,
    color: "white",
  },
  modalText: {
    color: "white",
    paddingBottom: 15,
  },
});
