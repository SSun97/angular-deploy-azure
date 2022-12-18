import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'mda-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products';


  // public dis!: boolean;
  @Input() dis: boolean | undefined;
  @Input() errorMessage!: string | null;
  @Input() products!: Product[] | null;
  @Input() displayCode!: boolean | null;
  @Input() selectedProduct: Product | null|undefined;
  @Output() displayCodeChanged = new EventEmitter<void>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }
  ngOnInit(): void {
    console.log('ngOnInit' + "products" +this.products);
    console.log('displayCode' + this.displayCode);
  }
}

