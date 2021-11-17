"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerzaHero;
    (function (fuerzaHero) {
        fuerzaHero[fuerzaHero["acuaman"] = 0] = "acuaman";
        fuerzaHero[fuerzaHero["batman"] = 1] = "batman";
        fuerzaHero[fuerzaHero["flash"] = 5] = "flash";
        fuerzaHero[fuerzaHero["superman"] = 100] = "superman";
    })(fuerzaHero || (fuerzaHero = {}));
    var fuerzaAcuaman = fuerzaHero.acuaman;
    var fuerzaBatman = fuerzaHero.batman;
    var fuerzaFlash = fuerzaHero.flash;
    var fuerzaSuperman = fuerzaHero.superman;
    function activar_batiseñal() {
        return 'activada';
    }
    console.log(activar_batiseñal());
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map