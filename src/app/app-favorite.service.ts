import {Injectable,Input} from '@angular/core';
import { Http,RequestOptions,Response,Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class favoriteService
{
    @Input()
    MovieArrayFav=[];
    constructor(private _http:Http){}
    getcurrentData()
    {
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });
        return this._http.get('http://localhost:3000/api/bear').map(res=>res.json());
    }       

    postfavdata(val)
    {
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:3000/api/bear',val).map(()=>console.log('fav movie posted'));
    }   

    deletefavdata(id)
    {
         let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete('http://localhost:3000/api/bear/'+id).map(res=>res.json());
    }

    putfavdata(id,value)
    {
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put('http://localhost:3000/api/bear/'+id,value).map(()=>console.log(value));
    }

      
}
