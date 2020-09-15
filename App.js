import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";

export default function App(props) {
  return (
    <View style={styles.container}>
      <Login nav={props.navigation} />
      {/* <Login /> */}
      {/* <Profile /> */}
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
