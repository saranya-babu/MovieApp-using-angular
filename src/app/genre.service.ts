import {Injectable} from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class genreService
{
    constructor(private _http:Http){}
    getgenre(value:string)
    {
        return this._http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=596e326635267ebdfa5808c12a96e9a3&language=en-US').map(res=>res.json());
    }    
}
