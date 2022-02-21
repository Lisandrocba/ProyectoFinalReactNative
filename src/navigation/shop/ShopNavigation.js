import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContenedorCategoria from '../../screen/ContenedorCategoria/ContenedorCategoria';
import ProductDitail from '../../screen/productDetail/ProductDetail';
import CategoriaItemPan from '../../screen/ContenedorItemPan/CategoriaItemPan';

const Stack = createNativeStackNavigator();

const ShopNavigation =()=>{
    return(
            <Stack.Navigator
                initialRouteName= "Categories"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#212529'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {fontWeight: 'bold'}
                
                }}>

                <Stack.Screen 
                name='Categorias' 
                component={ContenedorCategoria} 
                />

                <Stack.Screen 
                name='Productos' 
                component={CategoriaItemPan} 
                options={({route}) => ({
                    title: route.params.name,
                })}
                />

                <Stack.Screen name='ProductDitail' 
                component={ProductDitail}
                options={({route}) => ({
                    title: route.params.name,
                })} />
            </Stack.Navigator>
        )
}

export default ShopNavigation;