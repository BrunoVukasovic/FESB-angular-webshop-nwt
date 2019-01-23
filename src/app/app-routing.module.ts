import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  { path: 'items', component: ItemListComponent},
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  { path: 'item/:id', component: ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
