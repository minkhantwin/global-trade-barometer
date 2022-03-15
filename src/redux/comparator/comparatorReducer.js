import { CHANGE_CURRENT_MONTH, CHANGE_LEFT_COUNTRY, CHANGE_RIGHT_COUNTRY, COMPARE_DATA, SET_TRADE_DATA, TOGGLE_SELECTED_COUNTRIES } from "./comparatorTypes";

const initialState = {
    tradeData: {},
    selectedCountries: {
        left: '',
        right: ''
    },
    comparator:{
        leftCountry: '',
        rightCountry: '',
        year: '',
        month: {
            start: '',
            end: '',
            current: ''
        }

    }
}

const comparatorReducer = (state = initialState, action) => {
    const tempState = {...state};

    switch (action.type) {
        case TOGGLE_SELECTED_COUNTRIES:{
            // already selected country
            let {left, right} = tempState.selectedCountries;
            if (left === action.payload)
            {
                left = ''
            }
            else if (right === action.payload)
            {
                right = ''
            }
            else {
                !left ? left = action.payload : right = action.payload
            }
            return {
                ...tempState,
                selectedCountries: {
                    left,
                    right
                }

            }
        }


        case COMPARE_DATA: {
            return {
                ...state,
                comparator: action.payload
            }
        }


        case CHANGE_LEFT_COUNTRY: {
            return {
                ...tempState,
                selectedCountries: {
                    ...tempState.selectedCountries,
                    left: action.payload
                },
                comparator: {
                    ...tempState.comparator,
                    leftCountry: action.payload
                }
            }
        }


        case CHANGE_RIGHT_COUNTRY: {
            return {
                ...tempState,
                selectedCountries: {
                    ...tempState.selectedCountries,
                    right: action.payload
                },
                comparator: {
                    ...tempState.comparator,
                    rightCountry: action.payload
                }
            }
        }


        case SET_TRADE_DATA: {
            return {
                ...tempState,
                tradeData: action.payload
            }
        }


        case CHANGE_CURRENT_MONTH: {
            return {
                ...tempState,
                comparator: {
                    ...tempState.comparator,
                    month: {
                        ...tempState.comparator.month,
                        current: action.payload
                    }
                }
            }
        }


        default: return tempState;
    }
}

export default comparatorReducer;