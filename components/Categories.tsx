import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Categories = ({ categories, setAllproducts }: any) => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const getCategoryProduct = async () => {
      if (category !== "") {
        const res = await fetch(`/api/products/category/${category}`);
        const data = await res.json();
        setAllproducts(data);
        router.push({
          query: `category=${category}`,
        });
      }
    };
    getCategoryProduct();
  }, [category]);
  return (
    <>
      <h4>Categories</h4>
      <select onChange={(e: any) => handleCategory(e)} value={category}>
        <option value={"DEFAULT"} disabled>
          {" "}
          -- select an option --{" "}
        </option>
        {categories.map((el: any) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
    </>
  );
};

export default Categories;
