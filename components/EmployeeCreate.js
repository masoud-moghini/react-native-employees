import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm'
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate,init_employee_state} from '../actions'
import { Card, CardSection, Input, Button } from './common';
class EmployeeCreate extends Component {
    componentWillMount(){
        console.log('hey this should be called');
        this.props.init_employee_state()
    }
    onPressButton(){
        const {name,phone,shift} = this.props;
        this.props.employeeCreate({name,phone,shift:shift||"mons"});
    }
    render() {
        console.log(this.props)
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps=(state)=>{
    const{name,phone,shift}= state.employeeForm;
    return {name,phone,shift};
}
export default connect(mapStateToProps,
    {
        employeeUpdate,
        employeeCreate,
        init_employee_state
    }
)(EmployeeCreate);
