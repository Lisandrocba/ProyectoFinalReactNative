import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';


const ListProduct =({navigation})=>{
    return(
        <View >
        <Text>LISTA DE PRODUCTOS</Text>
        <Button title='Ir a productos' onPress={()=> navigation.navigate('ProductDitail')} />
    </View>
    )
}

export default ListProduct;