import {
    FETCH_TARIFS_PENDING,
    FETCH_TARIFS_SUCCESS,
    FETCH_TARIFS_ERROR
  } from '../actions/index'
import initialState from "../store/initialState";

const tarifsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TARIFS_PENDING: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_TARIFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                tarifs: action.payload
            }
        case FETCH_TARIFS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getTarifs = state => state.tarifs;
export const getTarifsPending = state => state.isLoading;
export const getTarifsError = state => state.error;
export const sortSubtarifsByPrice = state => {  
    return state.tarifs.map( tarif => {
        return tarif.tarifs.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));      
    })
};
export const addDiscoountsSubtarifs = state => {    
    return state.tarifs.map( tarif => {
        const monthPrice = tarif.tarifs[0].price;
        return tarif.tarifs.map( subtarif => {
            return subtarif.discount = (monthPrice - (subtarif.price / subtarif.pay_period)) * subtarif.pay_period;
        });
    })
};
export const getMonth = state => state.month;
export default tarifsReducer;