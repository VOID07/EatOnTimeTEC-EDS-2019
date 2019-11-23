import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import loginScreen from '../src/screens/auth/loginScreen';
import OrderScreen from '../src/screens/main/orderScreen';
import AssignScreen from '../src/screens/main/assignScreen';
import OptionScreen from '../src/screens/main/optionScreen';


export default class AppView extends React.Component {
    render(){
        return <AppContainer />;
    }
}

const MainNavigator = createBottomTabNavigator(
    {
        Order: OrderScreen,
        Assign: AssignScreen,
        Option: OptionScreen
    },
    {initialRoutName: 'Order'}
);

const AuthNavigator = createStackNavigator(
    {
        Login: loginScreen
    },
    {initialRoutName: 'Login'}
);

const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigator,
        Main: MainNavigator
    },
    {initialRoutName: 'Auth'}
)

const AppContainer = createAppContainer(AppNavigator);