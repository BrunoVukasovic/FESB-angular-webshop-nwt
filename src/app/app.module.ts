import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './components/rating/rating.component';
import { FavouriteAsideComponent } from './components/favourite-aside/favourite-aside.component';
import { FavouriteButtonComponent } from './components/favourite-button/favourite-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    RatingComponent,
    FavouriteAsideComponent,
    FavouriteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // dependency injection nece radit ako ne importamo ovde
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
