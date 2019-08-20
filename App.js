
import React, { Component } from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator,
  TabNavigator
} from "react-navigation";
import Tab2 from "./components/Tab2";
import Tab1 from "./components/Tab1";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";
import TabBar from "./components/TabBar";
console.disableYellowBox = true;
const UserTab = TabNavigator(
  {
    Tab1: {
      screen: Tab1,
      
      
    },
    Tab2: {
      screen: Tab2,
     
    },
    Tab3: {
      screen: Tab3
    },
    Tab4: {
      screen: Tab4,
      navigationOptions: {
        title :  "Userq",
        swipeEnabled: false
      }
    }
  },
  {
    initialRouteName: "Tab1",
    tabBarComponent: props => (
      <TabBar{...props} />
      ),
      tabBarPosition: 'bottom',
  
      tabBarOptions: {
        labelStyle: {
          fontSize: 18,
          alignSelf  : "center",
          // backgroundColor : "pink",
          position : "absolute",

        },
        tabStyle: {
          width: 100,
          justifyContent : "center",
          alignItems  : "center",
        },
        style: {
          // backgroundColor: 'blue',
        },
       
      }
      
  }
);

const MainStack = createStackNavigator(
  {
    User: UserTab
  },
  {
      headerMode: "none"
  }
);
export default MainStack;
