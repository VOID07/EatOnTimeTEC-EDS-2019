import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import compra from "../main/HomeScreen";

export default class comprarPlato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isDataFetched: false
    };
  }

  componentDidMount() {
    this.setState({ data: compra, isDataFetched: true });
  }
  render() {
    if (!this.state.isDataFetched) {
      return <View></View>;
    }
    return (
      <View>
        <Image
          style={{ Width: 100 }}
          resizeMode="contain"
          source={this.state.data.fotoComida}
        />
      </View>
    );
  }
}
