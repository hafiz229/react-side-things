import React from "react";
import { addToDb, removeFromDb } from "../Utilities/Fakedb";

const Cosmetic = (props) => {
  console.log(props.cosmetic);
  const { name, price, id } = props.cosmetic;
  const handlePurchase = (id) => {
    // set to local storage
    console.log(id);
    addToDb(id);
  };
  const handleRemove = (id) => {
    removeFromDb(id);
  };

  return (
    <div>
      <h1>Name: {name} </h1>
      <p>
        id: {id} Price: {price}
      </p>
      <button onClick={() => handlePurchase(id)}>Purchase</button>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
