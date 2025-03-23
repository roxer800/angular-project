import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { SmallSearchComponent } from '../small-search/small-search.component';
import { OptionsComponent } from '../options/options.component';
import { NormalSearchComponent } from '../normal-search/normal-search.component';

@Component({
  selector: 'app-search',
  imports: [NormalSearchComponent, OptionsComponent, SmallSearchComponent, MapComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
