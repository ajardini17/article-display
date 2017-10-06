import { combineReducers } from 'redux';
import TopicReducer from './TopicsReducer.jsx';
import ArticlesReducer from './ArticlesReducer.jsx';

export const reducers = combineReducers({
  topics: TopicReducer, 
  articles: ArticlesReducer
});