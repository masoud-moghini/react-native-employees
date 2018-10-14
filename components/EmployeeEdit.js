import React, { Component } from 'react';
import{Card,CardSection,Button,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import { employeeUpdate,employeeSave,employeeDelete } from '../actions'
import _ from 'lodash'
class EmployeeEdit extends Component {
    state={
        showModal:false
    };
    componentWillMount = () => {
      _.each(this.props.employee,(value,prop)=>{
          this.props.employeeUpdate({prop,value})
      })
    }
    onPressButton(){
        const {name,phone,shift}=this.props;
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid})
        console.log(name,phone,shift);
    }
    onTextPress(){
        const{shift,phone}=this.props;
        Communications.text(phone,`your upcomming shift is on ${shift}`);
    }
    onAccept(){
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal:false});
    }
    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{this.setState({showModal:!this.state.showModal})}}>
                        fire
                    </Button>
                </CardSection>
                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}    
                    onDecline={this.onDecline.bind(this)}    
                >
                    Sure you want to fire this 
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state=>{
    console.log(state)
    const{name,phone,shift} = state.employeeForm;
    return{name,phone,shift};
}


export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);