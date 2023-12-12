type Automobile = {
  body: string;
  model: string;
  bulletproof: boolean;
  passengers: number;
  shoot?: () => void;
}

// Objects
const batmobile: Automobile = {
  body: "Black",
  model: "6x6",
  bulletproof: true,
  passengers: 4
};

const bumblebee: Automobile = {
  body: "Yellow with black",
  model: "4x2",
  bulletproof: true,
  passengers: 4,
  shoot() { // The shoot method is optional
    console.log("Shooting");
  }
};

type Villain = {
  name: string;
  age?: number;
  mutant: boolean;
}

// Villains should be an array of custom objects
const villains: Villain[] = [
  {
    name: "Lex Luthor",
    age: 54,
    mutant: false
  },
  {
    name: "Erik Magnus Lehnsherr",
    age: 49,
    mutant: true
  },
  {
    name: "James Logan",
    age: undefined,
    mutant: true
  }
];

// Multiple types
// Create two types, one for Charles and another for Apocalypse
type Charles = {
  power: string;
  height: number;
}

const charles: Charles = {
  power: "psychic",
  height: 1.78
};

type Apocalypse = {
  leader: boolean;
  members: string[];
}

const apocalypse: Apocalypse = {
  leader: true,
  members: ["Magneto", "Storm", "Psylocke", "Angel"]
}

// Mystique should be able to be either of those two mutants (Charles or Apocalypse)
let mystique: Charles | Apocalypse;

mystique = charles;
mystique = apocalypse;
