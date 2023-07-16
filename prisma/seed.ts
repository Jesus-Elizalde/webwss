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
        images: [
          "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/tiempo-legend-9-pro-fg-firm-ground-soccer-cleat-cfNbfw.jpeg",
          "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/ed24ff95-eb83-40ab-8df4-2322ab28c910.webp",
          "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/15c31cb9-5e22-42af-88d6-ae52da455757.png",
        ],
      },
      {
        name: "Nike Tiempo Legend 9 Pro FG",
        generalColor: [Color.WHITE, Color.PURPLE],
        detailedColor: ["White", "Purple"],
        price: 130,
        attribute: "JSJI12",
        images: [
          "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/a7827aab-a7ca-42ad-9754-1443df3f2097.png",
        ],
      },
      {
        name: "Nike Tiempo Legend 9 Pro FG",
        generalColor: [Color.WHITE, Color.YELLOW],
        detailedColor: ["White", "Yellow"],
        price: 130,
        attribute: "JSJI12",
        images: [
          "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/1ab324d3-d73f-42d7-98f2-9e496822912.png",
          "https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/cdd0890a-ab4c-404b-8123-6500b0f323ee.png",
        ],
      },
    ],
  },
  {
    name: "Nike Tiempo Legend 9 Academy FG",
    description:
      "The Nike Tiempo Legend 9 Academy FG takes the legendary touch of premium kangaroo leather and adds foot-hugging Quad-Fit mesh in the lining and a wraparound Flyknit tongue that feels supportive under your arch.",
    price: 80,
    collection: ["Footwear", "Featured"],
    vendor: "Nike",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Nike Tiempo Legend 9 Academy FG",
        generalColor: [Color.BLACK, Color.BLUE],
        detailedColor: ["Black", "Blue"],
        price: 80,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Tiempo Legend 9 Academy FG",
        generalColor: [Color.WHITE, Color.PURPLE],
        detailedColor: ["White", "Purple"],
        price: 80,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Tiempo Legend 9 Academy FG",
        generalColor: [Color.WHITE, Color.YELLOW],
        detailedColor: ["White", "Yellow"],
        price: 80,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
  {
    name: "Nike Mercurial Superfly 9 Elite FG",
    description:
      "The Nike Mercurial Superfly 9 Elite FG features a new look with specialized components to let you play your fastest from start to finish. A stretchy collar provides extra support, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.",
    price: 275,
    collection: ["Footwear", "Featured"],
    vendor: "Nike",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Nike Mercurial Superfly 9 Elite FG",
        generalColor: [Color.PINK, Color.GREEN],
        detailedColor: ["Pink", "Green"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Mercurial Superfly 9 Elite FG",
        generalColor: [Color.WHITE, Color.BLUE],
        detailedColor: ["White", "Blue"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Mercurial Superfly 9 Elite FG",
        generalColor: [Color.BLACK, Color.GREEN],
        detailedColor: ["Black", "Green"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
  {
    name: "Nike Mercurial Superfly 9 Pro FG",
    description:
      "The Nike Mercurial Superfly 9 Pro FG features a new look with specialized components to let you play your fastest from start to finish. A stretchy collar provides extra support, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.",
    price: 160,
    collection: ["Footwear", "Featured"],
    vendor: "Nike",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Nike Mercurial Superfly 9 Pro FG",
        generalColor: [Color.PINK, Color.GREEN],
        detailedColor: ["Pink", "Green"],
        price: 160,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Mercurial Superfly 9 Pro FG",
        generalColor: [Color.WHITE, Color.BLUE],
        detailedColor: ["White", "Blue"],
        price: 160,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Mercurial Superfly 9 Pro FG",
        generalColor: [Color.BLACK, Color.GREEN],
        detailedColor: ["Black", "Green"],
        price: 160,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
  {
    name: "Nike Mercurial Superfly 9 Academy FG",
    description:
      "The Nike Mercurial Superfly 9 Academy FG features a new look with specialized components to let you play your fastest from start to finish. A stretchy collar provides extra support, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.",
    price: 95,
    collection: ["Footwear", "Featured"],
    vendor: "Nike",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Nike Mercurial Superfly 9 Academy FG",
        generalColor: [Color.PINK, Color.GREEN],
        detailedColor: ["Pink", "Green"],
        price: 95,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Mercurial Superfly 9 Academy FG",
        generalColor: [Color.WHITE, Color.BLUE],
        detailedColor: ["White", "Blue"],
        price: 95,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Nike Mercurial Superfly 9 Academy FG",
        generalColor: [Color.BLACK, Color.GREEN],
        detailedColor: ["Black", "Green"],
        price: 95,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
  {
    name: "Adidas Predator Edge.1 FG",
    description:
      "The Adidas Predator Edge.1 FG takes elements from the original Predator and updates them for the modern game. The knit textile upper wraps around your foot for a true 360-degree fit, while rubber spines grip the ball for unmatched swerve.",
    price: 275,
    collection: ["Footwear", "Featured"],
    vendor: "Adidas",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Adidas Predator Edge.1 FG",
        generalColor: [Color.BLACK],
        detailedColor: ["Black"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Adidas Predator Edge.1 FG",
        generalColor: [Color.BLACK, Color.PINK],
        detailedColor: ["Black", "Pink"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Adidas Predator Edge.1 FG",
        generalColor: [Color.WHITE],
        detailedColor: ["White"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
  {
    name: "Adidas Predator Edge.2 FG",
    description:
      "The Adidas Predator Edge.2 FG takes elements from the original Predator and updates them for the modern game. The knit textile upper wraps around your foot for a true 360-degree fit, while rubber spines grip the ball for unmatched swerve.",
    price: 160,
    collection: ["Footwear", "Featured"],
    vendor: "Adidas",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Adidas Predator Edge.2 FG",
        generalColor: [Color.BLACK],
        detailedColor: ["Black"],
        price: 160,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Adidas Predator Edge.2 FG",
        generalColor: [Color.BLACK, Color.PINK],
        detailedColor: ["Black", "Pink"],
        price: 160,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Adidas Predator Edge.2 FG",
        generalColor: [Color.WHITE],
        detailedColor: ["White"],
        price: 160,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
  {
    name: "Adidas Predator Edge.3 FG",
    description:
      "The Adidas Predator Edge.3 FG takes elements from the original Predator and updates them for the modern game. The knit textile upper wraps around your foot for a true 360-degree fit, while rubber spines grip the ball for unmatched swerve.",
    price: 275,
    collection: ["Footwear", "Featured"],
    vendor: "Adidas",
    type: "Firm-Ground Soccer Cleat",
    variants: [
      {
        name: "Adidas Predator Edge.3 FG",
        generalColor: [Color.BLACK],
        detailedColor: ["Black"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Adidas Predator Edge.3 FG",
        generalColor: [Color.BLACK, Color.PINK],
        detailedColor: ["Black", "Pink"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
      {
        name: "Adidas Predator Edge.3 FG",
        generalColor: [Color.WHITE],
        detailedColor: ["White"],
        price: 275,
        attribute: "JSJI12",
        images: [],
      },
    ],
  },
];

const makeSizes = (variantId: string) => {
  const size = [11, 12, 13, 14, 15];
  const randomSize = size[Math.floor(Math.random() * size.length)] as number;

  const stockOnline = [0, 1, 2, 3, 4, 5];
  const stockInStore = [0, 1, 2, 3, 4, 5];

  const sizes = [];
  for (let i = 6.5; i <= randomSize; i += 0.5) {
    sizes.push({
      size: `${i}`,

      stockOnline: stockOnline[
        Math.floor(Math.random() * stockOnline.length)
      ] as number,
      stockAtStore: stockInStore[
        Math.floor(Math.random() * stockInStore.length)
      ] as number,
      barcode: faker.string.uuid(),
      sku: faker.string.uuid(),
      variantId: variantId,
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
          variants: {
            createMany: {
              data: product.variants.map((variant) => ({
                name: variant.name,
                generalColor: variant.generalColor,
                detailedColor: variant.detailedColor,
                price: variant.price,
                attribute: variant.attribute,
              })),
            },
          },
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

  const variants = await prisma.productVariant.findMany({});
  console.log({ variants });

  const prodWithVairants = await Promise.all(
    variants.map(async (variant, idx) => {
      return await prisma.productSize.createMany({
        data: makeSizes(variant.id),
      });
    })
  );

  // console.log({
  //   products,
  // });
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
