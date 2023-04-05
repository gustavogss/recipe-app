import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,       
        backgroundColor:'#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd:14,        
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#121212'
    },
    form:{
        flexDirection: 'row',
        width:'100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth:1,
        borderColor: "#eee",
        backgroundColor:'#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    input:{
        width: '90%',
        height: 40,
        maxWidth: '90%',
        fontSize: 16
    }
});
export default styles;