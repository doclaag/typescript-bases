(()=>{
    const batman:string = 'Batman';
    const greenLantern:string = "Linterna Verde";
    const flash:string = `Flash`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase())
    console.log(batman[10]?.toUpperCase() || 'No está presente');
})();