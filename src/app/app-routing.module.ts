import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCursoComponent } from './formulario-curso/formulario-curso.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: 'mod-curso/:cursoID/:eliminar', title: 'Eliminar curso', component: FormularioCursoComponent },
  { path: 'mod-curso/:cursoID', title: 'Modificar curso', component: FormularioCursoComponent },
  { path: 'mod-curso', title: 'Formulario curso', component: FormularioCursoComponent },
  { path: 'lista-cursos', title: 'Lista de cursos', component: ListaCursosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista-cursos' } // Manda por defecto a lista cursos de entrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
