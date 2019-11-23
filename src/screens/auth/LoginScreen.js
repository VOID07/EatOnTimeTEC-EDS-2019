import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions,
  TouchableHighlight,
  Platform
} from "react-native";

import Logo from "../../../assets/LogoXTEC.jpg";

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      loginCredentials: {
        email: "",
        pass: ""
      }
    };
  }

  emailCredentials = email => {
    this.setState({ loginCredentials: { email } });
  };
  _updatePassCredentials = pass => {
    this.setState({ loginCredentials: { pass } });
  };

  static navigationOptions = {
    title: "Login" + `${Platform.OS === "ios" ? "" : "\r"}`,
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  login = (
    user = this.state.loginCredentials.email,
    pass = this.state.loginCredentials.pass
  ) => {
    if (user && pass) {
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <TextInput
          style={styles.textField}
          onChangeText={text => {
            this.emailCredentials(text);
          }}
          allowFontScaling={true}
          placeholder={"Usuario del LAIMI\r"}
          clearButtonMode={"always"}
          onFocus={() => {
            this.setState({
              border: "green"
            });
          }}
          onBlur={() => {
            this.setState({
              border: "#ededed"
            });
          }}
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => {
            this._updatePassCredentials(text);
          }}
          placeholder={"Contraseña del LAIMI\r"}
        />
        <View
          style={{
            backgroundColor: "#eeeeee",
            borderRadius: 5,
            alignSelf: "center",
            margin: 30
          }}
        >
          <Button
            style={styles.acceptButton}
            title={"Iniciar sesión" + `${Platform.OS === "ios" ? "" : "\r"}`}
            onPress={(user, password) => this.props.navigation.navigate("Main")}
          />
        </View>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text style={styles.info}>
            {" "}
            ¿No tienes cuenta?{" "}
            <Text style={{ color: "#0000FF" }}>Registrar</Text>
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "stretch",
    backgroundColor: "#FFFFFF",
    flexDirection: "column"
  },
  textField: {
    alignSelf: "stretch",
    borderBottomWidth: 0.25,
    fontSize: 20,
    height: "7.5%",
    paddingHorizontal: 20,
    margin: 5

    //backgroundColor: '#666666'
  },
  acceptButton: {
    borderColor: "gray",
    backgroundColor: "#666666",
    fontSize: 20,
    color: "#FFFFFF"
  },
  info: {
    paddingTop:
      Dimensions.get("window").width < Dimensions.get("window").height
        ? 50
        : 10,
    paddingBottom: 15,
    fontSize: 15
  },
  logo: {
    width: "75%",
    resizeMode: "contain",
    margin: 20
  }
});
