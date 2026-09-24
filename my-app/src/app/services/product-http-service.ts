import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ProductHttpService {
    private _url:string ="/data/customer.json"
    constructor(private _http:HttpClient){}
    getProductList():Observable<any[]>{
        return this._http.get<any[]>(this._url)
    }
}

