import { NativeBaseProvider } from "native-base";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import GamePage from "./src/GamePage";

const App = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GamePage />
      </View>
    </NativeBaseProvider>
  );
};

export default App;
