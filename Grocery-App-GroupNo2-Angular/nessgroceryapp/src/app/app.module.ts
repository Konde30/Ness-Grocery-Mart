import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { GroceryStaplesComponent } from './grocery-staples/grocery-staples.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { BackeryItemsComponent } from './backery-items/backery-items.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckoutComponent,
    IndexComponent,
    AboutusComponent,
    ContactComponent,

  
    FruitsComponent,
    VegetablesComponent,
    GroceryStaplesComponent,
    BeveragesComponent,
    BackeryItemsComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
