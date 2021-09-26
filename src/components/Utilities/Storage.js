function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// reduce
const nums = [34, 43, 34, 92];
let sum = 0;
for (const num of nums) {
  sum = sum + num;
}

const reducer = (previous, current) => previous + current;
nums.reduce(reducer, 0);

const items = [
  { id: 1, name: "Nail Polish", price: 25 },
  { id: 2, name: "Eye Mask", price: 30 },
  { id: 3, name: "Face Mask", price: 45 },
  { id: 4, name: "Googles", price: 95 },
];

let total = 0;
for (const item of items) {
  total = total + item.price;
}
const itemReducer = (previous, current) => previous + current.price;
items.reduce(itemReducer, 0);
// const itemTotal = items.reduce(itemReducer, 0);

export { add, multiply };
