import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {tap,catchError} from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
    providedIn:'root'
}
)
export class ProductService
{
    constructor(private http:HttpClient){}

    httpPath:string='api/products/products.json';
    
    getProducts():Observable<IProduct[]>
    {
        return this.http.get<IProduct[]>(this.httpPath).pipe(
            tap(data=> console.log('All',JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse)
    {
        let errorMessage='';

        if(err.error instanceof ErrorEvent)
        {
            errorMessage=`Error occured in ${err.message}`;
        }
        else{
            errorMessage=`Server returned code ${err.status}, error message is ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
    /* getProducts(): IProduct[]
    {
        return [
            {
                "productId":1,
                "productName":"Garden Cart",
                "productCode": "G6-UI-LUP9",
                "releaseDate": "17-May-2020",
                "price":169.76,
                "rating":4.2,
                "imageurl":"assets/images/garden_cart.png"
            },
            {
                "productId":2,
                "productName":"Hammer",
                "productCode": "YO-TI-LKR9",
                "releaseDate": "28-June-2019",
                "price":72.69,
                "rating":3.8,
                "imageurl":"assets/images/hammer.png"
            },
            {
                "productId":3,
                "productName":"Saw",
                "productCode": "DP-TI-LRR3",
                "releaseDate": "16-Feb-2019",
                "price":112.08,
                "rating":2.8,
                "imageurl":"assets/images/saw.png"
            },
            {
                "productId":4,
                "productName":"Leaf Rake",
                "productCode": "HH-WE-ZUA8",
                "releaseDate": "28-Jan-2020",
                "price":12.58,
                "rating":4.4,
                "imageurl":"assets/images/leaf_rake.png"
            },
            {
                "productId":5,
                "productName":"Xbox Controller",
                "productCode": "SO-QP-BEA2",
                "releaseDate": "28-Sep-2021",
                "price":145.64,
                "rating":4.9,
                "imageurl":"assets/images/xbox-controller.png"
            }
        ]
    } */

