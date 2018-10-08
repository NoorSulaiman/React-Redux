import React from 'react';
import { createStore } from './redux';
import { Provider } from './react-redux';
import { listReducer } from './reducers/listReducer';
import ListPage from './components/Pages/ListPage';

const store = createStore(listReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
};

export default App;