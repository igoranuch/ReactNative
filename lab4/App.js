import React, { useCallback, useRef, useState } from "react";
import { View, Text } from "react-native";
import { DraggableComponent } from "./components/DraggableComponent";
import { styles } from "./style";

function App() {
  const [position, setPosition] = useState({});
  const [elementInfo, setElementInfo] = useState({});
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef();
  const { width, height } = containerRef.current ? containerRef.current.getBoundingClientRect() : {};
  const onContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSize({ width, height });
  };
  const getPosition = useCallback(({ position, elementInfo }) => {
    setElementInfo(elementInfo);
    setPosition(position);
  }, []);

  return (
    <View style={styles.app} onLayout={onContainerLayout} ref={containerRef}>
      <Text style={styles.title}>
        x: {position.x}; y: {position.y}
      </Text>
      <Text style={styles.title}>
        width: {elementInfo.width}; height: {elementInfo.height}
      </Text>
      <Text style={styles.title}>
        container width: {width}; container height: {height}
      </Text>
      <DraggableComponent getPosition={getPosition} containerSize={containerSize} />
    </View>
  );
}

export default App;
