import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './komponentai/about/about.component';
import { HomeComponent } from './komponentai/home/home.component';
import { UserComponent } from './komponentai/user/user.component';

const routes: Routes = [

{path: 'about', component: AboutComponent},
{path: 'home', component: HomeComponent},
{path: 'user/:id', component: UserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
