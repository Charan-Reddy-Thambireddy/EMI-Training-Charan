import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle:string='Product Details';

  productList:IProduct[];
  product:IProduct|undefined;
  errorMessage:string='';
  sub!:Subscription;
  constructor(private route: ActivatedRoute,private productService:ProductService, private router: Router) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sub=this.productService.getProducts().subscribe({
      next: products =>{
          this.productList=products.filter((product: IProduct) => product.productId===id);
          this.product=this.productList[0];
          this.pageTitle=this.pageTitle+`: ${this.product!.productName}`;
      },
      error: err => this.errorMessage=err
  });
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }
  



}
