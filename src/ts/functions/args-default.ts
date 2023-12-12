(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): String => {
        if (upper) {
            return `${firstName} ${lastName || '-'}`.toUpperCase();
        }
        return `${firstName} ${lastName || '-'}`;
    };

    const name = fullName('Tony', 'Stark', true);

    console.log({ name });
})();