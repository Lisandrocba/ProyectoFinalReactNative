import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartNavigation from './cart/CartNavigation';
import ShopNavigation from './shop/ShopNavigation';
import styles from './style';

const BottomTab = createBottomTabNavigator();


const Navigation =()=>{
    return(
        <NavigationContainer>
            <BottomTab.Navigator 
                initialRouteName='Shop'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.toBar,
                }}
            >
                <BottomTab.Screen 
                    name='Shop' 
                    component={ShopNavigation} 
                />  
                <BottomTab.Screen 
                    name='Cart' 
                    component={CartNavigation} 
                />
            </BottomTab.Navigator>           
        </NavigationContainer>
        )
}

export default Navigation;