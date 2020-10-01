import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';


import Account from '../Account';
import Settings from '../Settings';

const Stack = createStackNavigator();

export default function SettingsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    title: 'Minha Conta',
                    headerTintColor: '#1190CB',
                    headerPressColorAndroid: '#1190CB'
                  }}
            />
        </Stack.Navigator>
    );
}