import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./produst/produst.module').then(m=>m.ProdustModule)
  },
  {
    path:'Login',
    loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'**',
    component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
