"use strict";
(function () {
    var myCustomVariables = 'Juan';
    console.log(typeof myCustomVariables);
    myCustomVariables: 1;
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: 'Bruce',
        age: 43,
        powers: ['Force'],
    };
    console.log(typeof myCustomVariables);
    console.log(myCustomVariables);
})();
//# sourceMappingURL=union-types.js.map