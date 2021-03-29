const INITIAL_STATE = { countryName: '', textInput: '', query: [] }

const countryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCHED':
            return { ...state, query: action.payload }        
        case 'CLICKED':
            return { ...state, countryName: action.payload }
        default:
            return state
    }
}

export default countryReducer