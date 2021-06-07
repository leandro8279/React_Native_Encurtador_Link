import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./page/Home";
import MyLinks from "./page/MyLinks";
const Drawer = createDrawerNavigator();
export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#2CCBB9",
        activeTintColor: "#fff",
        marginTop: 16,
        labelStyle: {
          fontSize: 20,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: "Meus Links",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
