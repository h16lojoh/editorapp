import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me/me.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'me', component: MeComponent},
  { path: 'list', component: ListComponent},
  { path: '', component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MeComponent, EditorComponent]
