import React from 'react';
import {
    FlatList,
} from 'react-native';
import {PANES} from '../Data/Panes';
import ItemPan from '../itemPan/ItemPan'


const CategoriaItemPan =({ navigation, route })=>{
    
    
    const panes = PANES.filter(pan=>  pan.categoria === route.params.categoryId );

    const handleSelected =(item)=>{
        navigation.navigate('ProductDitail',
        {
            productId: item.id,
            name: item.nombre,
            product: item,
        })
    } 

    const renderItemPan =({item})=>{
        return <ItemPan item={item}  onSelected={handleSelected} />
    }

    return(
        <FlatList 
        data={panes}
        keyExtractor={item => item.id}
        renderItem={renderItemPan}
        />
    )
}

export default CategoriaItemPan;