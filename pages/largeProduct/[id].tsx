import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { SingleProduct } from "../../stories/singleProduct";
export default function Id({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <SingleProduct size="large" product={product as any} />
      )}
    </>
  );
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const products = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const data = await products.json();
  const arrProduct = data.filter((el: any) => el.id === parseInt(id));
  const product = arrProduct[0];
  return {
    props: {
      product,
    },
    // By specifying this, we inform Next.js to use ISR for the page
    // Returns the current (stale) version quickly and triggers the revalidation after 200 seconds
    // (max-age and stale-while-revalidate cache headers)
    revalidate: 200,
  };
}
export async function getStaticPaths() {
  const responce = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json`
  );
  const product = await responce.json();
  const paths = product.map((el: any) => {
    return {
      params: { id: el.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
    // By specifying this, we inform Next.js to use ISR for the page
    // Returns the current (stale) version quickly and triggers the revalidation after 200 seconds
    // (max-age and stale-while-revalidate cache headers)
  };
}
