import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SubirImagenComponent } from './components/subir-imagen-component/subir-imagen-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "imagenes", component: SubirImagenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
