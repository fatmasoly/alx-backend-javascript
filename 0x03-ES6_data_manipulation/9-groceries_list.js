const groceries = (name, quantity) => [name, quantity];

export default function groceriesList() {
  const list = new Map([
    groceries('Apples', 10),
    groceries('Tomatoes', 10),
    groceries('Pasta', 1),
    groceries('Rice', 1),
    groceries('Banana', 5),
  ]);
  return list;
}
