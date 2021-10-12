import { useRouter } from "next/router";
import { useState } from "react";

const Pricing = ({ setAllProducts, allProducts }: any) => {
  const router = useRouter();
  const [less, setLess] = useState(0);
  const [greater, setGreater] = useState(0);

  const handleGreater = (e: any) => {
    setGreater(e.target.value);
  };
  const handleLess = (e: any) => {
    setLess(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      less !== 0 &&
      less.toString() !== "" &&
      greater !== 0 &&
      greater.toString() !== ""
    ) {
      const getPrice = async () => {
        const resLess = await fetch(`/api/products/priceLessThan/${less}`);
        const dataLess = await resLess.json();
        const resGreater = await fetch(
          `/api/products/priceGreaterThan/${greater}`
        );
        const dataGreater = await resGreater.json();
        setAllProducts([...dataLess, ...dataGreater]);
        router.push({
          query: `lessThan=${less}&greaterThan=${greater}`,
        });
      };

      getPrice();
    } else if (greater !== 0 && greater.toString() !== "") {
      const getGreaterPrice = async () => {
        const res = await fetch(`/api/products/priceGreaterThan/${greater}`);
        const data = await res.json();
        setAllProducts(data);
        router.push({
          query: `greaterThan=${greater}`,
        });
      };

      getGreaterPrice();
    } else if (less !== 0 && less.toString() !== "") {
      const getLessPrice = async () => {
        const res = await fetch(`/api/products/priceLessThan/${less}`);
        const data = await res.json();
        setAllProducts(data);
        router.push({
          query: `lessThan=${less}`,
        });
      };

      getLessPrice();
    } else {
      alert("please enter a price");
    }
  };
  return (
    <div>
      <h4>Price</h4>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <label>Less than $</label>
        <input
          type="number"
          id="tentacles"
          name="tentacles"
          max="1000"
          value={less}
          onChange={handleLess}
        ></input>
        <label>Greater than $</label>
        <input
          type="number"
          id="tentacles"
          name="tentacles"
          max="1000"
          value={greater}
          onChange={handleGreater}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Pricing;
