import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent as Home } from './components/home/home.component'
import { BreweriesComponent as Breweries } from './components/breweries/breweries.component'
import { AboutComponent as About } from './components/about/about.component'

const routes: Routes = [
	{ path: '', component: Breweries },
	{ path: 'breweries', component: Breweries },
	{ path: 'about', component: About },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
