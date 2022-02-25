
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
selector:'pm-product-list',
templateUrl: './product-list.component.html',
styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit ,OnDestroy
{  
    pageTitle ='Product List';
    display:string='';
    imageToggle:boolean=false;
    errorMessage:string='';
    productList: IProduct[] =[];

    sub! :Subscription;

    constructor(private productService: ProductService, private router:Router){}


    private _listFilter:string = '';

    get listFilter():string
    {
        return this._listFilter;
    }
    set listFilter(value:string){
        this.display='';
        this._listFilter=value;
        console.log(this.listFilter);
        this.filteredProducts=this.performFilter(value);
    }

    filteredProducts:IProduct[]=[];


    toggleImage():void{
        this.imageToggle= !this.imageToggle;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngOnInit(): void {
        this.sub=this.productService.getProducts().subscribe({
            next: products =>{
                this.productList=products;
                this.filteredProducts=this.productList;
            },
            error: err => this.errorMessage=err
        });
        
        this.listFilter='';
        this.display='';
    }
    performFilter(filteringby:string):IProduct[]
    {
        filteringby=filteringby.toLowerCase();
        return this.productList.filter((product:IProduct) => product.productName.toLowerCase().includes(filteringby));
    }

    onRatingClicked(message:string[]):void
    {
        this.display=message[0]+' '+message[1];
    }
    
    onBack():void{
        this.router.navigate(['/welcome']);
    }
}


