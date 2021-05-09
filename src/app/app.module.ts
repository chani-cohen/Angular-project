import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDestinationsComponent } from './components/show-destinations/show-destinations.component';
import { CreateDestinationComponent } from './components/create-destination/create-destination.component';
import { fromEvent } from 'rxjs';
import { ShowOrdersComponent } from './components/show-orders/show-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowDestinationsComponent,
    CreateDestinationComponent,
    ShowOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
