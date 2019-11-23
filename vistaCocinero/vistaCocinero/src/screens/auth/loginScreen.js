import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Logo from '../../../assets/loto.jpg';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      loginCredentials: {
        user: '',
        password: '',
      },
      isLoadingComplete: false,
    };
  }

  emailCredentials = email => {
    this.setState({ loginCredentials: { email } });
  };
  _updatePassCredentials = pass => {
    this.setState({ loginCredentials: { pass } });
  };

  static navigationOptions = {
    title: 'Login' + `${Platform.OS === 'ios' ? '' : '\r'}`,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        //   source={Logo}
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => {
            this.emailCredentials(text);
          }}
          allowFontScaling={true}
          placeholder={'Cédula\r'}
          clearButtonMode={'always'}
          keyboardType={'numeric'}
          textContentType={'username'}
          onFocus={() => {
            this.setState({
              border: 'green',
            });
          }}
          onBlur={() => {
            this.setState({
              border: '#ededed',
            });
          }}
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => {
            this._updatePassCredentials(text);
          }}
          textContentType={'password'}
          placeholder={'Contraseña\r'}
          visible-password={false}
          secureTextEntry={true}
        />
        <View
          style={{
            backgroundColor: '#eeeeee',
            borderRadius: 5,
            alignSelf: 'center',
            margin: 30,
          }}>
          <Button
            style={styles.acceptButton}
            title={'Iniciar sesión' + `${Platform.OS === 'ios' ? '' : '\r'}`}
            onPress={() => {
              if (!(this.state.loginCredentials.user != '' && this.state.loginCredentials.password != '')) {
                this.props.navigation.navigate('Main');
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'stretch',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  textField: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#66666666',
    fontSize: 20,
    height: '7.5%',
    paddingHorizontal: 20,
    margin: 5,

    //backgroundColor: '#666666'
  },
//   acceptButton: {
//     borderColor: 'gray',
//     backgroundColor: '#666666',
//     fontSize: 20,
//     color: '#FFFFFF',
//     placeholderTextColor: '#FFFFFF',
//   },
  info: {
    paddingTop:
      Dimensions.get('window').width < Dimensions.get('window').height
        ? 50
        : 10,
    paddingBottom: 15,
    fontSize: 15,
  },
});
