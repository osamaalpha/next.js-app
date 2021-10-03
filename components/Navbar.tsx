import { ReactElement, useRef } from "react";
import styles from "../styles/Home.module.css";
import Icon from "./Icon";
import Link from "next/link";
import Brands from "./brands";
import Pricing from "./price";
import TagList from "./tagList";
import Categories from "./Categories";
const Navbar = ({ categories, setAllProducts }: any): ReactElement => {
  const ref = useRef();
  return (
    <>
      <div className={styles.navbar}>
        <Categories setAllproducts={setAllProducts} categories={categories} />
        <Brands setAllProducts={setAllProducts} />
        <Pricing setAllProducts={setAllProducts} />
        <Link href={{ pathname: "/cart" }}>
          <Icon ref={ref} />
        </Link>
      </div>
      <TagList setAllProducts={setAllProducts} />
    </>
  );
};

export default Navbar;
