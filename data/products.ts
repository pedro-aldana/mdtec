export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "React Developer Tee",
    description: "Comfortable t-shirt with React logo and code snippet design",
    price: 29.99,
    category: "ropa",
    image: "/images/node.png",
  },
];

export const CATEGORIES = ["all", "ropa", "diseño", "digital", "mercancía"];

export default products;
