import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  name: string;
}

interface State {
  isFavorite: boolean;
}

export default class RestaurantItem extends Component<Props, State> {
  state = {
    isFavorite: false
  };

  setFavorite = () => {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.setFavorite}>
        <View style={style.container}>
          <Text>{this.props.name}</Text>
          {this.state.isFavorite == true && <Text>Favorite</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 70,
    borderWidth: 1,
    marginTop: 10,
    padding: 8
  }
});
