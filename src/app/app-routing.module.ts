import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { CouncilViewComponent } from './council-view/council-view.component';


const routes: Routes = [
  { 
    path: '', 
    component: UserViewComponent 
  },
  {
    path: 'council',
    component: CouncilViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
