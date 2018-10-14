import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE,INIT_EMPLOYEE_STATE} from '../actions/types'

const INITIAL_STATE = {
    name:'',
    phone:'',
    shift:''
};
export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state,[action.payload.prop]:action.payload.value}
            break;
        case EMPLOYEE_CREATE:
            return INITIAL_STATE
            break;
        case INIT_EMPLOYEE_STATE:    
            return INITIAL_STATE


        default:
            return state    
            break;
    }
}