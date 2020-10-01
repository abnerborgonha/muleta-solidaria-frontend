import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Container } from './styles';

//Component
import Dashborad from '../Dashborad';
import Map from '../Map';
import ProductNavigation from '../ProductNavigation';
import Feed from '../Feed';
import SettingsNavigation from '../SettingsNavigation';

const Tab = createBottomTabNavigator();

const Thema = {
    dark: false,
    colors: {
        primary: '#1190CB',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(242, 242, 242)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const TabNavigation = () => {
    return (
        <NavigationContainer theme={Thema} independent={true}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Dashboard"
                    component={Dashborad}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome5 
                            name="chart-line" 
                            size={25} 
                            color={color} 
                        />
                    }}
                />
                <Tab.Screen
                    name="Mapa"
                    component={Map}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome5 
                            name="map-marked-alt" 
                            size={25} 
                            color={color} 
                        />
                    }}
                />
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome5 
                            name="home" 
                            size={25} 
                            color={color} 
                        />
                    }}
                />
                <Tab.Screen
                    name="Produtos"
                    component={ProductNavigation}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome5 
                            name="crutch" 
                            size={25} 
                            color={color} 
                        />
                    }}
                />
                <Tab.Screen
                    name="Configurações"
                    component={SettingsNavigation}
                    options={{
                        tabBarIcon: ({ color }) => <FontAwesome5 
                            name="cog" 
                            size={25} 
                            color={color} 
                        />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabNavigation;