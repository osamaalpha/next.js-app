import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useContext, useState } from "react";
import { GlobalContext } from "../components/common/context";
interface CardProps {
  product: any;
  size: "small" | "large";
}
export const SingleProduct = ({
  product,
  size = "small",
  ...props
}: CardProps): any => {
  const { cartProduct, setCartProduct } = useContext(GlobalContext);
  const handleCart = (e: any) => {
    setCartProduct([...cartProduct, product]);
  };

  const defaultImg = (e: any) => {
    e.target.src = `https://www.verywellhealth.com/thmb/9tcRWldBb8cMqDqkjVanPUZYT9I=/3000x2000/filters:fill(87E3EF,1)/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg`;
  };
  const renderComponent = (): any => {
    return (
      <div>
        <p>{product.brand}</p>
        <p>{product.name}</p>
        <p>
          {product.price}
          {product.price_sign}
        </p>
        {size === "large" && <p>{product.description}</p>}
        <img src={product.image_link} onError={(e) => defaultImg(e)}></img>
        <Link href={"#"}>
          <button
            onClick={(e) => {
              handleCart(e);
            }}
          >
            Add to Cart
          </button>
        </Link>
      </div>
    );
  };
  return (
    <>
      {size === "large" ? (
        renderComponent()
      ) : (
        <>
          <Link href={`/largeProduct/${product.id}`} {...props}>
            <a className={styles.card}>{renderComponent()}</a>
          </Link>
        </>
      )}
    </>
  );
};
