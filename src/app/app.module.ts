import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './newsapi.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CardHeightDirective } from './card-height.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgHttpLoaderModule } from 'ng-http-loader';




@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    CardHeightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    HttpClientModule,
    NgbDropdownModule,
    NgxPaginationModule,
    FormsModule,
    NgxSpinnerModule,
    NgHttpLoaderModule.forRoot(),
    
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
