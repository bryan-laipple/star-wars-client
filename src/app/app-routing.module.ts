import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  { path: ':type', component: ListComponent },
  { path: ':type/:id', component: DetailsComponent},
  // { path: '',
  // 	redirectTo: '/test-runner',
  // 	pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, { enableTracing: false } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
