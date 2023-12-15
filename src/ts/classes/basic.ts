(() => {

    class Avenger {

        // public name: string;
        // public weapon: string;
        // public realName?: string;

        static avgAge: number = 35;
        static getAvgAge() {
            return Avenger.avgAge;
        }

        constructor(
            private name: string,
            public weapon: string,
            public realName?: string
        ) { };

        public bio() {
            return `${this.name} ${this.weapon} ${this.realName}`;
        }
    };

    const antman = new Avenger('Antman', 'Ants', 'Scott Lang');

    // console.log(antman);
    // console.log(antman.bio());

    // console.log(Avenger.avgAge);
    // console.log(Avenger.getAvgAge());
})();