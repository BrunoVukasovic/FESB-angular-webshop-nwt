import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }
  // gets items from items.json
  // components are used to display data, services to fetch data
  // get returns observable (like a promise), therefore not blocking main thread while getting data
  getItems(): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>('/assets/items.json');
  }
}
