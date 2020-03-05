import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MealService } from './meal.service';
import { ArchiveComponent } from './archive/archive.component';
import { AboutComponent } from './about/about.component';
import { FunctionsComponent } from './functions/functions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchiveComponent,
    AboutComponent,
    FunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
