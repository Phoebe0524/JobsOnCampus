import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import Button from "./app/components/Button";
import LoginScreen from "./app/screens/LoginScreen(not use)";
import MainScreen from "./app/screens/MainScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";

export default function App() {
  return <ListingDetailScreen />;
}
