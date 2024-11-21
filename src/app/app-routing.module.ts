import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "", component:HomeComponent
  },
  {
    path:"list/:searchedName", component: ListComponent , canActivate: [authGuard]
  },
  {
    path:"card/:id", component:CardDetailsComponent, canActivate: [authGuard]
  },
  {
    path:"favorites", component:FavoritesComponent, canActivate: [authGuard]
  },
  /*{
    path:"login", component:LoginComponent, canActivate: [authGuard]
  },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
