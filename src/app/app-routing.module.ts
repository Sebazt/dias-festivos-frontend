import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DiasComponent } from './componentes/dias/dias.component';

const routes: Routes = [
  { path: 'dias', component: DiasComponent },
  { path: 'home', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dias' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
