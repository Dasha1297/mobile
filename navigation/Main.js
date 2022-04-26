import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import Lists from "../screens/Todos";
import MapBlock from "../screens/MapBlock";
import Notes from "../screens/Notes";
import { LogBox, StyleSheet, View } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { height: 80, backgroundColor: "#ADD8E6" },
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Map") {
              iconName = "map-o";
            } else if (route.name === "API") {
              iconName = "address-book";
            } else if (route.name === "CRUD") {
              iconName = "commenting-o";
            }
            return (
              <View style={[styles.tab, focused ? styles.tabFocused : null]}>
                <IconFontAwesome name={iconName} color={"#000000"} size={20} />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name='Map' component={MapBlock} />
        <Tab.Screen name='API' component={Lists} />
        <Tab.Screen name='CRUD' component={Notes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tab: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 50,
    backgroundColor: "white",
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabFocused: {
    borderColor: "#000000",
    borderWidth: 1,
  },
});
