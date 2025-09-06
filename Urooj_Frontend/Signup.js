import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo4.png")}
        style={{ width: 200, height: 200, marginBottom: 10, marginTop: 5 }}
        resizeMode="contain"
      />

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name here"
        placeholderTextColor="#a9a9a9"
      />

      <Text style={styles.label}>Username/Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Username must be 6-8 characters"
        placeholderTextColor="#a9a9a9"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password here"
        placeholderTextColor="#a9a9a9"
        secureTextEntry
      />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.horizontalLine} />

      <View style={styles.socialRow}>
        <FontAwesome name="envelope" size={30} color="#b98d7b" style={styles.icon} />
        <FontAwesome name="facebook" size={30} color="#b98d7b" style={styles.icon} />
        <FontAwesome name="instagram" size={32} color="#b98d7b" style={styles.icon} />
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.loginRow}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "500",
    color: "#b98d7b",
    marginBottom: 20,
    letterSpacing: 2,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 40,
    color: "#8d766dff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#eee9e9",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    alignSelf: "center",
  },
  signupButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#b98d7b",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    gap: 30,
  },
  icon: {
    marginHorizontal: 10,
  },
  horizontalLine: {
    width: "80%",
    height: 1,
    backgroundColor: "#a9a9a9",
    marginVertical: 8,
    alignSelf: "center",
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#333",
    fontSize: 14,
  },
  loginLink: {
    color: "#b98d7b",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});