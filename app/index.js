import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

import { fetchMemes } from './actions';


const store = createStore(rootReducers, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	 document.getElementById('root')
);