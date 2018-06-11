import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SurvivorStoriesComponent } from './components/survivor-stories/survivor-stories.component';


const routes: Routes = [
  {path: '', component: HomeComponent}, //this will make the home component index by default
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'survivor-stories', component: SurvivorStoriesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
