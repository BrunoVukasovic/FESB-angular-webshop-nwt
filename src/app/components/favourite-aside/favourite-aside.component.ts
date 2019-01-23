import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { IItem } from 'src/app/models/item.model';

@Component({
  selector: 'app-favourite-aside',
  templateUrl: './favourite-aside.component.html',
  styleUrls: ['./favourite-aside.component.css']
})
export class FavouriteAsideComponent implements OnInit {
  favouriteItems: IItem[];


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((items: IItem[]) => {
      // subscribe == kad dohvati itemse obavjesiti ce nas, do tad ne blokira main tread
      // items su objekti iz jsona
      this.favouriteItems = items.filter((eachItem: IItem) => eachItem.favourite === true);

      /* ne radi
      this.itemService.favouriteSubject.subscribe( item => {
        console.log(item);
        this.favouriteItems.push(item);
        console.log(this.favouriteItems);
      });
      */
    });
  }

}
