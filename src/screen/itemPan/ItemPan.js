import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './style'

const ItemPan =({item, onSelected})=>{
    return(
        <TouchableOpacity style={styles.contenedor} onPress={()=> onSelected(item) }>
            <View>
                <View>
                    <Text>
                        {item.nombre}
                    </Text>
                </View>
                <View>
                    <Text>{item.precio}</Text>
                    <Text>{item.weigth}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default ItemPan;