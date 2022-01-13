import { updateObject } from '../utility'
import * as actionTypes from '../actionTypes/weather'
import { IWeather, IWeatherAction } from '../models/weather'
import { isNonNullExpression } from 'typescript'

export const initialState: IWeather = {
    response: null,
    error: null,
    loading: false,
    success: null
}
const weatherStart = (state: IWeather, action: IWeatherAction) => {
    return updateObject(state, {
        error: null,
        loading: true,
        success: isNonNullExpression
    })
}

const weatherSuccess = (state: IWeather, action: IWeatherAction) => {
    return updateObject(state, {
        response: action.response,
        error: null,
        loading: false,
        success: action.success
    })
}

const weatherFail = (state: IWeather, action: IWeatherAction) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        response: null,
        success: null
    })
}

const reducer = (state: IWeather, action: IWeatherAction): IWeather => {
    switch (action.type) {
        case actionTypes.WEATHER_START:
            return weatherStart(state, action)
        case actionTypes.WEATHER_SUCCESS:
            return weatherSuccess(state, action)
        case actionTypes.WEATHER_FAIL:
            return weatherFail(state, action)
        default:
            return state
    }
}
export default reducer;