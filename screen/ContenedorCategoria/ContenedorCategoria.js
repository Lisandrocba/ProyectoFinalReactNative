import React from "react";
import {
    FlatList,
} from "react-native";
import ContenedorItems from '../ContenedorItems/ContenedorItems';
import {CATEGORIAS} from '../Data/Categorias'

export default function ContenedorCategoria ({navigation}){
    const handleSelectedCategory = (item) =>{
        navigation.navigate('Productos', {
            categoryId: item.id,
            name: item.titulo,
        });
    }

    const readerGridItem =({item})=>{
        return (
            <ContenedorItems item={item} onSelected={handleSelectedCategory} />
            ) 
            
    }

    return(
        <FlatList 
        data={CATEGORIAS}
        keyExtractor={item => item.id}
        renderItem={readerGridItem}
        numColumns={1}
        />
        )
}