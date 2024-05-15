import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const hasUnsavedChanges = Boolean(name || message);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (!hasUnsavedChanges) {
          return;
        }

        e.preventDefault();

        Alert.alert(
          "Discard changes?",
          "You have unsaved changes. Are you sure to discard them and leave the screen?",
          [
            { text: "Tetap di sini", style: "cancel", onPress: () => {} },
            {
              text: "Lanjutkan pergi",
              style: "destructive",
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nama Anda"
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Pesan"
        style={styles.textInput}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
export default Contact;
