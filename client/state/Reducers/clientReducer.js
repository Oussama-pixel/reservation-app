import { ADD_CLIENT_FAIL, ADD_CLIENT_REQUEST, ADD_CLIENT_SUCCESS, GET_CLIENT_FAIL, GET_CLIENT_REQUEST, GET_CLIENT_SUCCESS, REMOVE_CLIENT_FAIL, REMOVE_CLIENT_REQUEST, REMOVE_CLIENT_SUCCESS, SET_CLIENT_FAIL, SET_CLIENT_REQUEST, SET_CLIENT_SUCCESS } from "../constants/clientConstants"

//get client reducer
export const getClientReducer = (state={},action)=>{
    switch(action.type){
        case GET_CLIENT_REQUEST:
            return {loading:true}
        case GET_CLIENT_SUCCESS:
            return {loading:false,data:action.payload}
        case GET_CLIENT_FAIL:
            return {loading:false,error:action.payload}
        default :
        return state
    }
}

//set client reducer
export const setClientReducer = (state={},action)=>{
    switch(action.type){
        case SET_CLIENT_REQUEST:
            return {loading:true}
        case SET_CLIENT_SUCCESS:
            return {loading:false,data:action.payload}
        case SET_CLIENT_FAIL:
            return {loading:false,error:action.payload}
        default :
        return state
    }
}

//add client reducer
export const addClientReducer = (state={},action)=>{
    switch(action.type){
        case ADD_CLIENT_REQUEST:
            return {loading:true}
        case ADD_CLIENT_SUCCESS:
            return {loading:false,data:action.payload}
        case ADD_CLIENT_FAIL:
            return {loading:false,error:action.payload}
        default :
        return state
    }
}

//delete client reducer
export const deleteClientReducer = (state={},action)=>{
    switch(action.type){
        case REMOVE_CLIENT_REQUEST:
            return {loading:true}
        case REMOVE_CLIENT_SUCCESS:
            return {loading:false,data:action.payload}
        case REMOVE_CLIENT_FAIL:
            return {loading:false,error:action.payload}
        default :
        return state
    }
}