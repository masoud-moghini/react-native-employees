import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    FETCH_EMPLOYEES_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    INIT_EMPLOYEE_STATE
}from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
export const employeeUpdate=({prop,value})=>{
    return({
        type:EMPLOYEE_UPDATE,
        payload:{prop,value}
    })
}
export const employeeCreate=({name,phone,shift})=>{
    const {currentUser} = firebase.auth();
    return(dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then(()=>{
            dispatch({type:EMPLOYEE_CREATE})
            Actions.employeeList({type:'reset'})
        })
    }
}

export const employeeFetch=()=>{
    const {currentUser} = firebase.auth();    
    return(dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value',snapshot=>{
                dispatch({type:FETCH_EMPLOYEES_SUCCESS,payload:snapshot.val()})
            })
    }
}

export const employeeSave = ({name,phone,shift,uid})=>{
    const {currentUser}= firebase.auth();
    return()=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name,phone,shift})
            .then(
                (dispatch)=>
                    {
                        Actions.employeeList({type:'reset'});
                        dispatch({type:EMPLOYEE_SAVE_SUCCESS})
                    }
                )
    }
}
export const init_employee_state=()=>{
    return (
        {type:INIT_EMPLOYEE_STATE}
    )
}

export const employeeDelete=({uid})=>{
    const {currentUser} = firebase.auth();
    return()=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(()=>{
                Actions.employeeList({type:'reset'});
            })
    }
}