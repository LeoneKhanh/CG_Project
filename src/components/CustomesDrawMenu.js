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
          onPress={()=>{this.props.navigation.navigate('ListJobs');}}
        ><Text>Open ListJobs</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('InformaticonsPersons');}}
        ><Text>Open InformaticonsPersons</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Interviews');}}
        ><Text>Open Interviews</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Notificationss');}}
        ><Text>Open Notificationss</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('SendJobs');}}
        ><Text>Open SendJobs</Text></TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('supportUsers');}}
        ><Text>Open supportUsers</Text></TouchableOpacity>
      </View>
    );
  }
}