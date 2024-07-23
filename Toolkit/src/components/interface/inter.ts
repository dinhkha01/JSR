export interface Product {
  id: number;
  name: string;
  img: string;
  datem: string;
  datet: string;
  status: boolean;
}
export interface ProductsState {
  items: Product[];
}
