import Counter from './components/Counter';
import { createStore } from 'redux';

function reducer(state, action) {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer);

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;
