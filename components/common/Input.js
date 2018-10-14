import React ,{Component} from 'react';
import {Text,TextInput,View} from 'react-native'

const Input = ({label,value,onChangeText,placeholder,secureTextEntry})=>{
    const {labelStyle,inputStyle,containerStyle} = styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}            
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            ></TextInput>
        </View>
    )
}

const styles={
    inputStyle:{
        color:"#000",
        paddingRight:5,
        paddingLeft:5,
        fontSize:20,
        lineHeight:23,
        flex:2
    },
    labelStyle:{
        fontSize:20,
        paddingLeft:20,
        flex:1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export {Input};