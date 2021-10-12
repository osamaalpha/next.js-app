import styles from "../styles/Home.module.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../components/common/context";
const CartItem = ({ product, setTotal, total }: any) => {
  const { cartProduct, setCartProduct } = useContext(GlobalContext);
  const [addQuantaity, setAddQuantaity] = useState(1);
  const handleAdd = (e: any, price: any) => {
    setAddQuantaity(addQuantaity + 1);
    setTotal(total + parseFloat(price));
  };

  const handleSubtract = (e: any, price: any) => {
    if (addQuantaity > 1) {
      setAddQuantaity(addQuantaity - 1);
      setTotal(total - parseFloat(price));
    } else {
      return;
    }
  };

  const handleClear = (el: any) => {
    const clearedCart = cartProduct.filter((item: any) => item.id !== el.id);
    setCartProduct(clearedCart);
    setTotal(total - parseFloat(el.price) * addQuantaity);
  };
  const defaultImg = (e: any) => {
    e.target.src = `https://www.verywellhealth.com/thmb/9tcRWldBb8cMqDqkjVanPUZYT9I=/3000x2000/filters:fill(87E3EF,1)/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg`;
  };
  return (
    <div className={styles.card} key={product.id}>
      <p>{product.brand}</p>
      <p>{product.name}</p>
      <p>
        {product.price}
        {product.price_sign}
      </p>
      <img src={product.image_link} onError={(e) => defaultImg(e)}></img>
      <div>{addQuantaity}</div>
      <button onClick={(e) => handleAdd(e, product.price)}>add</button>
      <button onClick={() => handleClear(product)}>clear</button>
      <button onClick={(e) => handleSubtract(e, product.price)}>
        subtract
      </button>
    </div>
  );
};

export default CartItem;
