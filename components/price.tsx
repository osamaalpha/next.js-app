import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
const Pricing = ({ setAllProducts }: any) => {
  const [less, setLess] = useState(0);
  const [greater, setGreater] = useState(0);

  const handleGreater = (e: any) => {
    setGreater(e.target.value);
  };
  const handleLess = (e: any) => {
    setLess(e.target.value);
  };

  useEffect(() => {
    const getLessPrice = async () => {
      if (less !== 0 && less.toString() !== "") {
        const res = await fetch(`/api/products/priceLessThan/${less}`);
        const data = await res.json();
        setAllProducts(data);
      }
    };
    getLessPrice();
  }, [less]);

  useEffect(() => {
    const getGreaterPrice = async () => {
      if (greater !== 0 && greater.toString() !== "") {
        const res = await fetch(`/api/products/priceGreaterThan/${greater}`);
        const data = await res.json();
        setAllProducts(data);
      }
    };
    getGreaterPrice();
  }, [greater]);

  return (
    <div>
      <h4>Price</h4>
      <label>Less than $</label>

      <input
        type="number"
        id="tentacles"
        name="tentacles"
        min="1"
        max="1000"
        value={less}
        onChange={(e) => handleLess(e)}
      ></input>
      <label>Greater than $</label>

      <input
        type="number"
        id="tentacles"
        name="tentacles"
        min="1"
        max="1000"
        value={greater}
        onChange={(e) => handleGreater(e)}
      ></input>
    </div>
  );
};

export default Pricing;
