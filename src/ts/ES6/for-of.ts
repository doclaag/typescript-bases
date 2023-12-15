(() => {

    type Avenger = {
        name: string,
        weapon: string
    };

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };

    const captain: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    };

    const avengers: Avenger[] = [ironman, thor, captain];

    for (const avenger of avengers) {
        console.log(`${avenger.name} y su arma es ${avenger.weapon}`);
    }

})();