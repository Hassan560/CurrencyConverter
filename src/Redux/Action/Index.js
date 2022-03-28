import axiox from 'axios'

import * as ActionTypes from '../Constants/Index'

export const getCurrencyConverter = () => {
    return (dispatch) => {
        axiox.get('http://data.fixer.io/api/latest?access_key=b3182495e9c886bfc987bbd94c884b0a').then((res) => {
            dispatch({
                type: ActionTypes.GET_COUNTRY_CURRENCY,
                payload: res.data.rates,
            })
            // console.log(res.data.rates)
        }).catch((err) => {
            dispatch({
                type: ActionTypes.GET_COUNTRY_CURRENCY_ERROR,
                payload: err.message
            })
        })
        // console.log(res.data.rates, 'action');
    }
}