import React, { Component } from 'react';
import {View,Text,ListView} from 'react-native';
import { Card, CardSection } from './common';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions/EmployeeActions'
import ListItem from './ListItem';
import _ from 'lodash'
class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);

    }
    createDataSource({employees}){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState ({
            dataSource: ds.cloneWithRows(employees),
          })
    }

    renderRow(employee){
        return(
            <ListItem employee={employee}/>
        )
    }

    render() {
        console.log('EEE0',this.props)
        
        return (
            <ListView
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                />
        );
    }
}

mapStateToProps=state=>{
    const employees = _.map(state.employees,(val,uid)=>{
        return({...val,uid} );
    })
    console.log(employees)
    return {employees};
}

export default connect(mapStateToProps,{employeeFetch})(EmployeeList);