import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
const TagList = ({ setAllProducts }: any) => {
  const router = useRouter();
  const [tag, setTag] = useState("");
  const tags = [
    "Canadian",
    "CertClean",
    "Chemical Free",
    "Dairy Free",
    "    EWG Verified",
    "    EcoCert",
    "    Fair Trade",
    "    Gluten Free",
    "    Hypoallergenic",
    "    Natural",
    "    No Talc",
    "    Non-GMO",
    "Organic",
    "    Peanut Free Product",
    "    Sugar Free",
    "    USDA Organic",
    "    Vegan",
    "    alcohol free",
    "    cruelty free",
    "    oil free",
    "    purpicks",
    "    silicone free",
    "    water free",
  ];

  const handleTag = (e: any) => {
    setTag(e.target.innerText);
  };

  useEffect(() => {
    const getTagProduct = async () => {
      if (tag !== "") {
        const res = await fetch(`/api/products/tag/${tag}`);
        const data = await res.json();
        setAllProducts(data);
        router.push({
          query: `tag=${tag}`,
        });
      }
    };
    getTagProduct();
  }, [tag]);

  return (
    <div className={styles.grid}>
      <h4>Tags</h4>
      {tags.map((el: any) => {
        return (
          <a
            key={el}
            className={styles.tag}
            style={{ cursor: "pointer" }}
            onClick={(e) => handleTag(e)}
          >
            {el}
          </a>
        );
      })}
    </div>
  );
};

export default TagList;
