import { Component } from '@angular/core';
import {HTTPTestService} from './http-test.service';
import {MaterialModule} from '@angular/material';
import {movieDetails} from './movie-details'
import {genre} from './genre-main'
import {genres} from './genre-list'
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
styleUrls:['./http-test.component.css'],
 

  providers:[HTTPTestService]
})
export class HTTPTestComponent {
    getData=[];
    postData:string;
    value:string;
    moviename:string;
    MovieArray=[];
    throttle = 3000;
  scrollDistance = 20;
  totalpage:number;


   
    constructor(private httpservice:HTTPTestService){}
   
    onTestGet(value,page)
    {
        this.httpservice.getcurrentData(value)
        .subscribe(
            data=>{this.getData=data.results;
              this.totalpage=data.total_results;
            },
            
            error=>alert(error),
            ()=>console.log("finished")
      );
      
    }
   pushData(a,b,c,d,e,f){
     let obj={a,b,c,d,e,f}

     
      this.MovieArray.push(obj);
      console.log(this.MovieArray);
      return this.MovieArray;
    }


    genrefunction(value)
    {
      let genrearray=[];
      genres.forEach(function(e)
      {
        if(value.includes(e.id))
        {
          genrearray.push(e.name);
        }

      })
      return genrearray;
    }

    onScroll (value,page) {
 if(this.httpservice.page<=this.totalpage)
 {
    this.httpservice.page++;
        console.log('scrolled!!');
         this.httpservice.getcurrentData(value)
        .subscribe(
            data=> {data.results.forEach((elem) => {
              this.getData.push(elem);
            })},
            error=>alert(error),
            ()=>console.log("finished")
      );
        
   }
    
 }
}
