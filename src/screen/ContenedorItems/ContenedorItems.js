import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './style'


const ContenedorItems =({item, onSelected})=>{
    
    
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity 
            style={styles.container, {backgroundColor: item.color}} 
            onPress={() => onSelected(item.id, item.titulo)} 
            >
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