import { Component } from '@angular/core';
import {HTTPTestService} from './http-test.service';
import {MaterialModule} from '@angular/material';
import {movieDetails} from './movie-details'
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {genreService} from './genre.service';

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
  styleUrls:['./http-test.component.css'],
  providers:[HTTPTestService,genreService]
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
    generArray=[];
   
    constructor(private httpservice:HTTPTestService,private genreservice:genreService){}

  //Read JSON value from movieApp API  
    onTestGet(value,page)
    {
      // nethod to get movie result
        this.httpservice.getcurrentData(value)
        .subscribe(
            data=>{this.getData=data.results;
              this.totalpage=data.total_results;
            },            
            error=>alert(error),
            ()=>console.log("finished")
        );
        // method to get genre details
        this.genreservice.getgenre(value)
        .subscribe(
          data=>this.generArray=data.genres,
          error=>alert(error),
          ()=>console.log("completed")
        );
    }

  //Push data into MovieArray 
   pushData(a,b,c,d,e,f)
   {
     let obj={a,b,c,d,e,f}
     this.MovieArray.push(obj);
     console.log(this.MovieArray);
     return this.MovieArray;
    }

// Genre function
    genrefunction(re)
    {
      let genreArr=[];
      this.generArray.forEach(function(e)
      {
        if(re.includes(e.id))
        {
          genreArr.push(e.name);
        }
      })
      return genreArr;
    }

    // Infinite Scroll 
    onScroll (value,page) 
    {
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
          ()=>console.log("finished"));   
        }
    }
}
    
