import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, RouterModule, FormsModule, NgClass],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  searchQuery: string = ''; // Para armazenar o termo de pesquisa
  currentPage: number = 1; // Página atual
  itemsPerPage: number = 5; // Quantidade de itens por página

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    // Chama o metodo do service com filtro e paginação
    this.products = this.productService.getProducts(
      this.searchQuery,
      this.currentPage,
      this.itemsPerPage
    );
  }

  deleteProduct(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.productService.deleteProduct(id);
      this.getProducts(); // Atualiza a lista após exclusão
    }
  }

  onSearch(): void {
    // Reseta para a primeira página ao buscar
    this.currentPage = 1;
    this.getProducts();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.getProducts();
  }

  nextPage(): void {
    this.currentPage++;
    this.getProducts();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts();
    }
  }
}
