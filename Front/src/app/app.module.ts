import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
