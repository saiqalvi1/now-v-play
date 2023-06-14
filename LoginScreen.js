import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleButtonPress = () => {
    console.log("Button pressed");
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.logo} />
      <Text style={styles.login}>Login</Text>
      <Text style={styles.rock}>Login now and let’s rock together!</Text>
      <TextInput
        style={styles.email}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.email}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Enter Password"
      />
      <View style={styles.toggler}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.remember}>Remember Me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
      <Text style={styles.register}>Don’t have an account? Register now</Text>
      <Text style={styles.forgot}>Forgot Your Password?</Text>
      <Text style={styles.loginUsing}>Login using</Text>
      <View style={styles.images}>
        <Image source={require("./assets/Google.png")} style={styles.google} />
        <Image source={require("./assets/Facebook.png")} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  logo: {
    marginBottom: 20,
  },
  login: {
    fontSize: 30,
    color: "#006778",
  },
  rock: {
    fontWeight: 500,
    fontSize: 15,
    marginTop: 20,
  },
  email: {
    width: 375,
    height: 55,
    borderWidth: 1,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  toggle: {
    marginRight: 350,
    marginTop: 10,
  },
  toggler: {
    flexDirection: "row",
    marginRight: 250,
  },
  remember: {
    color: "#777676",
    marginTop: 14,
    fontSize: 14,
  },
  button: {
    width: 378,
    height: 60,
    backgroundColor: "#006778",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    top: 6,
    textAlign: "center",
  },
  register: {
    fontSize: 15,
    marginTop: 10,
  },
  forgot: {
    fontSize: 15,
    color: "#006778",
    marginTop: 10,
  },
  loginUsing: {
    fontWeight: 500,
    fontSize: 16,
    marginTop: 40,
  },
  images: { flexDirection: "row", marginTop: 15 },
});
export default LoginScreen;
