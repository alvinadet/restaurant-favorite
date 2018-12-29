import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component{
    render(){
        return (
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  header :{
      height :50,
      backgroundColor: "blue",
      alignItems: 'center',
      justifyContent: 'center',
      
  }
})