declare type ID = string;
declare type TProduct = {
 id: ID;
 name: string;
 slug: string;
 body: string;
 price: TPrice;
 images: Array<TImage>;
 qty: number;
 variants: {
  [key: string]: Array<TVariant>;
 };
 rate: {
  current: number;
 };
 comments: Array<TComment>;
};

declare type TPrice = {
 price: number;
 formattedPrice: string;
};

declare type TImage = {
 id: ID;
 src: string;
 alt: string;
};

declare type TVariant = {
 id: ID;
 name: string;
 value: string;
};

declare type TCartContext = {
 totalOrders: number;
 cart: Array<TCartItem>;
 addItem: (item: TCartItem) => void;
 removeItem: (id: string) => void;
};

declare type TCartProduct = Pick<TProduct, "id" | "name" | "price"> & {
 variants: { [key: string]: TVariant };
 image: TImage;
};
declare type TCartItem = {
 id: ID;
 qty: number;
 product: TCartProduct;
};

declare type TComment = {
 id: ID;
 user: { name: string; id: ID };
 body: string;
 rate: number;
 createdAt: string;
};
