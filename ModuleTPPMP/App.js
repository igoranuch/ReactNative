import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorldClockTab from "./tabs/WorldClockTab";
import AlarmTab from "./tabs/AlarmTab";
import StopwatchTab from "./tabs/StopwatchTab";
import TimerTab from "./tabs/TimerTab";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, _, size }) => {
            let icon;

            switch (route.name) {
              case "WorldClock":
                icon = "globe-outline";
                break;
              case "Alarm":
                icon = "alarm";
                break;
              case "Stopwatch":
                icon = "stopwatch";
                break;
              case "Timer":
                icon = "timer";
                break;
            }

            return (
              <Icon
                name={icon}
                color={focused ? "orange" : "lightgray"}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "lightgray",
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="WorldClock" component={WorldClockTab} />
        <Tab.Screen name="Alarm" component={AlarmTab} />
        <Tab.Screen name="Stopwatch" component={StopwatchTab} />
        <Tab.Screen name="Timer" component={TimerTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
