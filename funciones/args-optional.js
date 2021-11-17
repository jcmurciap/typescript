"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '');
    };
    var name = fullName('Camilo');
    console.log({ name: name });
})();
//# sourceMappingURL=args-optional.js.map