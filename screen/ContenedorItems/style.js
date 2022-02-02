import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 5,
        margin: 5,
        height: 100,
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
        height: 100,
    },
    contenedorTexto: {
        height: 100,
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