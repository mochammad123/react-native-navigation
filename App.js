import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Pergi ke Progate"
        onPress={() =>
          navigation.navigate("Progate", {
            name: "Kang Tae Moo",
            languange: "React Native",
          })
        }
      />
    </View>
  );
};

const ProgateScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate, {route.params.name}!</Text>
      <Text>Ayo belajar, {route.params.languange}!</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Progate" component={ProgateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
