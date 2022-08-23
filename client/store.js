import { createStore, applyMiddleware, combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addClientReducer, deleteClientReducer, getClientReducer, setClientReducer } from "./state/Reducers/clientReducer";

//initial state
const initialState = {
    client_info:{}
}

// middleware
const middleware = [thunk];

//reducer
const reducer = combineReducers({
      client_info: getClientReducer,
      set_client : setClientReducer,
      delete_client: deleteClientReducer,
      add_client: addClientReducer,
    });

// creating store

let composeEnhancer =  compose;
if(typeof(window)!=="undefined"){
  composeEnhancer = (window!==undefined&&(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)) 
}

export const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);


