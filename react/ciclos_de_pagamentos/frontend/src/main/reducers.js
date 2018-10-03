import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dashboard: () => ({ sumary: { credit: 100, deb: 50 } })
})

export default rootReducer