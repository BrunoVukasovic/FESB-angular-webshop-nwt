import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<IItem[]>;

  // dependecy injection is defined in constructor
  constructor(private itemService: ItemService, private router: Router) { }

  viewItem(id: number): void {
    this.router.navigate([`/item/${id}`]);
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

}
