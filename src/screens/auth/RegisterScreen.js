import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  Picker,
  TextInput,
  Platform,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import * as Facebook from "expo-facebook";

import FBConnect from "../../../assets/facebook.png";

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: "Registro" + `${Platform.OS === "ios" ? "" : "\r"}`,
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = { userType: "" };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{ resizeMode: "contain" }}
          onPress={async () => {
            try {
              const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions
              } = await Facebook.logInWithReadPermissionsAsync(
                "753064901799968",
                {
                  permissions: ["public_profile", "email"]
                }
              );
              if (type === "success") {
                // Get the user's name using Facebook's Graph API

                const response = await fetch(
                  `https://graph.facebook.com/v5.0/me?access_token=${token}`
                );
                alert(`Hi ${JSON.stringify(await response.json())}!`);
              } else {
                // type === 'cancel'
              }
            } catch ({ message }) {
              alert(`Facebook Login Error: ${message}`);
            }
          }}
        >
          <View style={styles.fbButton}>
            <Image style={styles.logo} source={FBConnect} />
            <Text style={styles.fbButton_text}>Conectar con Facebook</Text>
          </View>
        </TouchableHighlight>

        <Picker
          style={{ width: "90%", margin: 100 }}
          selectedValue={this.state.userType}
          onValueChange={userType => this.setState({ userType })}
          mode={"dialog"}
        >
          <Picker.Item label="Estudiante" value="est" />
          <Picker.Item label="Funcionario" value="func" />
        </Picker>

        <Button
          style={styles.acceptButton}
          title={"Siguiente" + `${Platform.OS === "ios" ? "" : "\r"}`}
          onPress={() =>
            this.props.navigation.navigate("Credentials", {
              userType: this.state.userType
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "column"
  },
  logo: {
    width: "10%",
    resizeMode: "contain"
    //margin: 20,
  },
  fbButton: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#3b5998",
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get("screen").width * 0.8,
    height: Dimensions.get("screen").height * 0.08,
    borderRadius: 10,
    margin: 10
  },
  fbButton_text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20
  },
  acceptButton: {
    borderColor: "gray",
    backgroundColor: "#666666",
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 100
  }
});
