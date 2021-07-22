import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {useAppDispatch} from './redux/hooks';
import {persistIfNotFinished} from './redux/mainSlice';
import {store} from './redux/store';
import Loading from './components/Loading';
import './App.css';
import Home from './components/Home';

function App() {
  const dispatch = useAppDispatch();
  const persistor = persistStore(store, null, () => {
    dispatch(persistIfNotFinished());
  });

  return (
    <div className="App">
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Home />
      </PersistGate>
    </div>
  );
}

export default App;
