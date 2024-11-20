import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homeScreen from "./src/screens/homeScreen";
import coursesScreen from "./src/screens/coursesScreen.js";
import coursesInformation from "./src/screens/coursesInformationScreen.js";
import CounterScreen from "./src/screens/CounterScreen.js";
import BoxScreen from "./src/screens/BoxScreen.js";
import ColorChangeScreen from "./src/screens/ColorChangeScreen.js";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ana Sayfa">
        <Stack.Screen name="Ana Sayfa" component={homeScreen} />
        <Stack.Screen name="Kurslarim" component={coursesScreen} />
        <Stack.Screen name="Kurs Bilgilerim" component={coursesInformation} />
        <Stack.Screen name="Sayac Uygulamasi" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulamasi" component={BoxScreen} />
        <Stack.Screen name="Renk Degistir" component={ColorChangeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
