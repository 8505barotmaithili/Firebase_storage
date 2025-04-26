import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./Services/firebase";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  const getdata = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product"));
      let newarray = [];
      querySnapshot.forEach((doc) => {
        newarray.push({ ...doc.data(), id: doc.id });
      });
      setProducts(newarray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // Delete product
  const handleclick = async (id) => {
    const final = window.confirm("Are you sure want to delete?");
    if (final) {
      try {
        await deleteDoc(doc(db, "product", id));
        alert("Product deleted");
        getdata();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditClick = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const productRef = doc(db, "product", editingId);
      const updatedProduct = { ...form };
      delete updatedProduct.id;
      await updateDoc(productRef, updatedProduct);
      alert("Product updated!");
      setEditingId(null);
      setForm({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });
      getdata();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>

      {products.map((ele) => (
        <div key={ele.id}>
          <h2>{ele.title}</h2>
          <img src={ele.image} alt={ele.title} width={150} />
          <h3>₹ {ele.price}</h3>
          <h4>{ele.category}</h4>
          <p>{ele.description}</p>
          <button onClick={() => handleclick(ele.id)}>Delete</button>
          <button onClick={() => handleEditClick(ele)}>Edit</button>
        </div>
      ))}

      {editingId && (
        <form onSubmit={handleUpdateSubmit}>
          <h2>Edit Product</h2>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
          <br />
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
};

export default Product;
