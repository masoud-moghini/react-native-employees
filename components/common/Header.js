import React from 'react';
import ReactNative,{Text,View} from 'react-native';



const Header=(props)=>{
    const {textStyle,viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
        )
}


const styles={
    viewStyle:{
        backgroundColor:"#F8f8f8",
        justifyContent:"center",
        alignItems:"center",
        height:60,
        paddingTop:15,
        elevation:20,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
}

export default {Header};
