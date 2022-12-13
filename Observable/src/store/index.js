import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import skillsReducer from "../reducers/skills";
import { changeSearchEpic, searchSkillsEpic } from "../epics";

const reducer = combineReducers({ skills: skillsReducer });
const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(changeSearchEpic, searchSkillsEpic);
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  reducer,
  combineEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);
export default store;
