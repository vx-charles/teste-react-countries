const INITIAL_STATE = { load: true, countryName: '', textInput: '', query: [], querySelected: [] }

const countryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCHED':
            return { ...state, load: false, query: action.payload }
        case 'ONE_SEARCHED':            
            return { ...state, querySelected: action.payload }
        case 'CLICKED':
            return { ...state, countryName: action.payload }
        default:
            return state
    }
}

export default countryReducer