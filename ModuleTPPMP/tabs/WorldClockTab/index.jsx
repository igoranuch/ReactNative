import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import WorldClockCard from "../../components/WorldClockCard";
import { citiesArray } from "../../mockData/citiesArray";
import WCModal from "../../components/WCModal";

export default function WorldClockTab() {
  const [selectedCities, setSelectedCities] = useState([
    citiesArray[0],
    citiesArray[3],
    citiesArray[1],
  ]);
  const [WCModalOpen, setWCModalOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);

  const handleAdd = (selectedCity) => {
    !selectedCities.includes(selectedCity) &&
      setSelectedCities([...selectedCities, selectedCity]);
  };

  const handleRemove = (selectedCity) => {
    setSelectedCities(
      selectedCities.filter(({ city }) => selectedCity.city !== city)
    );
  };

  return (
    <View style={styles.main}>
      <Header
        title={"World Clock"}
        isEditable={isEditable}
        handleAddOpen={() => setWCModalOpen(!WCModalOpen)}
        handleEdit={() => setEditable(!isEditable)}
      ></Header>
      <View style={styles.timeSection}>
        {selectedCities &&
          selectedCities.map((item, index) => (
            <WorldClockCard
              key={index}
              item={item}
              isEditable={isEditable}
              handleRemove={handleRemove}
            />
          ))}
      </View>
      <WCModal
        visible={WCModalOpen}
        onRequestClose={() => setWCModalOpen(false)}
        handleAdd={handleAdd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: "100%",
    paddingLeft: 15,
    overflow: "scroll",
  },
  timeSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});
