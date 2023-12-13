import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Task1 from "./pages/Task1";
import Task2_main from "./pages/Task2_main";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Task1" component={Task1} />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "rgb(90, 70, 147)",
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTitleAlign: "center",
          }}
          name="Task2_main"
          component={Task2_main}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "rgb(90, 70, 147)",
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
          name="Task2"
          component={Task2}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "rgb(90, 70, 147)",
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
          name="Task3"
          component={Task3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
