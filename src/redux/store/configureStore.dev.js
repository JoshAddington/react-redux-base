import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import routes from 'routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'redux/reducers';

const logger = createLogger({
    level: 'info',
    collapsed: false,
    logger: console,
    predicate: (getState, action) => true,
});

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  reduxReactRouter({ routes, createHistory }),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('redux/reducers', () => {
            const nextRootReducer = require('redux/reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
