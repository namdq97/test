import { View, Text, Button } from 'react-native'
import React from 'react';
import { Setting } from './setting';
import { HomeScreen } from './home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

export function App() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    )
}  