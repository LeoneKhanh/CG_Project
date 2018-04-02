import React from 'react';
//import React, { Component } from 'react';
import {View, TouchableOpacity, Text,Image} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Styles from '../stylesheets/StyleSheet';

import LogIn from '../screens/accounts/LogIn';
import Register from '../screens/accounts/Register';
import InformationsPerson from '../screens/informationsPerson/InformaticonsPerson';
import Interview from '../screens/interview/Interview';
import ListJob from '../screens/listJob/ListJob';
import Notifications from '../screens/notifications/Notifications';
import SendJob from '../screens/sendJob/SendJob';
import ProfileUser from '../screens/supportUser/ProfileUser';
import CustomesDrawMenu from '../components/CustomesDrawMenu';



export const AccountStack = StackNavigator({
    LogIn:{
        screen: LogIn,
        navigationOptions: {
            header: null,
           
        },
    },
    Register:{
        screen:Register,
        navigationOptions:{
            header:null,
        }
    }
});

export const InformaticonsPersonStack = StackNavigator({
    InformationsPerson: {
        screen: InformationsPerson,
        navigationOptions: {
            title: 'Infomation Person',
        },
    }
});

export const InterviewStack = StackNavigator({
    Interview: {
        screen: Interview,
        navigationOptions: {
            title: 'Interview',
        },
    }
});


export const ListJobStack = StackNavigator({
    ListJob: {
        screen: ListJob,
        navigationOptions:  ({ navigation }) =>({
            title: 'List Job',
            headerLeft:(<TouchableOpacity
                onPress={()=>{navigation.navigate('DrawerOpen');}}
              ><Image style={Styles.MenuIcon} source={require('../images/menuicon.png')}></Image></TouchableOpacity>)
        }),
    }
});

export const NotificationStack = StackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            title: 'Notification',
        },
    }
});

export const SendJobStack = StackNavigator({
    SendJob: {
        screen: SendJob,
        navigationOptions: {
            title: 'Send Job',
        },
    }
});

export const supportUserStack = StackNavigator({
    supportUser: {
        screen: ProfileUser,
        navigationOptions: {
            header:null,
        },
    }
});

export const MainScreenRouter = DrawerNavigator(
    {
        // Accounts:{screen: AccountStack},
        ListJobs:{screen:ListJobStack},
        InformaticonsPersons:{screen:InformaticonsPersonStack},
        Interviews:{screen:InterviewStack},
        Notificationss:{screen:NotificationStack},
        SendJobs:{screen:SendJobStack},
        supportUsers:{screen:supportUserStack}
    },
    {
        contentComponent:  props => {
            return (
               <CustomesDrawMenu {...props}/>
            );},
    }
);
export const MainScreenRouters = StackNavigator({
    AccountStack:{
        screen:AccountStack,
        navigationOptions:{
            header: null
        }
    },
    MainScreenRouter:{
        screen:MainScreenRouter,
        navigationOptions:{
            header: null
        }
    }
});
export default MainScreenRouters;
