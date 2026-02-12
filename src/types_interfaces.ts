//exercices 1
type UserType = {
  id: number;
  name: string;
};

type BookType = {
  id: number;
  name: string;
  authorId: number;
};

type AuthorType = UserType & {
  books: BookType[];
};

const user: UserType = {
  id: 1,
  name: "Jane Doe",
};

const book: BookType = {
  id: 1,
  name: "The Witcher",
  authorId: 1,
};

const author: AuthorType = {
  id: 1,
  name: "Raul Seixas",
  books: [book],
};

//exercices 2

const users: UserType[] = [
  {
    id: 1,
    name: "Jonny Rf",
  },
  { id: 22, name: "Edurad Coller" },
];

console.log(users);

//exercices 3
interface MathFunc {
  (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

console.log(sum(2, 2));
console.log(sub(10, 2));

//exercices 4
interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface IOrder {
  id: number;
  products: IProduct[];
}

const product: IProduct = {
  id: 1,
  name: "MacBook",
  price: 999,
};

const order: IOrder = {
  id: 1,
  products: [product],
};

export {};
