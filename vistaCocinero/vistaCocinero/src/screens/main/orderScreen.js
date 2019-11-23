import firebase from 'firebase';
import "@firebase/firestore";

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const DATA = [
    {"idOrden":123, "time":"13:33:03"},
    {"idOrden":456, "time":"13:43:03"},
    {"idOrden":789, "time":"13:53:03"}
];

export default class OrderScreen extends React.Component{
    constructor(props){
        super(props);
        this.DATA= {
            tableHead: ['idOrden', 'time', 'Assign'],
            tableData: convert2format(DATA)
        }
    }

    render() {
        const DATA = this.DATA;
        const element = (data, index) =>(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Assign', {idOrden:convert2format(DATA)[index][0]})}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Sin Asignar</Text>

                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Table borderStyle={{borderColor: 'transparent'}}>
                <Row data={DATA.tableHead} style={styles.head} textStyle={styles.text}/>
                {
                    DATA.tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={styles.row}>
                        {
                        rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                        ))
                        }
                    </TableWrapper>
                    ))
                }
                </Table>
            </View>
        )
    }


}

OrderScreen.navigationOptions = {
  title: 'Order',
};

function convert2format(info){
    var x = new Array(3);
    for (var i = 0; i < DATA.length; i++) {
        x[i] = new Array(3);
    }

    for (i=0 ; i< DATA.length ; i++){
        x[i][0] = DATA[i].idOrden;
        x[i][1] = DATA[i].time;
        x[i][2] = 0;
    }
    return x
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 50, backgroundColor: '#F2CF9D' },
    text: { margin: 15 },
    row: { flexDirection: 'row', backgroundColor: '#6090F0' },
    btn: { width: 100, height: 25, backgroundColor: '#BD7439',  borderRadius: 1 },
    btnText: { textAlign: 'center', color: '#fff' }
  });