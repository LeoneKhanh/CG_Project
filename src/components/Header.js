import React, { Component } from 'react';
import {
  Text,
  View, TouchableOpacity
} from 'react-native';

export default class CustomesDrawMenu extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('DrawerToggle');}}
        ><Text>Open Draw</Text></TouchableOpacity>
      </View>
    );
  }
}