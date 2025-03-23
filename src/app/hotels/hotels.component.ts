import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-hotels',
  imports: [],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'

})
export class HotelsComponent {
  public hotels: any[] = []; 
  public filteredHotels: any[] = [];

  constructor(private apiService: ApiService,  public router: Router) {
  }

  ngOnInit() {
    this.fetchHotels();
  }
  fetchHotels() {
    this.apiService.getHotels().pipe(
      catchError((error) => {
        console.error('Error fetching hotels:', error);
        return of([]); 
      })
    ).subscribe((data: any) => {
      this.hotels = data;
      this.filteredHotels = data; 
    });
  }

  onSearch(query: string) {
    this.filteredHotels = this.hotels.filter(hotel => 
      hotel.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  navigateToHotelInfo(id: string) {
    this.router.navigate(['hotel', id]); 
  }
}

