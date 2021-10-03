import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { SingleProduct } from "../stories/singleProduct";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const test = async () => {
    const respond = await fetch(`/api/products/products`);
    const data = await respond.json();
    const allCategories = data.map((product: any) => product.category);
    const sortedCategories = allCategories.filter(function (
      item: any,
      pos: any
    ) {
      return allCategories.indexOf(item) == pos && item !== "" && item !== null;
    });
    setAllProducts(data);
    setCategories(sortedCategories);
    setLoading(true);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar categories={categories} setAllProducts={setAllProducts} />
      <h1>Products</h1>

      {!loading ? (
        <h1>Loading</h1>
      ) : (
        <div className={styles.grid}>
          {allProducts.map((product: any) => {
            return (
              <SingleProduct product={product} size="small" key={product.id} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
