import {Injectable} from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService
{
    page=1;
    constructor(private _http:Http){}
    getcurrentData(value:string){
        return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=79c71d219bbe9bc37d390a039810794e&language=en-US&query='+value+'&page='+this.page+'&include_adult=false').map(res=>res.json());
    }
    
    
    Postjson()
    {

    }
}
