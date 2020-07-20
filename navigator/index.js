import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { App } from './screen/home/app';

const Stack = createStackNavigator();

export const RootNavigator = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
);
