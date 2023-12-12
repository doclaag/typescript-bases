(() => {
    let avengers: number = 5;

    let villians: number = 12;

    console.log({avengers});

    if (avengers < villians) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    };

    avengers = Number('55A');
    console.log({avengers});

})();