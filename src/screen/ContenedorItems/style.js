import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 5,
        margin: 1,
        height: height/4,
    },
    container: {
        flex: 1,
        borderRadius: 5,
        shadowColor: '#00000',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
       
    },
    contenedorTexto: {
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textItem:{
        fontSize: 20,
        color: '#ffffff'
        
    }
});

export default styles;