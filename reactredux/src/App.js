/*
Redux: npm i 
 Reducers: Actions we do,
 Provider: who can use redux
 Store: Keeps all reducers in them use with <Provider>Components</Provider>
 useSelector: (Get) Direct tall to the store, to selectively ask state.
 useDispatch: (Update, Delete) Update state by calling specific reducer.
 Slice: simple category
*/

/*
 * Follow for Tailwind: https://tailwindcss.com/docs/guides/create-react-app
 * Redux:
 *  npm install @reduxjs/toolkit
 *  npm install react-redux
 *    - Create store -> 
 */

import { Provider } from 'react-redux';
import './style/App.css';
import { store } from './appStore/store';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <AddTodo></AddTodo>
      <hr/>
      <Todos/>
    </Provider>
  );
}

export default App;
