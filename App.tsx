import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Linking.makeUrl('/') should be blank:{" "}
        {Linking.makeUrl("/") === "" ? "✅" : "🚫"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
