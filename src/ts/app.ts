// Basic Functions
function add(a: number, b: number): number {
  return a + b;
}

const count = (heroes: string[]): number => {
  return heroes.length;
}

const superheroes: string[] = ["Flash", "Arrow", "Superman", "Green Lantern"];
count(superheroes);

// Default Parameters
const callBatman = (call: boolean = true): void => {
  if (call) {
    console.log("Bat signal activated");
  }
}

callBatman();

// Rest?
const joinHeroes = (...people: string[]): string => {
  return people.join(", ");
}

// Function Type
const doNothing = (number: number, text: string, booleanValue: boolean, array: string[]) => { }

// Create the function type that accepts the "doNothing" function
let doNothingEither: (n: number, t: string, b: boolean, a: string[]) => void;
doNothingEither = doNothing;
