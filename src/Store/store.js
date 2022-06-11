import { combineReducers, createStore } from 'redux'
import {createStored} from './reducers/rootReducer'
import {homeStored} from './reducers/rootReducer'
import { mainThread } from './reducers/rootReducer'
import { editThreadReducer } from './reducers/rootReducer'
import { messagesReducer } from './reducers/rootReducer'
import { searchReducer } from './reducers/rootReducer'
const rootReducer = combineReducers({
    createStored,
    homeStored,
    mainThread,
    editThreadReducer,
    messagesReducer,
    searchReducer
    
})
const store = createStore(rootReducer)

export default store