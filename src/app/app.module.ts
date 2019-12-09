import { SearchContainersService } from './services/search-containers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchContainersComponent } from './components/search-containers/search-containers.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainersComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ SearchContainersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
