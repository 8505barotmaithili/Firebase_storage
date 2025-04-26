// import { addDoc, collection } from "firebase/firestore";
// import React, { useState } from "react";
// import { db } from "./Services/firebase";

// const Addproduct = () => {
//   const initialstate = {
//     title: "",
//     price: "",
//     description: "",
//     category: "",
//     image: "",
//   };
//   const [value, setvalue] = useState(initialstate);

//   const { title, price, description, category, image } = value;

//   const handlechange = (e) => {
//     setvalue({ ...value, [e.target.name]: e.target.value });
//   };

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     // console.log(value);
//     // logic
//     const final = window.confirm("are you sure want to add this product?");
//     if (final) {
//       try {
//         const ref = await addDoc(collection(db, "product"), value);
//         console.log(ref);
//         window.location.reload();
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <h1>add product</h1>
//         <input
//           type="text"
//           value={title}
//           name="title"
//           onChange={handlechange}
//           placeholder="add title"
//         />
//         <br></br>
//         <input
//           type="number"
//           value={price}
//           name="price"
//           onChange={handlechange}
//           placeholder="add price"
//         />
//         <br></br>
//         <input
//           type="text"
//           value={description}
//           name="description"
//           onChange={handlechange}
//           placeholder="add description"
//         />
//         <br></br>
//         <input
//           type="text"
//           value={image}
//           name="image"
//           onChange={handlechange}
//           placeholder="add img url"
//         />
//         <br></br>

//         <select value={category} name="category" id="" onChange={handlechange}>
//           <option value="">Select Category</option>
//           <option value="men's clothing">men's clothing</option>
//           <option value="jewelery">jewelery</option>
//           <option value="electronics">electronics</option>
//           <option value="women's clothing">women's clothing</option>
//         </select>
//         <br></br>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default Addproduct;
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
    const final = window.confirm("Are you sure you want to add this product?");
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
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <form
        onSubmit={handlesubmit}
        style={{
          backgroundColor: "#f9f9f9",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1
          style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
        >
          Add Product
        </h1>

        <input
          type="text"
          value={title}
          name="title"
          onChange={handlechange}
          placeholder="Add title"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="number"
          value={price}
          name="price"
          onChange={handlechange}
          placeholder="Add price"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          value={description}
          name="description"
          onChange={handlechange}
          placeholder="Add description"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          value={image}
          name="image"
          onChange={handlechange}
          placeholder="Add image URL"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={category}
          name="category"
          onChange={handlechange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
