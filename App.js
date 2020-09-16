import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SwitchNavigator from "./navigation/SwitchNavigator";

class App extends React.Component {
  render() {
    return <SwitchNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
