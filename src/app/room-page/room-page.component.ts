import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-room-page',
  imports: [],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.css'
})
export class RoomPageComponent {
  public roomId: string | null = null;
  public roomInfo: any = []; 

  constructor(private apiService: ApiService,  public router: Router, private route: ActivatedRoute) {}

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
    });
  }

  navigateToForm(id: string) {
    this.router.navigate(['form', id]); 
  }
}
