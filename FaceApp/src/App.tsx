import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./Page/Home";
import { CameraPage } from "./Page/CameraPage";
import { AnimalList } from "./Page/AnimalList";
import { Output } from "./Page/Output";
import { AnimalListProvider } from "./Store/animalListState";

/* type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
}; */

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AnimalListProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CameraPage" component={CameraPage} />
          <Stack.Screen name="AnimalList" component={AnimalList} />
          <Stack.Screen name="Output" component={Output} />
        </Stack.Navigator>
      </NavigationContainer>
    </AnimalListProvider>
  );
}
