import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {AntDesign, Entypo} from '@expo/vector-icons';



import Home from './screens/Home';
import Fade from "./screens/Fade";
import Rotate from './screens/Rotate';
import DragGesture from './screens/DragGesture';
import ScrollViewScreen from './screens/ScrollViewScreen';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';


const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
  <RootTab.Navigator
    tabBarOptions={{
      activeTintColor: "blue",
      inactiveTintColor: "gray",
    }}
  >
    <RootTab.Screen name="Rotate" component={Rotate}
    options={{
      title: "Spin Time!",
      tabBarIcon: ({focused}) => (
      <AntDesign name="retweet" size={24} color={focused ? "blue" : "grey"} />
      ),
    }}
    />
    <RootTab.Screen name="Fade" component={Fade}
    options={{
      title: "BedTime!",
      tabBarIcon: ({focused}) => (
      <Entypo name="air" size={24} color={focused ? "blue" : "grey"} />
      ),
    }}
    />
    <RootTab.Screen name="DragGesture" component={DragGesture}
      options={{
      title: "Go For A Walk",
      tabBarIcon: ({focused}) => (
      <Entypo name="copy" size={24} color={focused ? "blue" : "grey"} />
      ),
    }}
    />

    
  </RootTab.Navigator>
  )};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Animations" component={RootTabNavigator}/>
       <Drawer.Screen name="Credits" component={Home}/>
      {/*   <Drawer.Screen name="ScrollViewScreen" component={ScrollViewScreen}/> */}
      {/*   <Drawer.Screen name="FlastListScreen" component={FlatListScreen}/> */}
      {/*  <Drawer.Screen name="SectionListScreen" component={SectionListScreen}/> */}
        
    </Drawer.Navigator>
  );

};

export default function App() {

  return (

    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

