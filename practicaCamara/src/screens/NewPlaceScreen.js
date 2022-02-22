import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import {COLORS} from '../constants'
import { addPlace } from '../store/places.actions';

const NewPlaceScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [title, setTitle]= useState('');

    const handleTitleChange =(text)=>{
        setTitle(text)
    }

    const handleSave =()=>{
        dispatch(addPlace(title));
        navigation.navigate('Direcciones');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={handleTitleChange} />
                <Button title='Guardar Direccion' color={COLORS.MAROON} onPress={()=>handleSave()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label:{
        fontSize:18,
        marginBottom:16,
        color: '#000000',
        fontWeight: 'bold'
    },
    input:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewPlaceScreen
