import {StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import Colors from '../colors/Color';

export default StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: '#3498db'
    },
    Header: {
        backgroundColor: Colors.HeaderColor,
    },
    ItemSearch: {
        width: width * 0.7, height: height * 0.05, marginTop: 10, borderRadius: 10, backgroundColor: Colors.BackgroundInputColor
    },
    ButtonSearch: {
        backgroundColor: Colors.BackgroundInputColor, height: height * 0.05, borderRadius: 10, width: width * 0.25, marginLeft: 7
    },
    TextCenter: {
        color: Colors.TextHandle, alignItems: 'center'
    },
    LogoContainer: {
        alignItems:'center', flexGrow:2, justifyContent: 'center'
    },
    Logo: {
        width:200 , height:100
    },
    LoginForm:
    {
        padding:20
    },
    LoginInput:
    {
        height: 40,backgroundColor: 'rgba(255,255,255,0.2)', marginBottom:10, color:'#FFF', paddingHorizontal:10, borderRadius:25

    },
    ButtonLogin:
    {
        backgroundColor: '#2980b9', padding:15,borderRadius:25
    },
    ButtonLoginText:{
        textAlign:'center', color:'#FFFFFF', fontWeight:'700', fontSize:17
    },
    SignUpTextContain:
    {
        alignItems:'center', justifyContent:'center', flexGrow:1, marginVertical:16, flexDirection:'row'
    },
    SignUpText:
    {
        color:'rgba(255,255,255,0.7)',
        fontSize:15
    },
    MenuIcon:
    {
        flex:1, width:60, height:10,
    },
    DrawerImage:
    {
        height:150,
        width:150,
        borderRadius:75
    }

});