// use localstroage as your db for now
const addToDb = (id) => {
  const exist = getDb();
  let shopping_cart = {};
  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exist);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
};

const getDb = () => localStorage.getItem("shopping_cart");
const updateDb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const exist = getDb();
  if (!exist) {
  } else {
    const shopping_cart = JSON.parse(exist);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
};

export { addToDb, removeFromDb };
