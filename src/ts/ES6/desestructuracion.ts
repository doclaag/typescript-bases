(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        active: boolean,
        power: number
    };

    const avengers: Avengers = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        active: true,
        power: 1500,
    };

    // const { nick } = avengers;

    // console.log(nick.toUpperCase());


    const printAvenger = (avenger: Avengers) => {
        const { nick, ironman, vision } = avenger;
        console.log(nick.toUpperCase(), ironman, vision);
    }

    // printAvenger(avengers);

    const avengersArray: string[] = ['Capitan America', 'Ironman', 'Thor'];

    const [, , thor] = avengersArray;

    // console.log(thor.toUpperCase());
})();