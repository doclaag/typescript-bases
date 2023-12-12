(()=>{

    let avenger:any = 123.459222;
    let exists;
    let power;

    console.log(<number>avenger.toFixed(2));
    console.log(typeof avenger);
    
    avenger = 'Dr Strange';
    console.log((avenger as string).charAt(0));
    console.log(typeof avenger);

    console.log(exists);
    console.log(typeof exists);

    console.log(power);
    console.log(typeof power);
})();