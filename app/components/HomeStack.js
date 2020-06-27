import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation/stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
