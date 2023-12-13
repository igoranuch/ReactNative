import React, { useEffect, useRef, useState } from "react";
import { View, PanResponder } from "react-native";
import { clearSelection } from "../utils/unselect";

export const DraggableComponent = ({ getPosition, containerSize }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const squareRef = useRef();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      clearSelection();
      const newPosition = {
        x: position.x + gesture.dx,
        y: position.y + gesture.dy,
      };

      if (
        newPosition.x >= 0 &&
        newPosition.x + 100 <= containerSize.width &&
        newPosition.y >= 0 &&
        newPosition.y + 100 <= containerSize.height
      ) {
        setPosition(newPosition);
      }
    },
  });

  useEffect(() => {
    const elementInfo = squareRef.current.getBoundingClientRect();
    getPosition({ position, elementInfo });
  }, [position, getPosition]);

  return (
    <View
      ref={squareRef}
      style={{
        width: 150,
        height: 150,
        backgroundColor: "yellow",
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
      {...panResponder.panHandlers}
    />
  );
};
