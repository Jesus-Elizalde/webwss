import { PrismaClient, Color } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const Products = [
  {
    name: "Nike Tiempo Legend 9 Pro FG",
    description:
      "The Nike Tiempo Legend 9 Pro FG takes the legendary touch of premium kangaroo leather and adds foot-hugging Quad-Fit mesh in the lining and a wraparound Flyknit tongue that feels supportive under your arch.",
    price: 130,
    collection: ["Footwear", "Featured"],
    vendor: "Nike",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Nike Tiempo Legend 9 Pro FG",
        generalColor: [Color.BLACK, Color.BLUE],
        detailedColor: ["Black", "Blue"],
        price: 130,
        attribute: "JSJI12",
      },
      {
        name: "Nike Tiempo Legend 9 Pro FG",
        generalColor: [Color.WHITE, Color.PURPLE],
        detailedColor: ["White", "Purple"],
        price: 130,
        attribute: "JSJI12",
      },
      {
        name: "Nike Tiempo Legend 9 Pro FG",
        generalColor: [Color.WHITE, Color.YELLOW],
        detailedColor: ["White", "Yellow"],
        price: 130,
        attribute: "JSJI12",
      },
    ],
  },
];

const makeSizes = () => {
  const size = [11, 12, 13, 14, 15];
  const randomSize = size[Math.floor(Math.random() * size.length)] as number;

  const stockOnline = [0, 1, 2, 3, 4, 5];
  const stockInStore = [0, 1, 2, 3, 4, 5];

  const sizes = [];
  for (let i = 1; i <= randomSize; i++) {
    sizes.push({
      size: i,
      stockOnline: stockOnline[
        Math.floor(Math.random() * stockOnline.length)
      ] as number,
      stockInStore: stockInStore[
        Math.floor(Math.random() * stockInStore.length)
      ] as number,
      barcode: faker.string.uuid(),
      sku: faker.string.uuid(),
    });
  }
  return sizes;
};

async function main() {
  // Brands
  const nike = await prisma.vendor.upsert({
    where: { name: "Nike" },
    update: {},
    create: {
      name: "Nike",
    },
  });
  const adidas = await prisma.vendor.upsert({
    where: { name: "Adidas" },
    update: {},
    create: {
      name: "Adidas",
    },
  });
  const puma = await prisma.vendor.upsert({
    where: { name: "Puma" },
    update: {},
    create: {
      name: "Puma",
    },
  });
  const newBalance = await prisma.vendor.upsert({
    where: { name: "New Balance" },
    update: {},
    create: {
      name: "New Balance",
    },
  });

  // Collections

  const footwear = await prisma.collection.upsert({
    where: { name: "Footwear" },
    update: {},
    create: {
      name: "Footwear",
      slug: "footwear",
      description: "Footwear description",
    },
  });
  const jerseys = await prisma.collection.upsert({
    where: { name: "Jerseys" },
    update: {},
    create: {
      name: "Jerseys",
      slug: "jerseys",
      description: "Jerseys description",
    },
  });
  const accessories = await prisma.collection.upsert({
    where: { name: "Accessories" },
    update: {},
    create: {
      name: "Accessories",
      slug: "accessories",
      description: "Accessories description",
    },
  });
  const apparel = await prisma.collection.upsert({
    where: { name: "Apparel" },
    update: {},
    create: {
      name: "Apparel",
      slug: "apparel",
      description: "Apparel description",
    },
  });
  const featured = await prisma.collection.upsert({
    where: { name: "Featured" },
    update: {},
    create: {
      name: "Featured",
      slug: "featured",
      description: "Featured description",

      //   posts: {
      //     create: {
      //       title: "Check out Prisma with Next.js",
      //       content: "https://www.prisma.io/nextjs",
      //       published: true,
      //     },
      //   },
    },
  });
  // Products
  const products = await Promise.all(
    Products.map(async (product) => {
      return await prisma.product.upsert({
        where: { name: product.name },
        update: {},
        create: {
          name: product.name,
          description: product.description,
          type: product.type,
          price: product.price,
          vendor: {
            connect: {
              name: product.vendor,
            },
          },
          collections: {
            connect: product.collection.map((collection) => ({
              name: collection,
            })),
          },
          // variants: {
          //   createMany: {
          //     data: product.variants.map((variant) => ({
          //       name: variant.name,
          //       generalColor: variant.generalColor,
          //       detailedColor: variant.detailedColor,
          //       price: variant.price,
          //       attribute: variant.attribute,
          //     })),
          //   },
          // },
        },
      });
    })
  );

  // const variants = await Promise.all(
  //   products.map(async (product, idx) => {
  //     return await prisma.productVariant.upsert({
  //       where: { id: Products[idx].id },
  //       update: {},
  //       create: {},
  //     });
  //   })
  // );

  console.log({
    products,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
