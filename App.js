import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import Constants from "expo-constants";

import AppView from "./src/index";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    cartElements: []
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
        <AppView />
      </View>
    );
  }

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      /*Asset.loadAsync([require("./assets/images/logo.png")]),*/
      /*Font.loadAsync({
        ...Ionicons.font,
        **/
      //Instabyte: require("./assets/fonts/Instabyte/Instabyte.ttf"),
      /*Amatic: require("./assets/fonts/Amatic-Bold.ttf")
      })*/
    ]);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
    paddingHorizontal: 10,
    paddingBottom: 10
  }
});
