"use strict";
(function () {
    var fullName = function (firstName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return firstName + " " + args.join(' ');
    };
    var superman = fullName('juan', 'camilo');
    console.log({ superman: superman });
})();
//# sourceMappingURL=args-rest.js.map