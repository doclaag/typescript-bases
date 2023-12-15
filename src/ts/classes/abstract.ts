(() => {
    abstract class Mutant {
        constructor(public name: string, public realName: string) { }
        public mutate() {
            console.log(`${this.name} is mutating!`);
        };
    };

    class Xmen extends Mutant {
        constructor(public name: string, public realName: string, public isMutant: boolean = true) {
            super(name, realName);
        };

        mutate() {
            console.log(`${this.name} is mutating!`);
        };
    };

    class Villian extends Mutant {
        constructor(public name: string, public realName: string, public isMutant: boolean = true) {
            super(name, realName);
        };

        mutate() {
            console.log(`${this.name} is mutating!`);
        };

    };

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolverine);
    // wolverine.mutate();

    const magneto = new Villian('Magneto', 'Magnus', true);
    // console.log(magneto);
    // magneto.mutate();

    const printName = (character: Mutant) => {
        console.log(character.name);
    };

    // printName(wolverine);

})();