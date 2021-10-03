import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
const Brands = ({ setAllProducts }: any) => {
  const [brand, setBrand] = useState("");
  const brands = [
    "almay",
    "alva",
    "    anna sui",
    "    annabelle",
    "benefit",
    "boosh",
    "    burt's bees",
    "    butter london",
    "    c'est moi",
    "    cargo cosmetics",
    "    china glaze",
    "    clinique",
    "    coastal classic creation",
    "    colourpop",
    "covergirl",
    "dalish",
    "deciem",
    "dior",
    "    dr. hauschka",
    "    e.l.f.",
    "essie",
    "fenty",
    "    glossier",
    "    green people",
    "    iman",
    "    l'oreal",
    "    lotus cosmetics usa",
    "    maia's mineral galaxy",
    "    marcelle",
    "    marienatie",
    "    maybelline",
    "    milani",
    "    mineral fusion",
    "    misa",
    "    mistura",
    "    moov",
    "    nudus",
    "    nyx",
    "    orly",
    "    pacifica",
    "    penny lane organics",
    "    physicians formula",
    "    piggy paint",
    "    pure anada",
    "    rejuva minerals",
    "    revlon",
    "    sally b's skin yummies",
    "    salon perfect",
    "    sante",
    "    sinful colours",
    "    smashbox",
    "    stila",
    "    suncoat",
    "    w3llpeople",
    "    wet n wild",
    "    zorah",
    "    zorah biocosmetiques",
  ];

  const handleBrand = (e: any) => {
    setBrand(e.target.value);
  };

  useEffect(() => {
    const getBrandProduct = async () => {
      if (brand !== "") {
        const res = await fetch(`/api/products/brand/${brand}`);
        const data = await res.json();
        setAllProducts(data);
      }
    };
    getBrandProduct();
  }, [brand]);

  return (
    <>
      <h4>Brands</h4>
      <select onChange={(e: any) => handleBrand(e)} value={brand}>
        <option disabled> -- select an option -- </option>
        {brands.map((el: any) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
    </>
  );
};

export default Brands;
