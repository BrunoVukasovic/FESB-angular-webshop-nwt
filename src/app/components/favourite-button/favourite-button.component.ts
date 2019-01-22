import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/models/item.model';
import { HttpClient } from '@angular/common/http';
import { ItemService } from 'src/app/services/item.service';
import { FavouriteAsideComponent } from '../favourite-aside/favourite-aside.component';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent implements OnInit {
  @Input() item: IItem; // prima od item-list komponente
  favouriteItems: IItem[];
  isFavourite: boolean;

  constructor(private httpClient: HttpClient, private itemSerivce: ItemService) { }

  ngOnInit() {
    if ( this.item.favourite === true) {
      this.isFavourite = true;
    } else {
      this.isFavourite = false;
    }
  }

  AddToFavourites() {
    this.isFavourite = !this.isFavourite;
    if ( this.item.favourite === true) {
      this.item.favourite = false;
    } else {
      this.item.favourite = true;
    }
    // this.httpClient.put('/assets/items.json', JSON.stringify(this.item));
    this.httpClient.patch('/assets/items.json', JSON.stringify( {favourite: true} ));
    console.log(JSON.stringify(this.item));
    this.itemSerivce.setSubject(this.item);
    // FavouriteAsideComponent
  }


}
