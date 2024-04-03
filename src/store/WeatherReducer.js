
export const defaultApp = {
    WeatherData: null,
    location: null,
}

function WeatherReducer(state, action) {

    let newState = {...state};
    let {type, payload} = action;
    switch(type) {
        case 'loadLocationAndWeather': {
            newState = payload;
            break;
        } 
        case 'saveNoteForDay': {
            // payload {day: Friday, note: 'Wear a sweater'}

            newState.days = {
                Friday: ['Wear a sweater']
            }
            break;
        }
    }

    return newState;
}

export default WeatherReducer