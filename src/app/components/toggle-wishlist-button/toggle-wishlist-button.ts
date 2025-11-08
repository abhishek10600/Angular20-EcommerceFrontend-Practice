import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon, MatIconButton],
  template: `
    <button
      [class]="isInWishList() ? '!text-red-500' : '!text-gray-400'"
      class="w-10 h-10 rounded-full !bg-white border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
      matIconButton
      (click)="toggleWishList(product())"
    >
      <mat-icon>{{ isInWishList() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
  styles: ``,
})
export class ToggleWishlistButton {
  product = input.required<Product>();

  store = inject(EcommerceStore);

  isInWishList = computed(() => this.store.wishListItems().find((p) => p.id === this.product().id));

  toggleWishList(product: Product) {
    if (this.isInWishList()) {
      this.store.removeFromWishList(product);
    } else {
      this.store.addToWishList(product);
    }
  }
}
