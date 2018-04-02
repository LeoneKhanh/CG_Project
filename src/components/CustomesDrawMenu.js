import React, { Component } from 'react';
import {
  Text,
  View, TouchableOpacity, Image
} from 'react-native';
import { Container, Content, Icon, Header, Body } from "native-base";
import Styles from '../stylesheets/StyleSheet';
import { StackNavigator, DrawerNavigator,DrawerItems } from 'react-navigation';


export default class CustomesDrawMenu extends Component {
  render() {
    return (

      <Container>
        <Header style={{height:200, alignContent:'center'}}>
            <Body style={{justifyContent:'center',alignItems:'center'}}>
                <Image style={Styles.DrawerImage}
                source={require('../images/person.png')}
                >
                </Image>
            </Body>
        </Header>
        <Content contentContainerStyle={{justifyContent:'center', margin:40}}>
            <TouchableOpacity style={{paddingBottom:15}}
             onPress={()=>{this.props.navigation.navigate('ListJobs');}}
            ><Text style={{fontWeight:'bold', fontSize:18}}>List Job</Text></TouchableOpacity>
            <TouchableOpacity style={{paddingBottom:15}}
              onPress={()=>{this.props.navigation.navigate('InformaticonsPersons');}}
            ><Text style={{fontWeight:'bold', fontSize:18}}>Informaticons Persons</Text></TouchableOpacity>
            <TouchableOpacity style={{paddingBottom:15}}
              onPress={()=>{this.props.navigation.navigate('Interviews');}}
            ><Text style={{fontWeight:'bold', fontSize:18}}>Interviews</Text></TouchableOpacity>
            <TouchableOpacity style={{paddingBottom:15}}
              onPress={()=>{this.props.navigation.navigate('Notificationss');}}
            ><Text style={{fontWeight:'bold', fontSize:18}}>Notifications</Text></TouchableOpacity>
            <TouchableOpacity style={{paddingBottom:15}}
              onPress={()=>{this.props.navigation.navigate('SendJobs');}}
            ><Text style={{fontWeight:'bold', fontSize:20}}>Send Jobs</Text></TouchableOpacity>
            <TouchableOpacity style={{paddingBottom:15}}
              onPress={()=>{this.props.navigation.navigate('supportUsers');}}
            ><Text style={{fontWeight:'bold', fontSize:20}}>Account</Text></TouchableOpacity>
        </Content>    
      </Container>
    );
  }
}
// const CustomesDrawMenuContentComponent=(props)=>(
//   <Container>
//       <Header>
//           <Body>
//               <Image style={Styles.DrawerImage}
//               source={{uri:'../images/person.jpg'}}/>
//           </Body>
//       </Header>
//       <Content>
//           <DrawerItems {...props} />
//       </Content>    
//   </Container>
// );
