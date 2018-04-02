import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, Image
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  H1,
  H2,
  H3,
  Left,
  Right,
  Body,
  Card,
  CardItem
} from "native-base";

export default class ProfileUser extends Component {
  // static navigationOptions={
  //   drawerIcon:(
  //     <Image source={require('../../images/')}></Image>
  //   )
  // }
  
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left><Icon name='ios-menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')}/></Left>
          <Body><Title>Cài Đặt Tài Khoản</Title></Body>
        </Header>
        <Content contentContainerStyle={{flex:1}}>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});