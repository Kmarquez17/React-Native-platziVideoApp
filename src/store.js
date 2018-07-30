import { createStore } from "redux";
import reducer from './reducers/videos'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

// const store = createStore(reducer, {
//     suggestionList: [],
//     categoryList: []
// })

export { store, persistor };
