import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirImagenComponent } from './components/subir-imagen-component/subir-imagen-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceSubida } from './services/service-subida';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';

@NgModule({
  declarations: [App, SubirImagenComponent, MenuComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceSubida],
  bootstrap: [App],
})
export class AppModule {}
