import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  imports: [],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {
  public bookingDetails: any = []; 

  constructor(private apiService: ApiService,  public router: Router) {
    this.fetchBookingDetails();
    }

    fetchBookingDetails() {
      this.apiService.getBookingDetails().pipe(
        catchError((error) => {
          console.error('Error fetching booking details:', error);
          return of([]); 
        })
      ).subscribe((data: any) => {
        this.bookingDetails = data.filter((booking: any) => booking.customerId === "55555");
      });
    }
    deleteBooking(id: string) {
      this.apiService.deleteBookingDetails(id).pipe(
        catchError((error) => {
          console.error('Error deleting booking:', error);
          return of(null);
        })
      ).subscribe((data: any) => {
        if (data) {
          console.log('Booking deleted successfully', data);
          this.bookingDetails = this.bookingDetails.filter((booking: any) => booking.id !== id);
        }
      });
    }
  
}
