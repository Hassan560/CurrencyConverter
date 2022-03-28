import * as ActionTypes from '../Constants/Index'

const initialState = {
    currencyCounter: []
}

export const ExchangeReducer = (state = initialState, action) => {
    switch (action.type) {  
        case ActionTypes.GET_COUNTRY_CURRENCY:
            return {
                ...state,
                currencyCounter: action.payload
            }
        default: return state
    }
}
