
const a = 0;
const b = 1;
let state = 'unchangedState';

function doSomethingInappropriate() {
    setTimeout(() => state = 'changedState', 1000);
}

export default function dirtyFunction(c, d) {
    doSomethingInappropriate();
    return Math.random() + a + b + c + d;
}