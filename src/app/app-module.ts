import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirImagenComponent } from './components/subir-imagen-component/subir-imagen-component';
import { provideHttpClient } from '@angular/common/http';
import { ServiceSubida } from './services/service-subida';

@NgModule({
  declarations: [App, SubirImagenComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceSubida],
  bootstrap: [App],
})
export class AppModule {}
