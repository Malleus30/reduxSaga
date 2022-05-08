import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector}from'react-redux';
import { asyncDecrementAction, asyncInrementAction } from './saga/counterSaga';
import { fetchUsersSagaAction } from './store/customerReducer';

function App() {
  
  const counter = useSelector(state => state.count.counter);
  const users = useSelector(state => state.customers.customers);
  console.log(users);
  const dispatch = useDispatch();
  

  return (
    <div className="App">
      <div style={{fontSize:'3rem'}}>{counter}</div>
         <button className="btn" onClick={() => dispatch(asyncInrementAction())}>ИНКРЕМЕНТ++</button>
         <button className="btn" onClick={() => dispatch(asyncDecrementAction())}>ДЕКРЕМЕНТ--</button>
         <button className="btn" onClick={() => dispatch(fetchUsersSagaAction())}>GET USERS</button>
         {users.map((user, index) =><div key={index}>{user.name}</div> )}
    </div>
  );
}

export default App;  
