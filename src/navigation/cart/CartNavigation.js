import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CamaraApp from '../../../practicaCamara/CamaraApp'

const Stack = createNativeStackNavigator();

const CartNavigation =()=>{
    return(
            <Stack.Navigator
                initialRouteName= "Cart"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#212529'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {fontWeight: 'bold'}
                
                }}>

                <Stack.Screen 
                name='Camara' 
                component={CamaraApp} 
                />

            </Stack.Navigator>
        )
}

export default CartNavigation;