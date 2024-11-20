import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function homeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarim"
        onPress={() => navigation.navigate("Kurslarim")}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate("Kurs Bilgilerim")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
