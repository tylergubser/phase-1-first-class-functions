function receivesAFunction(spy) {
    console.log(spy());
    
}

function returnsANamedFunction() {
    return function named () {}
 
}

function returnsAnAnonymousFunction() {
    return function () {}
}
      
