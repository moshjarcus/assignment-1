import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";



import Home from './screens/Home';
import Pikachu from './screens/Pikachu';
import Thunderbolt from './screens/Thunderbolt';
import Electric from './screens/Electric.js'


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Pikachu" component={Pikachu}/>
       <Drawer.Screen name="Thunderbolt" component={Thunderbolt}/>
       <Drawer.Screen name="Electric Type" component={Electric}/>
       <Drawer.Screen name="Credits" component={Home}/>
 
        
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

