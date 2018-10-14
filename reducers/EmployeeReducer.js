import {FETCH_EMPLOYEES_SUCCESS, EMPLOYEE_SAVE_SUCCESS,INI, INIT_EMPLOYEE_STAE} from '../actions/types';
const INITIAL_STATE = {};


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            console.log(action);
            return action.payload;
            break;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE
        
        default:
            return state;
            break;
    }
}