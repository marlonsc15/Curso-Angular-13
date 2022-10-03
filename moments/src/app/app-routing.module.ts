import { MomentComponent } from './components/pages/moment/moment.component';
import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,  
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'moments/new', 
    component: NewMomentsComponent,  
  },
  {
    path: 'moments/:id', component: MomentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
