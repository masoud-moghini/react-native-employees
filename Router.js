import React from 'react';
import {Router,Scene,Stack, Actions} from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent = ()=>{
    return(
        <Router>
            <Scene key="root">
                <Scene key="auth" hideNavBar={true}>
                    <Scene key="login" component={LoginForm} title="please login" hideNavBar={false}/>
                </Scene>
                <Scene key="main" hideNavBar={true}>
                    <Scene 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="employee list" 
                        hideNavBar={false}
                        rightTitle="Add"
                        onRight={()=>{Actions.createEmployee()}}
                    /> 
                    <Scene key="createEmployee" component={EmployeeCreate} title="create employee" hideNavBar={false}/>               
                    <Scene key="editEmployee" component={EmployeeEdit} title="edit employee" hideNavBar={false}/>               
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;