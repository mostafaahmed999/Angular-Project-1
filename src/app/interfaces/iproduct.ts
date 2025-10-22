export interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  rate: number;
  count: number;
  quantity?: number;
}
