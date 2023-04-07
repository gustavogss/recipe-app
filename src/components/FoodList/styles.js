import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginBottom: 14
    },
    cover:{
        width:'100%',
        height: 200,
        borderRadius: 14,        
    },
    info:{
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99,
    },
    name:{
        fontSize:18,
        color: '#fff',
        fontWeight: 'bold',
    },
    description:{       
        color: '#fff',        
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height:'55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent',
    }
});

export default styles;