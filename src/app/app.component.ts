import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Testing';
  firstImage = "";
  images = [];

  constructor(private http: HttpClient){

  }
  
  ngOnInit(){

    this.http.get<String[]>("http://localhost:9090/api/get/store").subscribe(
      (response) => {
        let isFirst = true;

        response.forEach(element => {

          let imageURL = "http://localhost:9090/api/get/storage/" + element
          if(!isFirst)
            this.images.push(imageURL);
          else {
            this.firstImage = imageURL;
            isFirst = false;
          }
        });
      },
      (error) => console.log(error)
    )    
  }  
}