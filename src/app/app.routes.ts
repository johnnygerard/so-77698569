import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: OneComponent },
  {
    path: 'two',
    component: TwoComponent,
    children: [
      { path: 'three', component: ThreeComponent },
      { path: 'four', loadComponent: () => import('./four/four.component').then(m => m.FourComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
