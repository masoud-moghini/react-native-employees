import React, { Component } from 'react';
import {View,Picker,Text} from 'react-native';
import{CardSection,Input} from './common';
import {employeeUpdate} from '../actions';
import {connect} from 'react-redux';


class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={(text)=>{this.props.employeeUpdate({prop:'name',value:text})}}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555"
                        value={this.props.phone}
                        onChangeText={()=>{}}
                        onChangeText={(text)=>{this.props.employeeUpdate({prop:'phone',value:text})}}
                        
                    />
                </CardSection>
                <CardSection >
                    <Text style={styles.pickerTextStyles}>Select Shift</Text>
                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={(value)=>{this.props.employeeUpdate({prop:"shift",value})}}
                        >
                        <Picker.Item label="شنبه" value="sat"/>                        
                        <Picker.Item label="یک شنبه" value="sun"/>
                        <Picker.Item label="دوشنبه" value="mon"/>
                        <Picker.Item label="سه شنبه" value="tue"/>
                        <Picker.Item label="چهارشنبه" value="wed"/>
                        <Picker.Item label="پنجشنبه" value="tur"/>
                        <Picker.Item label="جمعه" value="fri"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles={
    pickerTextStyles:{
        fontSize:20,
        paddingLeft:20
    }
}

const mapStateToProps=state=>{
    const{name,phone,shift} =state.employeeForm;
    console.log("in employee form",name,phone,shift);
    return {name,phone,shift};
}


export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);