import { Component,Input} from '@angular/core'
import { HTTPTestComponent } from './http-test.component'
import {favoriteService  } from "./app-favorite.service";

@Component({
  selector: 'my-favorite',
 templateUrl:'./app.favorite.html',
 styleUrls:['./app.favorite.css'],
providers:[favoriteService]
})
export class favoriteComponent {     

    constructor (private fav:favoriteService){

    this.fav.getcurrentData()
        .subscribe(
            data=>{this.fav.MovieArrayFav=data;
              console.log(this.fav.MovieArrayFav);
            },            
            error=>alert(error),
            ()=>console.log("finished")
        );
   }

   postdata(Id,title,overview,release_date,poster_path,popularity,vote_average,original_language)
   {
     let id=String(Id);
      let value={id,title,overview,release_date,poster_path,popularity,vote_average,original_language};
      this.fav.postfavdata(value).subscribe(
        (data)=>console.log("Post data"),
        
          error=>alert(error),
          ()=>console.log("data posted successfully")
      );
   } 

   deletedata(Id)
   {
     let id=String(Id);
     this.fav.deletefavdata(id).subscribe(
       data=>{this.fav.MovieArrayFav=data;
         console.log(this.fav.MovieArrayFav);
            },            
              error=>alert(error),
              ()=>console.log("data deleted succesfully")     
        );
    } 

  putdata(Id,title,overview,release_date,poster_path,popularity,vote_average,original_language)
  {
    let id=String(Id);
    let value={id,title,overview,release_date,poster_path,popularity,vote_average,original_language};

    this.fav.putfavdata(id,value).subscribe(
      data=>{
        console.log('data modified');
        console.log(data);
      },
      error=>alert(error),
      ()=>console.log("finished")
        
    );
  }
}
