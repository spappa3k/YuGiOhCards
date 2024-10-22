import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  {
    path: "", component:HomeComponent
  },
  {
    path:"list/:searchedName", component: ListComponent
  },
  {
    path:"card/:id", component:CardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
