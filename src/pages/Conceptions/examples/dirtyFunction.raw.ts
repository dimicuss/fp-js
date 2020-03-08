export default function createDirtyFunction() {
    const a = 0;
    const b = 1;
    let state = 'unchangedState';

    function doSomethingInappropriate() {
        setTimeout(() => state = 'changedState', 1000);
    }

    return function dirtyFunction(c, d) {
        doSomethingInappropriate();
        return Math.random() + a + b + c + d;
    }
}