import { Switch } from "react-router-dom";
import { Actiontypes } from "../contants/actions-types";

const initialstate={
    products:[]
}

export const productReducer = (state =initialstate,{type,payload})=>{
switch (type) {
    case Actiontypes.SET_PRODUCTS:
        
        return {...state , products : payload}

    default:
        return state;
}
}

export const selectedProductReducer =( state={},{type,payload})=>{
switch (type) {
    case Actiontypes.SELECTED_PRODUCT:
        
        return {...state , ...payload}
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
        
            return {}
    

    default:
       return state;
}


};