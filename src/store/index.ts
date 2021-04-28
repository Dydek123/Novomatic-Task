import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import tunesReducer from "./reducers/tunesReducer";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
    tunes: tunesReducer,
    alert: alertReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
