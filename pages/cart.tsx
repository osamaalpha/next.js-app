import { GlobalContext } from "../components/common/context";
import { useContext, useState } from "react";
import styles from "../styles/Home.module.css";
const Cart = () => {
  const { cartProduct, setCartProduct } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const countTotal = () => {
    const totalPrice = cartProduct.reduce(
      (T: any, el: any) => T + parseInt(el.price),
      0
    );
    return totalPrice;
  };

  const handleClear = (el: any) => {
    const clearedCart = cartProduct.filter((item: any) => item.id !== el.id);
    setCartProduct(clearedCart);
  };

  const defaultImg = (e: any) => {
    e.target.src = `https://www.verywellhealth.com/thmb/9tcRWldBb8cMqDqkjVanPUZYT9I=/3000x2000/filters:fill(87E3EF,1)/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg`;
  };
  return (
    <>
      <h1>Total:{countTotal()}</h1>
      <div className={styles.grid}>
        {cartProduct.map((el: any) => {
          return (
            <div className={styles.card}>
              <p>{el.brand}</p>
              <p>{el.name}</p>
              <p>
                {el.price}
                {el.price_sign}
              </p>
              <img src={el.image_link} onError={(e) => defaultImg(e)}></img>
              <button onClick={() => handleClear(el)}>clear</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
