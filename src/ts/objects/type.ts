(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    };

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    };

    console.log(flash);

    let superman: Hero = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super speed'],
        getName() {
            return this.name;
        }
    };

    // console.log(superman.getName());
})();