function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return function sayHi() {
        console.log(`Hi there...`)
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(2 + 3)
    }
}