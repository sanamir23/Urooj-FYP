import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Login"; // Import your LoginScreen
import SignupScreen from "./Signup";

const Stack = createNativeStackNavigator();

// --- Splash Screen ---
function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Navigate to Login after 5s
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo4.png")}
        style={{ width: 230, height: 230, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>Where wellness meets understanding</Text>
    </View>
  );
}

// --- App Root ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee9e9ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
  },
});