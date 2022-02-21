import React from 'react';
import {
    View,
    Text,
} from 'react-native';

const ProductDetail =({route})=>{

    const item = route.params.product;
    

    return(
        <View>
            <Text>DETALLE DEL PRODUCTO</Text>
            <Text>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
            <Text>{item.weigth}</Text>
            <Text>{item.precio}</Text>
        </View>
    )
}

export default ProductDetail;