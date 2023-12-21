import { Component, OnInit, HostListener } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Spinkit } from 'ng-http-loader';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],

})
export class HeadingComponent {
  loadingSpinner: boolean = false;
  public spinkit = Spinkit;
  scrollProgress: number = 0;
  headingdisplay: any = []
  active = 2;
  p: any;
  // currentPage = 1; // Initialize the current page to 1
  // itemsPerPage = 9; // Number of items to display per page

  constructor(private service: NewsapiService, private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
    // this.spinner.show();
    this.service.countryname('in');
    this.service.catagoryname('general');
    this.service.topheading().subscribe((result) => {
      // console.log(result);
      this.headingdisplay = result.articles;

    })


  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (window.scrollY / scrollHeight) * 100;
  }
  countryname(name: string) {
    // this.spinner.show();
    this.service.countryname(name);
    console.log(name);
    this.service.topheading().subscribe((result) => {
      console.log(result);
      this.headingdisplay = result.articles;

    })
  }


  catagoryname(name: string) {
    // this.spinner.show();s

    this.service.catagoryname(name);
    console.log(name);
    this.service.topheading().subscribe((result) => {
      console.log(result);
      this.headingdisplay = result.articles;

    })
    console.log(name);
  }
}
