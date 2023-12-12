(() => {

    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    };

    console.log(flash);

    let superman: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super speed'],
    };
})();