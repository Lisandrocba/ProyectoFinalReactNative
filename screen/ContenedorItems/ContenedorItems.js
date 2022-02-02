import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './style'


const ContenedorItems =({item, onSelected})=>{
    console.warn(item)
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity style={styles.container, {backgroundColor: item.color}} onPress={()=>onSelected(item)} >
                <View style={styles.contenedorTexto}>
                    <Text style={styles.textItem}>
                        {item.titulo}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ContenedorItems;