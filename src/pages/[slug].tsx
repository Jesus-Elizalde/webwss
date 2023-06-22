import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

const CollectionPage = () => {
  const router = useRouter();
  const { slug } = router.query as {
    slug: string;
  };

  const { data: products } = api.product.getMany.useQuery({
    name: slug,
  });
  console.log(
    "🚀 ~ file: [...slug].tsx:17 ~ CollectionPage ~ products:",
    products
  );

  return (
    <div className="lg:grid lg:grid-cols-3">
      {products?.map((product) => (
        <Link
          href={`/products/${product.id}`}
          className="carousel-item"
          key={product.id}
        >
          <div className="card card-normal min-h-[300px] min-w-[300px] bg-base-100">
            <figure>
              <Image
                src={
                  product.variants[0]?.images[0]?.url ||
                  "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/notfoundimg.jpg"
                }
                alt={product.name}
                height={375}
                width={375}
                className="object-contain"
              />
            </figure>
            <div className=" mr-4 mt-3 flex flex-col">
              <div className="flex justify-between">
                <h2 className="font-bold">{product.name}</h2>
                <p className="text-info-content">{`$${product.price}`}</p>
              </div>
              <p className="text-sm text-info-content">{product.type}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionPage;
