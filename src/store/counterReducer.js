const defaultState = {
    counter:5
  }

  const INCREMENT = 'ADD_CASH';
  const DECREMENT = 'GET_CASH';

export const counterReducer = (state = defaultState, action) =>{
    switch(action.type){
  
      case INCREMENT:
        return{
          ...state, counter: state.counter +1
        }
  
      case DECREMENT:
        return{
          ...state, counter: state.counter - 1
        }
      
      default: return state;
    }
  }

  export const actionIncrement = () => ({type:INCREMENT});
  export const actionDecrement = () => ({type:DECREMENT});