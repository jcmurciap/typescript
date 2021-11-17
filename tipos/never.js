"use strict";
(function () {
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Help!');
    console.log('Hello world');
})();
//# sourceMappingURL=never.js.map