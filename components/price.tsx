import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
const Pricing = ({ setAllProducts }: any) => {
  //   const [brand, setBrand] = useState("");

  //   const handleBrand = (e: any) => {
  //     setBrand(e.target.value);
  //   };

  //   useEffect(() => {
  //     const getBrandProduct = async () => {
  //       const res = await fetch(`/api/getBrandProducts/${brand}`);
  //       const data = await res.json();
  //       setAllProducts(data);
  //       console.log(brand);
  //       console.log(data);
  //     };
  //     getBrandProduct();
  //   }, [brand]);

  return (
    <div>
      <h4>Price</h4>
      <label>Number of tentacles (10-100):</label>

      <input
        type="number"
        id="tentacles"
        name="tentacles"
        min="10"
        max="100"
      ></input>
      <label>Number of tentacles (10-100):</label>

      <input
        type="number"
        id="tentacles"
        name="tentacles"
        min="10"
        max="100"
      ></input>
    </div>
  );
};

export default Pricing;
