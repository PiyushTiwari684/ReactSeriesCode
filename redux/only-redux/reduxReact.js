const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

const reducer = (store = INITIAL_VALUE, action) =>{
    let newStore = store;
    if(action.type === 'INCREAMENT'){
        newStore = {counter:store.counter + 1}
    }else if(action.type === 'DECREAMENT'){
        newStore = {counter:store.counter -1};
    }else if(action.type === 'ADDITION'){
        newStore = {counter:store.counter + action.payload.number};
    }
    return newStore;
}

const store = redux.createStore(reducer);
const subscriber = () =>{
      const state = store.getState();
      console.log(state);
}

store.subscribe(subscriber);    // subscribe to the store
store.dispatch({type: 'INCREAMENT'}); // dispatch an action
store.dispatch({type: 'DECREAMENT'}); // dispatch an action
store.dispatch({type: 'INCREAMENT'}); // dispatch an action
store.dispatch({type: 'ADDITION',payload: {number:7}}); // dispatch an actioncd
store.dispatch({type: 'DECREAMENT'}); 