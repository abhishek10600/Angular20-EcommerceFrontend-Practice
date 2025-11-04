import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  template: `
    <div class="bg-gray-100 p-6 h-full">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">{{ category() }}</h1>

      <div class="responsive-grid">
        @for (product of filteredProducts(); track product.id){
          <!-- <app-product-card [product]="product" (addToCartClicked)="addToCart($event)"/> -->
          <app-product-card [product]="product"/>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: '1',
      name: 'Wireless Noise-Cancelling Headphones',
      description:
        'Experience immersive sound with active noise cancellation and 30 hours of battery life.',
      price: 199.99,
      imageUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      rating: 4.6,
      reviewCount: 1342,
      inStock: true,
      category: 'electronics',
    },
    {
      id: '2',
      name: 'Smart LED Desk Lamp',
      description:
        'Adjustable color temperature and brightness with touch controls and USB charging port.',
      price: 49.99,
      imageUrl: 'https://images.pexels.com/photos/284951/pexels-photo-284951.jpeg',
      rating: 4.3,
      reviewCount: 287,
      inStock: true,
      category: 'home & office',
    },
    {
      id: '3',
      name: 'Ergonomic Office Chair',
      description:
        'Breathable mesh design with adjustable height, lumbar support, and 360° swivel.',
      price: 179.0,
      imageUrl: 'https://images.pexels.com/photos/27920699/pexels-photo-27920699.jpeg',
      rating: 4.5,
      reviewCount: 982,
      inStock: false,
      category: 'furniture',
    },
    {
      id: '4',
      name: 'Stainless Steel Water Bottle',
      description: 'Insulated bottle keeps drinks cold for 24 hours or hot for 12 hours.',
      price: 24.99,
      imageUrl: 'https://images.pexels.com/photos/28406043/pexels-photo-28406043.jpeg',
      rating: 4.8,
      reviewCount: 453,
      inStock: true,
      category: 'outdoors',
    },
    {
      id: '5',
      name: '4K Ultra HD Smart TV',
      description: '55-inch 4K HDR Smart TV with streaming apps and voice control compatibility.',
      price: 599.99,
      imageUrl: 'https://images.pexels.com/photos/28104067/pexels-photo-28104067.jpeg',
      rating: 4.7,
      reviewCount: 789,
      inStock: true,
      category: 'electronics',
    },
  ]);

  filteredProducts = computed(() => {
    if(this.category() === "all"){
      return this.products();
    }else{
      return this.products().filter((p) => p.category === this.category().toLowerCase())
    }
  }
  );

  // addToCart(){

  // }
}
