import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent as Home } from './components/home/home.component'
import { BreweriesComponent as Breweries } from './components/breweries/breweries.component'

const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'breweries', component: Breweries },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
