import React, { Component} from 'react';
import { StyleSheet, Text, View, Platform , SafeAreaView, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import Divider from 'react-native-divider';

const DATA = [{
    "idPlato":988,
    "Nombre": "Patacones",
    "observaciones": "",
},
{
    "idPlato":978,
    "Nombre": "Chopsuey",
    "observaciones": "Sin chopsuey",
}]

export default class AssignScreen extends React.Component{

    Item({ Nombre}) {
        return (
          <View style={styles.item}>
            <Text style={styles.title}>{Nombre}</Text>
          </View>
        );
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={DATA}
                renderItem={({ item }) => 
                <View style={styles.container}>
                    <Text style={styles.words}>{item.Nombre}</Text>
                    <Text style={styles.words}>{item.observaciones}</Text>
                    <Divider></Divider>
                        
        


                </View>
                }
                keyExtractor={item => item.idPlato}
              />
                <Button
                title = "Finalizar"
                onPress={()=> alert("Pedido Finalizado")}
                />
            </SafeAreaView>


          );
 
    // render() {
    //     const { navigation } = this.props;
    //     return (
    //         <View style={styles.result}>
    //             <Text>
    //                 {JSON.stringify(navigation.getParam('idOrden','NO-ID'))}
    //             </Text>
    //         </View>
            
    //     )
    // }
    }

}

AssignScreen.navigationOptions = {
  title: 'Assign',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    //   padding: 20,
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    },
    words: {
        fontSize : 20,
        textAlign: "center",
        
    }
  });
