import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BackeryItemsComponent } from './backery-items/backery-items.component';
import { BeveragesComponent } from './beverages/beverages.component';

import {CheckoutComponent} from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GroceryStaplesComponent } from './grocery-staples/grocery-staples.component';
import {IndexComponent} from './index/index.component';

import { VegetablesComponent } from './vegetables/vegetables.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path:'aboutus',component:AboutusComponent},
 
  {path:'contact',component:ContactComponent},
  {path:'fruits',component:FruitsComponent},
 
  {path:'grocery-staples',component:GroceryStaplesComponent},
  {path:'vegetables',component:VegetablesComponent},
 {path:'beverages',component:BeveragesComponent},
 {path:'backery-items',component:BackeryItemsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
