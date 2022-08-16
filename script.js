//Select Dom Element
const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ITEST = "iTest";

//action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}

// Initial State
const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 6
    }
};

//Create Reducer Function
function counterReducer(state = initialState, action){
    if(action.type===INCREMENT){
        return{
            ...state,
            value: state.value + action.payload,
        };
    }
    else if(action.type===DECREMENT){
        return{
            ...state,
            value: state.value - action.payload,
        };
    }
    else if(action.type===ITEST){
        const updateState  = {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1,
            },
        };
        return updateState; //ekhane properties jehetu alada akta object tai alada vabe spread kora lagche a, b er value gula ke pabar jonno
    }
    else{
        return state;
    }
}

//Create Store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEL.innerText = state.value.toString();
}

//Update UI initially
render();

store.subscribe(render);

//Button Click Listeners
incrementEL.addEventListener('click', () => {
    store.dispatch(increment(3))
})

decrementEL.addEventListener('click', () => {
    store.dispatch(decrement(2))
})