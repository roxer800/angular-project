import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-hotel-info',
  imports: [],
  templateUrl: './hotel-info.component.html',
  styleUrl: './hotel-info.component.css'
})
export class HotelInfoComponent {
  public hotelInfo: any = []; 
  public hotelId: string | null = null;

    constructor(private apiService: ApiService,  public router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.hotelId = params.get('id'); 
        if (this.hotelId) {
          this.fetchHotelInfo(this.hotelId); 
        }
      });
    }

    fetchHotelInfo(hotelId: string) {
      this.apiService.getHotelInfo(hotelId).pipe(
        catchError((error) => {
          console.error('Error fetching hotel info:', error);
          return of(null);
        })
      ).subscribe((data: any) => {
        this.hotelInfo = data;
        console.log(this.hotelInfo);
      });
    }

    navigateToRoom(id: string) {
      this.router.navigate(['room', id]); 
    }
}
