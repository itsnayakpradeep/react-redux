import logo from './logo.svg';
import './App.css';
import Shopkart from './modules/shoppincart/shopkart';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Shopkart />
        </Provider>
      </header>
    </div>
  );
}

export default App;
