import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Container } from './styles';

import { ForgotPasswordProvider } from './context/forgotPasswordContext';
import { UserProvider } from './context/userContext';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ValidatePassword from './pages/ValidatePassword';
import CreateNewPassword from './pages/CreateNewPassword';
import Dashboard from './pages/Dashborad';
import TabNavigation from './pages/TabNavigation';


import Sing from './pages/Sing';
import Maps from './pages/Map';

const Stack = createStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <UserProvider>
      <ForgotPasswordProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Cadastro',
              headerTintColor: '#1190CB',
              headerPressColorAndroid: '#1190CB'
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: 'Esqueceu a Senha',
              headerTintColor: '#1190CB',
              headerPressColorAndroid: '#1190CB'
            }}
          />
          <Stack.Screen
            name="ValidatePassword"
            component={ValidatePassword}
            options={{
              title: 'Validação de Senha',
              headerTintColor: '#1190CB',
              headerPressColorAndroid: '#1190CB'
            }}
          />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
            options={{
              title: 'Criando nova senha',
              headerTintColor: '#1190CB',
              headerPressColorAndroid: '#1190CB',
              headerLeft: false
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
            options={{
              title: 'Maps',
              headerTintColor: '#1190CB',
              headerPressColorAndroid: '#1190CB',
            }}
          />
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </ForgotPasswordProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
