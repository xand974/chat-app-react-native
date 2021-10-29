import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddConversationScreen from "./screens/AddConversationScreen";
const Stack = createNativeStackNavigator();
import { SafeAreaProvider } from "react-native-safe-area-context";
import { auth } from "./firebase";
import { Provider } from "react-redux";
import store from "./redux/store";

const headerOption = {
  headerStyle: { backgroundColor: "#070819" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={headerOption}
            initialRouteName="HomeScreen"
          >
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddConversationScreen"
              component={AddConversationScreen}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
