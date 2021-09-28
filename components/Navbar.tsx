import { useState, useEffect } from "react";
import Brands from "./brands";
import Pricing from "./price";
import TagList from "./tagList";
const Navbar = ({ categories, setAllProducts }: any) => {
  const [category, setCategory] = useState("");

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const getCategoryProduct = async () => {
      const res = await fetch(`/api/getCategoryProducts/${category}`);
      const data = await res.json();
      setAllProducts(data);
      console.log(data);
    };
    getCategoryProduct();
  }, [category]);

  return (
    <>
      <h4>Categories</h4>
      <select onChange={(e: any) => handleCategory(e)} value={category}>
        <option disabled selected>
          {" "}
          -- select an option --{" "}
        </option>
        {categories.map((el: any) => {
          return <option>{el}</option>;
        })}
      </select>
      <TagList setAllProducts={setAllProducts} />
      <Brands setAllProducts={setAllProducts} />
      <Pricing />
    </>
  );
};

export default Navbar;
