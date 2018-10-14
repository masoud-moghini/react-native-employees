import firebase from 'firebase';
import {
        PASSWORD_CHANGED
        ,LOGIN_USER_SUCCESS
        ,EMAIL_CHANGED
        ,LOGIN_USER_FAIL,
        LOGIN_USER
    } from './types'
import { Actions } from 'react-native-router-flux';
export const emailChanged=(text)=>{
    return {
        type:EMAIL_CHANGED,
        payload:text
    }
}

export const passwordChanged=(text)=>{
    return{
        type:PASSWORD_CHANGED,
        payload:text
    }
}

export const loginUser = ({email,password})=>{
    return (dispatch)=>
        {
            dispatch({type:LOGIN_USER})
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(user=>{
                    dispatch({type:LOGIN_USER_SUCCESS,payload:user});
                    Actions.main();
                }).catch(err=>{
                    console.log('first err',err);
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then((user)=>{
                            dispatch({type:LOGIN_USER_SUCCESS,payload:user})                            
                        })
                        .catch((err)=>
                            {
                                console.log(err)
                                dispatch({type:LOGIN_USER_FAIL})
                            }
                        )
                })
        }
}

 