import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-main-section',
  imports: [ SearchComponent, HotelsComponent, DropdownComponent, PaginationComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
