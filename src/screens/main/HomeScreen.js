import React from "react";
import { Card } from "react-native-elements";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  Image,
  FlatList
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import firebase from "firebase";
import "@firebase/firestore";

import config from "../../components/config";

firebase.initializeApp(config.firebaseConfig);

firestore = firebase.firestore();

let fetchedData = [];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isDataFetched: false
    };
    global.compra = {};
  }

  static navigationOptions = {
    title: "Menú" + `${Platform.OS === "ios" ? "" : "\r"}`,
    headerTitleStyle: {
      fontWeight: "bold"
    },
    tabBarIcon: ({ focused, tintColor }) => {
      const iconName = `${Platform.OS === "ios" ? "ios-home" : "md-home"}`;
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  };
  firebase;

  updateData = () => {
    this.setState({ isDataFetched: true });
  };

  componentDidMount() {
    firestore
      .collection("fl_content")
      .where("disponible", "==", true)
      .get()
      .catch()
      .then(snapshot => {
        snapshot.forEach(document => {
          photoFile = null;
          foto = null;
          document
            .data()
            .fotoComida[0].get()
            .then(snap => {
              photoFile = snap.data().file;
              firebase
                .storage()
                .ref("flamelink/media/".concat(photoFile))
                .getDownloadURL()
                .then(link => {
                  foto = link;
                  fetchedData.push({
                    caribeno: document.data().caribeno,
                    comidaRapida: document.data().comidaRapida,
                    descripcion: document.data().descripcion,
                    disponible: document.data().disponible,
                    fotoComida: foto,
                    horneado: document.data().horneado,
                    id: document.data().id,
                    precio: document.data().precio,
                    sopa: document.data().sopa,
                    tiempoDeComida: document.data().tiempoDeComida,
                    tipico: document.data().tipico,
                    vegetariano: document.data().vegetariano
                  });
                  this.setState({ isDataFetched: true }, () => {
                    console.log(this.state.isDataFetched);
                  });
                  this.setState({ data: fetchedData });
                  console.log(fetchedData);
                });
            }); //firestore.document(document.data().fotoComida);
        });
      })
      .catch(error => {
        console.log("Error!", error);
      });
  }

  render() {
    if (!this.state.isDataFetched) {
      return (
        <View>
          <Text>Loading ...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.mealContainer}>
          <Text>Desayuno</Text>
          <View>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => {
                    compra = item;
                    this.props.navigation.navigate("Compra");
                  }}
                >
                  <Card
                    containerStyle={{
                      backgroundColor: "#21758F"
                    }}
                    image={{ uri: item.fotoComida }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "#FFFFFF"
                      }}
                    >
                      {item.descripcion}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly"
                      }}
                    >
                      <Text
                        style={{
                          color: "#FFFFFF"
                        }}
                      >
                        {" "}
                        $ {item.precio}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#FFFFFF"
                        }}
                      >
                        {item.precio}
                      </Text>
                    </View>
                  </Card>
                </TouchableHighlight>
              )}
              keyExtractor={item => item.id}
            />
          </View>
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
