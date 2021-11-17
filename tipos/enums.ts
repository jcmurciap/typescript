(() => {
    enum AudioLevel {
        min = 1, 
        medium,
        max = 10,
    }

    let currentAudio = AudioLevel.medium; // 1

    enum enumeracion {
        a=10,
        b, // 11
        c=9,
        d // 10
    };
    console.log(enumeracion.d); // 10

})();
