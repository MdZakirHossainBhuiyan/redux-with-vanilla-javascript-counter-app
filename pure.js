const state = {
    value: 5,
};

const impure = (multiplier) => {
    state.value = state.value * multiplier;
}

const pure = (state, multiplier) => {
    state = state * multiplier;
}

// ekhane impure function er vitore state.value ke amra use korechi. jeta ekta bairer variable. impure function er local variable na. state.value k impure function e sorasori muted kora hoyeche.

//pure function e eki input e eki output dei... kintu impure function e first call er khetre dicche 10 and second call er khetre dicche 20... fole impure() function take amra pure function bolte partechi na.

//but pure() function gives us a same value for all different call

impure(2);
console.log(state.value);

impure(2);
console.log(state.value);

pure(state.value, 2);
console.log(state.value);

pure(state.value, 2);
console.log(state.value);