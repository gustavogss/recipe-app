import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
       flex:1,
       width:'100%'
    },
    backButton:{
        width:'100%',
        backgroundColor:'#D22222',
        height: 48,
        flexDirection: 'row',        
        alignItems: 'center',
        paddingStart:14
    },
    backText:{
        color:'#FFFFFF',
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 14
    },
    webview:{
        flex: 1,
        width:'100%'
    }
});
export default styles;