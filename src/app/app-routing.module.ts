import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { GithubComponent } from './github/github.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'github',
        component: GithubComponent
      },
      {
        path: 'calculator',
        component: CalculatorComponent
      },

    ]
  },
  {
    path: '**',
    redirectTo: '/github',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
