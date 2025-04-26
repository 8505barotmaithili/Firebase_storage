// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { db } from "./Services/firebase";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     price: "",
//     description: "",
//     category: "",
//     image: "",
//   });
//   const [editingId, setEditingId] = useState(null);

//   const getdata = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "product"));
//       let newarray = [];
//       querySnapshot.forEach((doc) => {
//         newarray.push({ ...doc.data(), id: doc.id });
//       });
//       setProducts(newarray);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   // Delete product
//   const handleclick = async (id) => {
//     const final = window.confirm("Are you sure want to delete?");
//     if (final) {
//       try {
//         await deleteDoc(doc(db, "product", id));
//         alert("Product deleted");
//         getdata();
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const handleEditClick = (product) => {
//     setForm(product);
//     setEditingId(product.id);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const productRef = doc(db, "product", editingId);
//       const updatedProduct = { ...form };
//       delete updatedProduct.id;
//       await updateDoc(productRef, updatedProduct);
//       alert("Product updated!");
//       setEditingId(null);
//       setForm({
//         title: "",
//         price: "",
//         description: "",
//         category: "",
//         image: "",
//       });
//       getdata();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Product List</h1>

//       {products.map((ele) => (
//         <div key={ele.id}>
//           <h2>{ele.title}</h2>
//           <img src={ele.image} alt={ele.title} width={150} />
//           <h3>₹ {ele.price}</h3>
//           <h4>{ele.category}</h4>
//           <p>{ele.description}</p>
//           <button onClick={() => handleclick(ele.id)}>Delete</button>
//           <button onClick={() => handleEditClick(ele)}>Edit</button>
//         </div>
//       ))}

//       {editingId && (
//         <form onSubmit={handleUpdateSubmit}>
//           <h2>Edit Product</h2>
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <input
//             type="text"
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             name="image"
//             value={form.image}
//             onChange={handleChange}
//           />
//           <br />
//           <button type="submit">Update Product</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Product;
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

  const handleclick = async (id) => {
    const final = window.confirm("Are you sure you want to delete?");
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
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Product List
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((ele) => (
          <div
            key={ele.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <h2 style={{ fontSize: "20px", color: "#333" }}>{ele.title}</h2>
            <img
              src={ele.image}
              alt={ele.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#4CAF50" }}>₹ {ele.price}</h3>
            <h4 style={{ color: "#888" }}>{ele.category}</h4>
            <p style={{ fontSize: "14px", color: "#666" }}>{ele.description}</p>

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleclick(ele.id)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#f44336",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>

              <button
                onClick={() => handleEditClick(ele)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#2196F3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingId && (
        <form
          onSubmit={handleUpdateSubmit}
          style={{
            marginTop: "40px",
            padding: "30px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "400px",
            margin: "40px auto 0",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Edit Product
          </h2>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            required
          />

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Update Product
          </button>
        </form>
      )}
    </div>
  );
};

export default Product;
