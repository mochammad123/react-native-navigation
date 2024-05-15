import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ProgateService from "./progateService";
import HomeIcon from "../../assets/bottomTabIcons/home.png";
import ProgateIcon from "../../assets/bottomTabIcons/code.png";
import ProgateEvent from "./progateEvent";

const Tab = createBottomTabNavigator();

const Progate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Progate Service"
        component={ProgateService}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Image source={HomeIcon} style={styles.homeIcon} />,
        }}
      />
      <Tab.Screen
        name="Progate Event"
        component={ProgateEvent}
        options={{
          tabBarLabel: "Progate",
          tabBarIcon: () => (
            <Image source={ProgateIcon} style={styles.ProgateIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 20,
    height: 20,
  },
  ProgateIcon: {
    width: 20,
    height: 20,
  },
});

export default Progate;
