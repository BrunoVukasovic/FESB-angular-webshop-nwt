import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { IItem } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  item: IItem;

  constructor( private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.itemService.getItems().subscribe((items: IItem[]) => {
        this.item = items.find((selectedItem: IItem) => selectedItem.id === +params['id']);
      });
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
