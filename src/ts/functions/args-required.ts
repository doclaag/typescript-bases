(() => {
    const fullName = (firstName: string, lastName: string): String => {
        return `${firstName} ${lastName}`;
    };

    const name = fullName('Tony', 'Stark');

    console.log({ name });
})();