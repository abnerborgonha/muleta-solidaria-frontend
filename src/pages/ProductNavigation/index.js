import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Container } from './styles';

import { ProductModalProvider } from '../../context/productModalContext';
import ProductCategory from '../ProductCategory';
import ProductView from '../ProductView';
import ProductForm from '../ProductForm';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function ProductStackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProductView"
                component={ProductView}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="ProductForm"
                component={ProductForm}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

 
export default function ProductNavigation() {
    return (
        <ProductModalProvider>
            <Container>
                <StatusBar style="auto" backgroundColor="#fff" />
                <Tab.Navigator tabBarOptions={{
                    activeTintColor: '#1190CB',

                }}>
                    <Tab.Screen name="Categoria" component={ProductCategory} />
                    <Tab.Screen name="Produto" component={ProductStackNavigation} />
                </Tab.Navigator >
            </Container>
        </ProductModalProvider>
    );
}