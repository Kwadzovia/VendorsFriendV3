import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tabs.Screen
        name="discover"
        options={{ headerShown: false, tabBarLabel: "discover" }}
      />
      <Tabs.Screen
        name="memories"
        options={{ headerShown: false, tabBarLabel: "memories" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, tabBarLabel: "profile" }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
