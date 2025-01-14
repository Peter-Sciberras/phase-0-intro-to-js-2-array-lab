// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  cats.push(name);
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
};

const appendCat = (name) => {
  const newCats = [...cats];
  newCats.push(name);
  return newCats;
};

const prependCat = (name) => {
  const newCats = [...cats];
  newCats.unshift(name);
  return newCats;
};

const removeLastCat = () => {
  const newCats = [...cats];
  newCats.pop();
  return newCats;
};

const removeFirstCat = () => {
  const newCats = [...cats];
  newCats.shift();
  return newCats;
};