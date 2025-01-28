export interface Product {
  id: number;
  name: string;
  customer: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
}
