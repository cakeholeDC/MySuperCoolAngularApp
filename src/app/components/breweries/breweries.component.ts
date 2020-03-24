import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {
	state:string = 'District of Columbia'
	showing:string = ''
	brews: Object;

  constructor(private _http:HttpService) { }

  ngOnInit(): void {
  	this._http.fetchBreweries(this.state).subscribe(data => {
  		this.brews = data
  		console.log(this.brews)
  	})
  	this.showing = this.state
  }

  submitStateSearch(){
  	this._http.fetchBreweries(this.state).subscribe(data => {
  		this.brews = data
  	})
  	this.showing = this.state
  }

}
