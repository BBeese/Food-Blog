import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { AboutComponent } from './about/about.component';
import { FunctionsComponent } from './functions/functions.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'archive', component: ArchiveComponent},
  { path:'about', component: AboutComponent},
  { path: 'functions', component: FunctionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
