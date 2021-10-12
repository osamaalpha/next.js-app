import { GlobalContext } from "../components/common/context";
import { useContext, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import CartItem from "../components/cartItem";
const Cart = () => {
  const { cartProduct } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const ids = cartProduct.map((o: any) => o.id);
  const filtered = cartProduct.filter(
    ({ id }: any, index: number) => !ids.includes(id, index + 1)
  );

  const countTotal = () => {
    const totalPrice = filtered.reduce(
      (T: any, el: any) => T + parseFloat(el.price),
      0
    );
    setTotal(totalPrice);
  };
  useEffect(() => {
    countTotal();
  }, []);
  return (
    <>
      <h1>Total:{total.toFixed(2)}</h1>
      <div className={styles.grid}>
        {filtered.map((el: any) => {
          return (
            <CartItem
              key={el.id}
              product={el}
              setTotal={setTotal}
              total={total}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
