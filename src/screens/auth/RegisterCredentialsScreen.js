import React from 'react';
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
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';
export default class RegisterCredentialScreen extends React.Component {
  static navigationOptions = {
    title: 'Registro'+ `${(Platform.OS === 'ios')?'':'\r'}`,
    headerTitleStyle: {
      fontWeight: 'bold',
      width: Dimensions.get('window').width,
    },
    
  };

  state = { userType: '' };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            width: Dimensions.get('screen').width * 0.85,
          }}>
          <TextInput
            style={styles.textField}
            onChangeText={text => this.setState({ text })}
            allowFontScaling={true}
            placeholder={
              navigation.getParam('userType') === 'func' ? 'Cédula\r' : 'Carné\r'
            }
            placeholderTextColor={'#00006644'}
            clearButtonMode={'always'}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.textField}
            onChangeText={text => this.setState({ text })}
            allowFontScaling={true}
            placeholder={'Usuario TEC\r'}
            placeholderTextColor={'#00006644'}
            clearButtonMode={'always'}
            textContentType={'username'}
          />
          <TextInput
            style={styles.textField}
            onChangeText={text => this.setState({ text })}
            allowFontScaling={true}
            placeholder={'Contraseña TEC\r'}
            placeholderTextColor={'#00006644'}
            visible-password={false}
            secureTextEntry={true}
            textContentType={'password'}
          />
        </View>
        <View
          style={{
            backgroundColor: '#eeeeee',
            borderRadius: 5,
            alignSelf: 'center',
            margin: 20,
          }}>
          <Button
            style={styles.acceptButton}
            title="Registrar"
            onPress={() =>
              this.props.navigation.navigate('Home', {
                userType: this.state.userType,
              })
            }
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
    alignContent: 'center',
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
  acceptButton: {
    borderColor: 'gray',
    backgroundColor: '#666666',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
