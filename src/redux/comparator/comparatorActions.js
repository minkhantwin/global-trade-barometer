import { CHANGE_CURRENT_MONTH, CHANGE_LEFT_COUNTRY, CHANGE_RIGHT_COUNTRY, COMPARE_DATA, SET_TRADE_DATA, TOGGLE_SELECTED_COUNTRIES } from "./comparatorTypes"

export const toggleSelectedCountries = (country) => {
    return {
        type: TOGGLE_SELECTED_COUNTRIES,
        payload: country
    }
}


export const compareData = (data) => {
    return {
        type: COMPARE_DATA,
        payload: data
    }
}

export const setTradeData = (tradeData) => {
    return {
        type: SET_TRADE_DATA,
        payload: tradeData
    }
}

export const changeLeftCountry = (country) => {
    return {
        type: CHANGE_LEFT_COUNTRY,
        payload: country
    }
}


export const changeRightCountry = (country) => {
    return {
        type: CHANGE_RIGHT_COUNTRY,
        payload: country
    }
}

export const changeCurrentMonth = (month) => {
    return {
        type: CHANGE_CURRENT_MONTH,
        payload: month
    }
}
