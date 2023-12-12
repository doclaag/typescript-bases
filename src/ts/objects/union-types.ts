(() => {
    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustomVariable: string | number | Hero = 'Luis';
    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Luis',
        age: 20,
        powers: ['Super speed'],
    };
    console.log(typeof myCustomVariable);
})();