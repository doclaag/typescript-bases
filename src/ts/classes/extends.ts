(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            // console.log('Constructor Avenger Llamado')
        }
    }

    class Xmen extends Avenger {
        constructor(public name: string, public realName: string, isMutant: boolean = true) {
            super(name, realName);
            // console.log('Constructor Xmen Llamado')
        }

        get fullName() {
            return `${this.name} ${this.realName}`;
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }

            this.name = name;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // console.log(wolverine.fullName);
    // wolverine.fullName = 'Spiderman';
    // console.log(wolverine.fullName);


})();