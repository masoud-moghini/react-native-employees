import React from 'react'
import { CardSection} from "./CardSection";
import { Button} from "./Button";
import {View,Text,Modal} from 'react-native'
function Confirm({children,visible,onAccept,onDecline}) {
    const {containerStyle,textStyle,CardSectionStyle} = styles;
    return (
    <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={function(){}}
        >
        <View style={containerStyle}>
            <CardSection style={CardSectionStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </CardSection>
            <CardSection>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
        </View>
    </Modal>
    )
}

const styles={
    CardSectionStyle:{
        justifyContent:'center'
    },
    textStyle:{
        fontSize:18,
        flex:1,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    }
}

export {Confirm };