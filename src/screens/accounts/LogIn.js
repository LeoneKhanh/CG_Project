import React, { Component } from 'react';
import {
  Text,
  View, Image, TextInput,TouchableOpacity,KeyboardAvoidingView,StatusBar
} from 'react-native';
import Styles from '../../stylesheets/StyleSheet';
//import {Action} from 'react-native-router-flux';


export default class LogIn extends Component {
  signup(){
    Action.signup()
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={Styles.Container}>
        <View style={Styles.LogoContainer}>
          <Image style={Styles.Logo} 
          source={require('../../images/logojobs.png')}>
          </Image>
          <Text>Welcome to App Find Job Intelligent</Text>
        </View>
        <View  style={Styles.LoginForm}>
        <StatusBar
          barStyle='light-content' 
        />
        <TextInput
          placeholder='Username or Email'
          placeholderTextColor='rgba(255,255,255,0.7)'
          underlineColorAndroid='rgba(0,0,0,0)'
          returnKeyType='next'
          onSubmitEditing={(input)=>this.passwordInput.focus()} //nhấn next trên phím là chuyển xuống password
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          style={Styles.LoginInput}
        />
        <TextInput 
          placeholder='Password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          underlineColorAndroid='rgba(0,0,0,0)'
          returnKeyType='go'
          secureTextEntry
          style={Styles.LoginInput}
          ref={(input)=>this.passwordInput=input}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreenRouter')} style={Styles.ButtonLogin}>
            <Text style={Styles.ButtonLoginText} >Login</Text>
        </TouchableOpacity>
        <View style={Styles.SignUpTextContain}> 
          <Text>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}><Text style={Styles.SignUpText}> SignUp</Text></TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingView>
    );
}
}