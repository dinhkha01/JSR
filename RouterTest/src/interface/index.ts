export interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
  isDeleted: boolean; // đại diện cho trạng thái đã bị xóa
}
