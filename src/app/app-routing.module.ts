import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  {
    path: "", component:CardDetailsComponent
  },
  {
    path:"list/:searchedName", component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
