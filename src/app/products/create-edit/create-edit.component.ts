import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-edit',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit {
  product: Product = { id: 0, name: '', status: 'Pending', customer: '' };
  isEditMode: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.product = this.productService.getProductById(+id);
    }
  }

  saveProduct(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product);
    } else {
      this.productService.addProduct(this.product);
    }
    this.router.navigate(['/products']);
  }
}
