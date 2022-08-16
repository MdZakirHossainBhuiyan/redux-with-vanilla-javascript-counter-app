//Select Dom Element
const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");


// Initial State

const initialState = {
    value: 0,
};

//Create Reducer Function

function counterReducer(state = initialState, action){
    if(action.type==="increment"){
        return{
            ...state,
            value: state.value + 1,
        };
    }
    else if(action.type==="decrement"){
        return{
            ...state,
            value: state.value - 1,
        };
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
    store.dispatch({
        type: 'increment',
    })
})

decrementEL.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    })
})