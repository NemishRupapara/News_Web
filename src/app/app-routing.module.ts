import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';

const routes: Routes = [
  {path:'',component:HeadingComponent},

  {path:'Home',component:HeadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
