import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTopics, fetchArticles, fetchSelectedArticle } from '../API/fetchRequests.jsx';

export function* getArticles(action) {
  try {
    const articles = yield call(fetchArticles);
    yield put({type: 'SET_ALL_ARTICLES', payload: articles });
  } catch (e) {
    yield put({type: 'SET_ALL_ARTICLES', payload: []});
  }
}
export function* getSelectedArticle(action) {
  try {
    const selectedArticle = yield call(fetchSelectedArticle, action.payload);
    yield put({type: 'ADD_ARTICLE_INFORMATION', payload: selectedArticle})
  } catch (e) {
    yield put({type: 'ADD_ARTICLE_INFORMATION', payload: {}})
  }
}
export function* getTopics(action) {
  try {
    const topics = yield call(fetchTopics);
    yield put({type: 'SET_TOPICS', payload: topics });
    
  } catch (e) {
    yield put({type: 'SET_TOPICS', payload: {}});
  }
}

export function* articlesSaga(){
  yield takeLatest('ARTICLES_FETCH_REQUESTED', getArticles);
}
export function* selectedArticleSaga(){
  yield takeLatest('SELECTED_ARTICLE_FETCH_REQUEST', getSelectedArticle)
}
export function* topicsSaga(){
  yield takeLatest('TOPICS_FETCH_REQUESTED', getTopics);
}

export default function* rootSaga(){
  yield [
    topicsSaga(),
    articlesSaga(),
    selectedArticleSaga()
  ]
}