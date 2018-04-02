import React, { Component } from 'react';
import {
  Text,
  View, Image, TouchableOpacity, TextInput, StyleSheet, PixelRatio,AppRegistry, Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import RadioButton from 'radio-button-react-native';
//import Styles from '../../stylesheets.StyleSheet';
import ImagePicker from 'react-native-image-picker';
import Color from '../../colors/Color';
// const DropDown = require('react-native-dropdown');
// const {
//   Select,
//   Option,
//   OptionList,
//   updatePosition
// } = DropDown;
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
  Body
} from "native-base";


export default class InformationsPerson extends Component {
  //image
  state={
    ImageSource: null,
    date: '',
    value: 0,
    PickerValue:'',
  };

  handleOnPress(value){
    this.setState({value:value})
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({

          ImageSource: source

        });
      }
    });
  }


  render() {
    return (
      <Container>
      <View style={styles.container}>
      <View style={styles.containerbox1}>
          <TouchableOpacity  onPress={this.selectPhotoTapped.bind(this)}>
 
            <View style={styles.ImageContainer}>
 
            { this.state.ImageSource === null ? <Text>Profile</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
            </View>
          </TouchableOpacity>
          <View style={styles.TextInputContainer}>
            <View  style={styles.TextInputName}>
                <Text >Họ và Tên:</Text><TextInput placeholder='Họ Và Tên' underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#311B92' style={styles.TextInputStyle} />
            </View>
            <View style={styles.TextInputName}>
              <Text>Ngày Sinh:</Text>
              <DatePicker 
                date={this.state.date}
                mode="date"
                onDateChange={(date) => {this.setState({date: date})}}
                style={styles.DateTimePicker}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerbox2}>
          <View style={styles.Sex}>
                <Text>Giới Tính:</Text>
                <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                <Text>Nữ</Text>
                </RadioButton>
                <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                <Text>Nam</Text>
                </RadioButton>
              </View>
          </View>
          <View>
              <Picker style={{margin:10, width:40}}
                selectedValue={this.state.PickerValue}
                OnValueChange={(itemValue, itemIndex)=>this.setState({PickerValue: itemValue})}>
                  <Picker.Item label="Select a Option" value="" />
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
              </Picker>
          </View>
        </View>
        </Container>
    );
  }
}









const styles = StyleSheet.create({
 
  container: {// style photo upload
    flex: 1,
  },
  containerbox1:{
      backgroundColor:'#3498db',
      flexDirection: 'row',
  },
  containerbox2:{
    backgroundColor:'#3498db',
    flex:1
},
  ImageContainer: {
    borderRadius: 10,
    width: 100,
    height: 100,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1744',
    margin:10,
  },

  TextInputContainer:
  {
    flexDirection:'column',
  },
  TextInputName:
  {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

  },
  TextInputStyle:
  {
    width: 150,
    height:40,
    backgroundColor: '#CFD8DC',
    textAlign:'center',
    margin:10,
    alignItems:'center',
  },
  DateTimePicker:
  {
    height: 40,
    width: 150,
    backgroundColor: '#CFD8DC',
    margin: 10
  },
  Sex:
  {
    flexDirection:'row',
    margin:10
  }

});
AppRegistry.registerComponent('ImagePickerProject', () => ImagePickerProject);