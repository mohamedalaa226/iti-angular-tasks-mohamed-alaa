import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { ProdustModule } from './produst/produst.module';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Stock2Pipe } from './pipes/stock2.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    Stock2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProdustModule,
    LoginModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
