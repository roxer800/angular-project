import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getHotels() {
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll");
  }

  getHotelInfo(id: string) {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`);
  }
  getRoomInfo(id: string) {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`);
  }

  reservation(body:any) {
    return this.http.post("https://hotelbooking.stepprojects.ge/api/Booking", body)
  }

  getBookingDetails() {
    return this.http.get("https://hotelbooking.stepprojects.ge/api/Booking");
  }

  deleteBookingDetails(id: string) {
    return this.http.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`);
  }

  GetFilters(body:any) {
    return this.http.post("https://hotelbooking.stepprojects.ge/api/rooms/GetFiltered", body)
  }
}