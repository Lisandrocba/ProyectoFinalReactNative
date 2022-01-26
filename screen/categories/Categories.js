import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

const Categories =({navigation})=>{
    return(
        <View>
            <Text>CATEGORIAS</Text>
            <Button title='Ir a productos' onPress={()=> navigation.navigate('ListProduct')} />
        </View>
    )
}

export default Categories;