import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  public roomId: string | null = null;
  public roomInfo: any = []; 
  public formInfo: FormGroup;

  constructor(private apiService: ApiService, public router: Router, private route: ActivatedRoute) {
    // Initialize the form group
    this.formInfo = new FormGroup({
      roomID: new FormControl(null),
      checkIn: new FormControl(""),
      checkOut: new FormControl(""),
      totalPrice: new FormControl(null),
      isConfirmed: new FormControl(true),
      customerName: new FormControl(""),
      customerId: new FormControl("666666"),
      customerPhone: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('id'); 
      if (this.roomId) {
        this.fetchRoomInfo(this.roomId); 
      }
    });
  }

  fetchRoomInfo(roomId: string) {
    this.apiService.getRoomInfo(roomId).pipe(
      catchError((error) => {
        console.error('Error fetching room info:', error);
        return of(null);
      })
    ).subscribe((data: any) => {
      this.roomInfo = data;
      this.updateFormValues();
    });
  }

  updateFormValues() {
    this.formInfo.patchValue({
      roomID: this.roomId,
      totalPrice: this.roomInfo.pricePerNight
    });
  }

  addReservation() {
    console.log('Form Values:', this.formInfo.value); 
    this.apiService.reservation(this.formInfo.value).pipe(
      catchError((error) => {
        console.error('Error occurred during reservation:', error);
        console.log(this.formInfo.value);
        return of(null); 
      })
    ).subscribe({
      next: (data: any) => {
        console.log('Reservation Successful', data);
      },
      error: (err) => {
        console.error('Error Occurred:', err);
      }
    });
  }
}