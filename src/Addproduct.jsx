import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./Services/firebase";

const Addproduct = () => {
  const initialstate = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };
  const [value, setvalue] = useState(initialstate);

  const { title, price, description, category, image } = value;

  const handlechange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(value);
    // logic
    const final = window.confirm("are you sure want to add this product?");
    if (final) {
      try {
        const ref = await addDoc(collection(db, "product"), value);
        console.log(ref);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>add product</h1>
        <input
          type="text"
          value={title}
          name="title"
          onChange={handlechange}
          placeholder="add title"
        />
        <br></br>
        <input
          type="number"
          value={price}
          name="price"
          onChange={handlechange}
          placeholder="add price"
        />
        <br></br>
        <input
          type="text"
          value={description}
          name="description"
          onChange={handlechange}
          placeholder="add description"
        />
        <br></br>
        <input
          type="text"
          value={image}
          name="image"
          onChange={handlechange}
          placeholder="add img url"
        />
        <br></br>

        <select value={category} name="category" id="" onChange={handlechange}>
          <option value="">Select Category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
        <br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Addproduct;
