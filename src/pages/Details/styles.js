import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F3F9FF',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14,        
    },
    cover:{
        height: 200,
        borderRadius:14,
        width:'100%',
    },
    playIcon:{
        position: 'absolute',
        zIndex: 9,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        marginTop: 14,
        fontWeight: 'bold',
        color:'#000',
        marginBottom: 4
    },
    ingredients:{
        marginBottom: 14,
        fontSize: 16,
    },
    headerDetails:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    instructionsTag:{
        backgroundColor:'#d22222',
        flexDirection: 'row',        
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
        justifyContent:'space-between',
        alignItems: 'center',
        
    },
    instructionsCook:{
        color:'#fff',
        fontSize:18,
        fontWeight:'500',     
        marginRight: 12,
    }
});
export default styles;