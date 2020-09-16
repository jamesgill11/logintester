import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import SwitchNavigator from "./navigation/SwitchNavigator";
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
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
