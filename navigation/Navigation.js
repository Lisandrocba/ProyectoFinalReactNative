import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../screen/categories/Categories';
import ListProduct from '../screen/listProduct/ListProduct';
import ProductDitail from '../screen/productDetail/ProductDetail';

const Stack = createNativeStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Categories' component={Categories} />
                <Stack.Screen name='ListProduct' component={ListProduct} />
                <Stack.Screen name='ProductDitail' component={ProductDitail} />
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default Navigation;