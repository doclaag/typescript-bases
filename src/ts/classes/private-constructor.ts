(() => {

    class Apocalypse {

        static instance: Apocalypse;

        private constructor(public name: string) {

        };

        static callApocalypse(): Apocalypse {
            if (!Apocalypse.instance) {
                Apocalypse.instance = new Apocalypse('Soy Apocalipsis');
            };

            return Apocalypse.instance;
        };

        changeName(name: string): void {
            this.name = name;
        };
    };

    const apocalipsis = Apocalypse.callApocalypse();
    apocalipsis.changeName('Luis');

    console.log(apocalipsis);
})();