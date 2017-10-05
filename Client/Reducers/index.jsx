import { combineReducers } from 'redux';
import TopicReducer from './TopicsReducers/TopicsReducer.jsx';
import ArticlesReducer from './ArticlesReducers/ArticlesReducer.jsx';

export const reducers = combineReducers({
  topics: TopicReducer, 
  articles: ArticlesReducer
});