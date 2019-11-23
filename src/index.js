import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import RegisterCredentialScreen from "./screens/auth/RegisterCredentialsScreen";

import HomeScreen from "./screens/main/HomeScreen";
import CartScreen from "./screens/main/CartScreen";
import StatisticsScreen from "./screens/main/StatisticsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import ComprarPlato from "./screens/compra/comprarPlato";
import comprarPlato from "./screens/compra/comprarPlato";

export default class AppView extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Cart: CartScreen,
    Stats: StatisticsScreen,
    Profile: ProfileScreen
  },
  { initialRouteName: "Home" }
);

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Credentials: RegisterCredentialScreen
  },
  { initialRouteName: "Login" }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator,
    Compra: comprarPlato
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(AppNavigator);
