export interface Product {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
}

export interface ProductState {
  loadingProduct: boolean;
  productList: Product[];
}
