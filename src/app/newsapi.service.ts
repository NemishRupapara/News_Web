// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class NewsapiService {

//   constructor(private http:HttpClient) { }

//   apikey="47cebc07da07430ab2a35d659d175e35";
//   apiurl="https://newsapi.org/v2/top-headlines?country=in&apiKey=47cebc07da07430ab2a35d659d175e3";


//   topheading():Observable<any>{
//     return this.http.get(this.apiurl);
//   }
// countryname(name:string){

// }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  apikey = "47cebc07da07430ab2a35d659d175e35";
  baseUrl = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines";
  country: string = ""
  catagory: string = ""


  topheading(): Observable<any> {
    const apiurl = `${this.baseUrl}?country=${this.country}&category=${this.catagory}&pageSize=90&apiKey=${this.apikey}`;
    // Construct the full API URL with the provided country parameter
    // Make the HTTP request with the dynamic URL
    return this.http.get(apiurl);
  }

  countryname(name: string) {
    this.country = name;
    // console.log(name, name);
  }

  catagoryname(name: string) {
    this.catagory = name;
  }
}