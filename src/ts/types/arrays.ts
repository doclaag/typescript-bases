(() => {
  // Array
  const array: number[] = [1, 2, 3];

  console.log(array);
  array.push(4);
  console.log(array);

  const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

  villians.forEach((villian) => {
    console.log(villian.toUpperCase());
  });
})();
