import React from 'react';
import { ScrollView, StyleSheet, View, Text, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class OptionScreen extends React.Component {

    static navigationOptions = {
        title: 'Settings' + `${Platform.OS === 'ios' ? '' : '\r'}`,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style= {styles.container}>
                <Button
                    style={styles.acceptButton}
                    title={'Desconnectar' + `${Platform.OS === 'ios' ? '' : '\r'}`}
                    onPress={() => {
                        this.props.navigation.navigate('Auth')
                    }}
            /></View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 0: Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
});