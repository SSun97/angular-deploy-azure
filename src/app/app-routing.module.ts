import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ShellComponent } from './home/shell/shell.component';

const routes: Routes = [
  { path: '', component: ShellComponent},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
