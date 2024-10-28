export default function groceriesList() {
  const itemsobj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Bananas: 5,
  };
  const cartitem = new Map(Object.entries(itemsobj));
  return cartitem;
}
