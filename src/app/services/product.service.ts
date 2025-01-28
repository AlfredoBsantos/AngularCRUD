import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1234, customer: 'John Doe', name: 'Product A', status: 'Completed' },
    { id: 1235, customer: 'Jane Smith', name: 'Product B', status: 'Pending' },
    { id: 1236, customer: 'Mike Johnson', name: 'Product C', status: 'Cancelled' },
    { id: 1237, customer: 'Alice Brown', name: 'Product D', status: 'Completed' },
    { id: 1238, customer: 'Tom Hanks', name: 'Product E', status: 'Pending' },
    { id: 1239, customer: 'Bruce Wayne', name: 'Product F', status: 'Cancelled' },
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((product) => product.id === id)!;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) this.products[index] = updatedProduct;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  /**
   * Get products with optional search and pagination.
   * @param search Term to search for in product names (case insensitive).
   * @param page Current page number (1-based index).
   * @param limit Number of items per page.
   * @returns A paginated list of products matching the search criteria.
   */
  getProducts(search: string = '', page: number = 1, limit: number = 10): Product[] {
    let filteredProducts = this.products;

    // Filter by search term if provided
    if (search.trim()) {
      filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Paginate results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return filteredProducts.slice(startIndex, endIndex);
  }
}
