import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  Image
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Perfil" + `${Platform.OS === "ios" ? "" : "\r"}`,
    headerTitleStyle: {
      fontWeight: "bold"
    },

    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `${Platform.OS === "ios" ? "ios-person" : "md-person"}`;
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text>Perfil</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
  }
});
