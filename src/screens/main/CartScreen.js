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

export default class CartScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Carrito" + `${Platform.OS === "ios" ? "" : "\r"}`,
    headerTitleStyle: {
      fontWeight: "bold"
    },
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `${Platform.OS === "ios" ? "ios-cart" : "md-cart"}`;
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Carrito</Text>
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
