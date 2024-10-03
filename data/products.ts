import colors from "tailwindcss/colors";

export const PRODUCTS: Array<TProduct> = [
 {
  rate: {
   current: 4.5,
  },
  id: "306fef62-5565-48ff-bbea-f3527d074491",
  price: {
   price: 43,
   formattedPrice: "43 $",
  },
  name: "A Product With a Long Title",
  images: [
   {
    src: "/images/products/product-image-2.jpg",
    alt: "Image 2",
    id: "739acb44-e2a0-4ff1-a984-1ab829bd6931",
   },
   {
    src: "/images/products/product-image-1.jpg",
    alt: "Image 1",
    id: "deab5734-ea4a-4243-b785-ac807970eb8f",
   },
   {
    src: "/images/products/product-image-3.jpg",
    alt: "Image 3",
    id: "df2f2cfb-e635-4ad8-b3d0-f966da57ed87",
   },
  ],
  qty: 30,
  body:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis dicta dignissimos dolore error ex exercitationem fugiat maiores, minima modi odio officiis placeat qui repellendus sequi similique tempora, temporibus vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Error eveniet excepturi iste nemo, nobis quam quidem sint. Beatae consequatur cum dolorum, eos harum, magnam nemo nisi provident quibusdam, unde voluptates.",
  slug: "a-bag",
  variants: {
   colors: [
    { id: "4", name: "Black", value: colors.black },
    { id: "11", name: "White", value: colors.white },
   ],
  },
  comments: [
   {
    id: "8",
    rate: 3,
    body:
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Animi, at blanditiis culpa debitis dolorem, dolorum ea exercitationem nobis,\n perferendis perspiciatis provident quis quo quos repellat repellendus sunt unde velit voluptatem!",
    user: { name: "NullEe_", id: "0" },
    createdAt: "2024/2/10",
   },
   {
    id: "111",
    rate: 5,
    body:
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Animi, xercitationem nobis,\n perferendis perspiciatis provident quis quo quos repellat repellendus sunt unde velit voluptatem!",
    user: { name: "_NullEe_", id: "0" },
    createdAt: "2024/2/10",
   },
  ],
 },
 {
  rate: { current: 4.1 },
  id: "306fef62-5565-48ff-bbea-f3527d074492",
  price: {
   price: 34,
   formattedPrice: "34 $",
  },
  name: "A Shoes With a Long Title",
  images: [
   {
    src: "/images/products/product-image-4.jpg",
    alt: "Image 2",
    id: "739acb44-e2a0-4ff1-a984-1ab829bd6931",
   },
   {
    src: "/images/products/product-image-5.jpg",
    alt: "Image 1",
    id: "deab5734-ea4a-4243-b785-ac807970eb8f",
   },
   {
    src: "/images/products/product-image-6.jpg",
    alt: "Image 3",
    id: "df2f2cfb-e635-4ad8-b3d0-f966da57ed87",
   },
  ],
  qty: 30,
  body:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis dicta dignissimos dolore error ex exercitationem fugiat maiores, minima modi odio officiis placeat qui repellendus sequi similique tempora, temporibus vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Error eveniet excepturi iste nemo, nobis quam quidem sint. Beatae consequatur cum dolorum, eos harum, magnam nemo nisi provident quibusdam, unde voluptates.",
  slug: "a-shoes",
  variants: {
   colors: [
    { id: "1", name: "Red", value: colors.red["500"] },
    { id: "2", name: "Blue", value: colors.blue["500"] },
    { id: "3", name: "Black", value: colors.black },
   ],
   sizes: [
    { id: "4", name: "SM", value: "sm" },
    { id: "5", name: "MD", value: "md" },
    {
     id: "6",
     name: "LG",
     value: "lg",
    },
    { id: "7", name: "XL", value: "xl" },
   ],
  },
  comments: [
   {
    id: "5",
    rate: 4,
    body:
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Animi, at blanditiis culpa debitis dolorem, dolorum ea exercitationem nobis,\n perferendis perspiciatis provident quis quo quos repellat repellendus sunt unde velit voluptatem!",
    user: { name: "Saeed_", id: "1" },
    createdAt: "2024/2/10",
   },
  ],
 },
];

// const a = {
//  choices: {
//   variants: {
//    colors: "Red",
//    sizes: "sm",
//   },
//   price: {
//    price: 52,
//    formattedPrice: "52 $",
//   },
//  },
// };
