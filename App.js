
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from "./src/Screens/CartScreen";
import ContactScreen from "./src/Screens/ContactScreen";
import HomeScreen from "./src/Screens/HomeScreen";


const Stack = createNativeStackNavigator();

export default function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitle: "",
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitle: "Title",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen component={HomeScreen} name="Home" options={{ title: "Home" }} />
        <Stack.Screen component={CartScreen} name="Cart" options={{ title: "Cart" }} />
        <Stack.Screen component={ContactScreen} name="Contact" options={{ title: "Contact Us" }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

