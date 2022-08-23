import axios from 'axios';
import { ADD_CLIENT_FAIL, ADD_CLIENT_REQUEST, ADD_CLIENT_SUCCESS, GET_CLIENT_FAIL, GET_CLIENT_REQUEST, GET_CLIENT_SUCCESS, REMOVE_CLIENT_FAIL, REMOVE_CLIENT_REQUEST, REMOVE_CLIENT_SUCCESS, SET_CLIENT_FAIL, SET_CLIENT_REQUEST, SET_CLIENT_SUCCESS } from "../constants/clientConstants"; 

//get clients action
export const getClientAction = ()=>async dispatch=>{
    dispatch({type:GET_CLIENT_REQUEST})
    try {
        const {data} = await axios.get("/api/client/get-clients");
        dispatch({type:GET_CLIENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_CLIENT_FAIL,payload:error.response})
    }
}

//update clients
export const setClientAction = (info)=>async dispatch=>{
    dispatch({type:SET_CLIENT_REQUEST})
    try {
        const {data} = await axios.post("/api/client/update-client",info);
        dispatch({type:SET_CLIENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:SET_CLIENT_FAIL,payload:error.response})
    }
}

//add clients 

export const addClientAction = (info)=>async dispatch=>{
    dispatch({type:ADD_CLIENT_REQUEST})
    try {
        const {data} = await axios.post("/api/client/add-client",info);
        dispatch({type:ADD_CLIENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADD_CLIENT_FAIL,payload:error.response})
    }
}

//remove clients
export const deleteClientAction = (id)=>async dispatch=>{
    dispatch({type:REMOVE_CLIENT_REQUEST})
    try {
        const {data} = await axios.delete("/api/client/delete-client",{
            params:{
                id
            }
        });
        dispatch({type:REMOVE_CLIENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:REMOVE_CLIENT_FAIL,payload:error.response})
    }
}