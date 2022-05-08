import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector}from'react-redux';
import { asyncInrementAction } from './saga/counterSaga';

function App() {
  
  const counter = useSelector(state => state.count.counter)
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <div style={{fontSize:'3rem'}}>{counter}</div>
         <button onClick={()=>{dispatch(asyncInrementAction())}}>INCREMENT</button>
    </div>
  );
}

export default App;
